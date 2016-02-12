// Execute this script in the target branch to release to npm!

const exec = require('./exec');
const fs = require('fs');
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

function generateCommitChangeLog(nextVersion) {
  exec('npm run gen-changelog');
  exec('git add CHANGELOG.md');
  if (exec('git status --porcelain') !== '') {
    exec(`git commit -m "docs: Generate release change log for ${nextVersion}."`);
  }
}

function syncRemote(branchName, nextVersion) {
  exec(`git push origin ${branchName}`);
  exec(`git push --tags`);
  console.log(`TravisCI will now release to npm on the tagged commit ${nextVersion} for the pearson-ux account.`);
}

function exitFailure(message) {
  console.error(message);
  process.exit(1);
}

// RELEASE PROCESS BEGINS HERE

// Releaser provides the target SEMVER-compliant version
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

  generateCommitChangeLog(nextVersion);

  // Ensure the /dist is generated
  exec('npm run build-docs');

  // Locally commit the version update in package.json (also, if present, npm-shrinkwrap.json) and create tag
  exec(`npm version ${nextVersion}`);

  syncRemote(branchName, nextVersion);

  // Generate gh-pages branch and sync with remote
  exec('npm run gh-pages');
  exec('git pull -s recursive -Xours --no-edit');
  exec('git push origin gh-pages');

  stdin.close();
});
