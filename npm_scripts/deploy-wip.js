const exec = require('./exec');
const readline = require('readline');
const path = require('path');

function deploy(branchName) {
  const deployPath = path.join(process.cwd(), '_gh_pages');
<<<<<<< HEAD
  const domain = `pearson-elements-${branchName}.surge.sh`.toLowerCase();

  console.log(`Deploying ${deployPath} to ${domain}`);

  exec(`surge -p ${deployPath} -d ${domain}`);
}

function main(argv) {
  const currentBranch = exec('git rev-parse --abbrev-ref HEAD', true);
=======
  const domain = `pearson-elements-${branchName}.surge.sh`;
>>>>>>> fa547d6aac95f7b79cc46e359550eb8c7d671b75

  if (argv[0] === '-y') {
    deploy(argv[1] || currentBranch);
  } else {
    const stdin = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

<<<<<<< HEAD
=======
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

>>>>>>> fa547d6aac95f7b79cc46e359550eb8c7d671b75
    stdin.question(`Branch name (${currentBranch}): `, (branchName) => {
      deploy(branchName || currentBranch);
      stdin.close();
    });
  }
}

main(process.argv.slice(2));
