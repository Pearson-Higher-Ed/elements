#!/bin/bash

echo "Trigger the tests: ux-test-plaftorm repo...."

body='{
"request": {
  "branch":"master"
}}'

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token Iit6_JxttCJ5JfEGQUyjRQ" \
  -d "$body" \
  https://api.travis-ci.org/repo/Pearson-Higher-Ed%2Fux-test-platform/requests

#The 15s sleep is to allow Travis to trigger the tests: ux-test-platform repo
#sleep 15

