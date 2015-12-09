#!/bin/bash -ev

current_branch=$(git rev-parse --abbrev-ref HEAD)
is_deployable="^v"

if [[ $current_branch =~ $is_deployable ]]; then
  npm run deploy-wip -- -y
fi
