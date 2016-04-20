#!/bin/bash

echo "Trigger the Selenium tests: ux-test-plaftorm repo...."

#Step 1: API to trigger the ux-test-platform build
body='{
"request": {
  "branch":"master"
}}'

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token $AUTH_TOKEN" \
  -d "$body" \
  https://api.travis-ci.org/repo/Pearson-Higher-Ed%2Fux-test-platform/requests

echo ""
echo "Waiting for approximately 5s for the Selenium tests to trigger..."
echo ""

REPO_URI="https://api.travis-ci.org/repos/Pearson-Higher-Ed/ux-test-platform/builds"
i=1
max=20
while [ $i -lt $max ]
do  
  curl -i $REPO_URI > test.json

  LATEST_STATE=$(grep -o '"state":.[a-z\"]*' test.json | head -1 )
  LATEST_ID=$(grep -o '"id":.[0-9]*' test.json | head -1  | grep ':.[0-9]*')
  BRANCH=$(grep -o '"branch":.[a-z\"]*' test.json | head -1 )

  get_state_value=${BRANCH#*:}
  BRANCH="${get_state_value//\"}"

	if [ $BRANCH == "master" ] #To fetch the latest master branch build id
    sleep 5
    curl -i $REPO_URI > test.json
	then LATEST_ID=$(grep -o '"id":.[0-9]*' test.json | head -1  | grep ':.[0-9]*')
	echo "LATEST_ID of master branch.............................. $LATEST_ID"
  export LATEST_ID	
  	break 
	else 	
		true $(( i++ ))
		sleep 1
	fi
done

#Step2 : Fetch the build status of the 'master' branch
get_buildId_value=${LATEST_ID#*:}
BUILD_ID="${get_buildId_value//\"}"

REPO_URI_WITH_BUILDID="$REPO_URI/$BUILD_ID"
echo $REPO_URI_WITH_BUILDID

i=1
max=600 #Max time for the tests to run
while [ $i -lt $max ]
do

curl -i $REPO_URI_WITH_BUILDID > test.json 

STATE=$(grep -o '"state":.[a-z\"]*' test.json | head -1 )
#RESULT=$(grep -o '"result":.[0-9]*' test.json | head -1  | grep ':.[0-9]*')
STATUS=$(grep -o '"status":.[0-9]*' test.json | head -1  | grep ':.[0-9]*')

echo "--------------------------------------------"
echo "Polling for the tests run build status..."
echo "ux-test-platform build id in run is: $BUILD_ID"

get_state_value=${STATE#*:}
STATE="${get_state_value//\"}"

get_status_value=${STATUS#*:}
STATUS="${get_status_value//\"}"

if [ $STATUS == "0" ]
then
  echo "counter-> $i"
  echo "TESTS RUN... PASSED :-) "
  break #As soon as the tests run pass, we break and return back to the elements build run
elif [ $STATUS == "1" ]
then
 echo "TESTS RUN... FAILED :-("
 exit 1 #As soon as the tests run fail, we stop building elements
elif [[ $STATE == "finished" && $STATUS == "n" ]]
then
 echo "TESTS RUN... NULL :-("
 exit 1 #For some reason, if the ux-test-platform build breaks or halts.
elif [ $i == "600" ]
  then
  echo "ux-test-platform run time has maxd out..."
  exit 1 #Selenium tests run for more than the max time.
fi

true $(( i++ ))
sleep 1 #This 1s is required to poll the build status for every second
done