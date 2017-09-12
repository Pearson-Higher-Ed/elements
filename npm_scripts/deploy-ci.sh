#!/bin/bash -e

# Do not deploy if this build is for a pull request
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
  echo "This build is for a pull request. Skipping deployment."
  exit 0
fi

current_branch=$TRAVIS_BRANCH
is_deployable="^v[0-9]+"

if [[ $current_branch =~ $is_deployable ]]; then
  npm run build-docs
else
  echo "This is not a primary branch. Skipping deployment."
fi
