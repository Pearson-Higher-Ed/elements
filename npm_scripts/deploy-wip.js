const exec = require('./exec');
const readline = require('readline');
const path = require('path');

function deploy(branchName) {
  const deployPath = path.join(process.cwd(), '_gh_pages');
  const domain = `pearson-elements-${branchName}.surge.sh`.toLowerCase();

  console.log(`Deploying ${deployPath} to ${domain}`);

  exec(`surge -p ${deployPath} -d ${domain}`);
}

function main(argv) {
  const currentBranch = exec('git rev-parse --abbrev-ref HEAD', true);

  if (argv[0] === '-y') {
    deploy(argv[1] || currentBranch);
  } else {
    const stdin = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    stdin.question(`Branch name (${currentBranch}): `, (branchName) => {
      deploy(branchName || currentBranch);
      stdin.close();
    });
  }
}

main(process.argv.slice(2));
