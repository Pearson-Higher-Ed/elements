#!/bin/bash

REPO_URI="https://api.travis-ci.org/repos/Pearson-Higher-Ed/ux-test-platform/builds"

echo "Waiting for approximately 15s for the Selenium tests to trigger..."
echo ""
#The 15s sleep is to allow Travis to trigger the tests: ux-test-platform repo
sleep 15


# Polling for the tests build status
# Setting a maximum time for the tests build to run, however once we get the status to passed/failed, we will return to the elements build run

i=1
max=600 #Increase the max time to run the tests by 300 secs. This is because the test repo is growing.
while [ $i -lt $max ]
do

curl -i -H "Accept: application/vnd.travis-ci.2+json" $REPO_URI > test.json	
LATEST_STATE=$(grep -o '"state":.[a-z\"]*' test.json | head -1)
LATEST_ID=$(grep -o '"id":.[0-9]*' test.json | head -1 | grep ':.[0-9]*')

echo "--------------------------------------------"
echo "Polling for the tests run build status..."
echo "ux-test-platform build id: $LATEST_ID"

get_state_value=${LATEST_STATE#*:}
STATE="${get_state_value//\"}"
if [ $STATE == "passed" ]
then
  echo "TESTS RUN... $STATE :-) "
  break #As soon as the tests run pass, we break and return back to the elements build run
elif [ $STATE == "failed" ]
then
 echo "TESTS RUN... $STATE :-("
 echo "Stop building elements"
 exit 1 #As soon as the tests run fail, we stop building elements
fi

true $(( i++ ))
sleep 1 #This 1s is required to poll the build status for every second
done

