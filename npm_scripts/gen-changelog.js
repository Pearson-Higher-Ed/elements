const changelog = require('conventional-changelog');
const fs = require('fs');
const exec = require('./exec');

const FILENAME = 'CHANGELOG.md';
const REGENERATE_ALL = 0;

const outStream = fs.createWriteStream(FILENAME);

changelog({
  preset: 'angular',
  releaseCount: REGENERATE_ALL
}).pipe(outStream);
