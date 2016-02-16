// Execute this script in the target branch to release to npm!

const exec = require('./exec');
const path = require('path');
const readline = require('readline');
const semver = require('semver');
const pkg = require('../package.json');
const branchName = exec('git rev-parse --abbrev-ref HEAD', true);
const currentVersion = pkg.version;
const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function syncRemote(branchName, nextVersion) {

  exec(`git push origin ${branchName}`);

  if (nextVersion) {
    exec(`git push --tags`);
    console.log(`TravisCI will now release to npm on the tagged commit ${nextVersion} for the pearson-ux account.`);
  }
}

function exitFailure(message) {
  console.error(message);
  process.exit(1);
}

// *** RELEASE PROCESS BEGINS HERE: Releaser provides the target SEMVER-compliant version ***

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

  // Make sure unit tests pass before continuing!
  exec('npm test');

  // Ensure the /dist is generated
  exec('npm run build-docs');

  // 1. Bump the version update in package.json and npm-shrinkwrap.json
  // 2. The 'version' npm script executes changelog generation and adding to commit
  // 3. Locally commit and tag
  exec(`npm version ${nextVersion}`);

  // push commit and tag on target release branch
  syncRemote(branchName, nextVersion);

  // Generate gh-pages branch and sync with remote
  exec('npm run gh-pages');
  exec('git pull -s recursive -Xours --no-edit');
  syncRemote('gh-pages');

  // Go back from whence you came
  exec(`git checkout ${branchName}`);

  stdin.close();
});
