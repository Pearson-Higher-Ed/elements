const changelog = require('conventional-changelog');
const fs = require('fs');
const exec = require('./exec');

const FILENAME = 'CHANGELOG.md';
const REGENERATE_ALL = 0;

const outStream = fs.createWriteStream(FILENAME);

const changelogStream = changelog({
  preset: 'angular',
  releaseCount: REGENERATE_ALL
});

changelogStream.pipe(outStream);

changelogStream.on('end', () => {
  console.log('Changelog saved to', FILENAME);
});
