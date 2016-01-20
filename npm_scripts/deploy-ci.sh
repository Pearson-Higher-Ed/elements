#!/bin/bash -e

<<<<<<< HEAD
# Do not deploy if this build is for a pull request
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
  echo "This build is for a pull request. Skipping deployment."
  exit 0
=======
npm run build-docs

# Do not deploy if this build is for a pull request
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
  echo "This build is for a pull request. Skipping deployment.";
  exit 0;
>>>>>>> fa547d6aac95f7b79cc46e359550eb8c7d671b75
fi

current_branch=$TRAVIS_BRANCH
is_deployable="^v[0-9]+"

if [[ $current_branch =~ $is_deployable ]]; then
<<<<<<< HEAD
  npm run build-docs
  npm run deploy-wip -- -y $TRAVIS_BRANCH
else
  echo "This is not a primary branch. Skipping deployment."
=======
  npm run deploy-wip -- -y $TRAVIS_BRANCH
else
  echo "This is not a primary branch. Skipping deployment.";
>>>>>>> fa547d6aac95f7b79cc46e359550eb8c7d671b75
fi
