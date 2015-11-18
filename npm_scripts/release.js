const exec = require('./exec');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const semver = require('semver');
const pkg = require('../package.json');

function updateVersion(nextVersion) {
  pkg.version = nextVersion;
  const pkgStr = JSON.stringify(pkg, null, 2);
  fs.writeFileSync(path.join(__dirname, '../package.json'), pkgStr, 'utf8');
}

function tag(version) {
  exec(`git tag -a ${version} -m ${version}`);
  exec(`git tag latest -f`);
}

function syncRemote(branchName, nextVersion) {
  exec(`git push origin ${branchName}`);
  exec(`git push origin ${nextVersion}`);
  exec('git push origin latest -f');
}

function exitFailure(message) {
  console.error(message);
  process.exit(1);
}

const branchName = exec('git rev-parse --abbrev-ref HEAD', true);
const currentVersion = pkg.version;

const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stdin.question(`Next version (current is ${currentVersion})? `, (nextVersion) => {
  if (!semver.valid(nextVersion)) {
    exitFailure(`Version '${nextVersion}' is not valid: it must be a valid semantic version. See http://semver.org/.`);
  }

  if (!semver.gt(nextVersion, currentVersion)) {
    exitFailure(`Version '${nextVersion}' is not valid: it must be greater than the current version.`);
  }

  if (nextVersion.startsWith('v')) {
    nextVersion = nextVersion.slice(1);
  }

  exec('npm test');

  // Update the version and generate the changelog
  updateVersion(nextVersion);
  exec('npm run gen-changelog');

  // Commit and tag
  exec(`git commit --allow-empty -am "chore(): release ${nextVersion}"`);
  tag(nextVersion);

  // Sync with remote
  syncRemote(branchName, nextVersion);

  // Publish to npm
  exec('npm publish');

  // Generate gh-pages branch and sync with remote
  exec('npm run gh-pages');
  exec('git pull -s recursive -Xours --no-edit');
  exec('git push origin gh-pages');

  stdin.close();
});
