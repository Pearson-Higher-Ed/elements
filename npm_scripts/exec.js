const execSync = require('child_process').execSync;

module.exports = function exec(command) {
  execSync(command, { stdio: [0, 1, 2] });
};
