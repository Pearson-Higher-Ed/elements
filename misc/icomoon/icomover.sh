#!/bin/bash

# icomover takes the icomoon.zip file as an argument,
# extracts the various files and places them in the
# correct directories.

# This file should live in elements/misc/icomoon/

# Usage: icomover filename
# Example: ./icomover icomoon.zip 

if [ $# != 0 ]; then
  FILENAME=$(basename "$1")
  EXT="${FILENAME##*.}"

  else
    echo Requires zipped file as argument.
    echo Example: ./icomover.sh icomoon.zip
    exit 1
fi
if [ $EXT = zip ]; then 
  ZIP=$1
  TMPDIR=`mktemp -d iconzip.XXX` || exit 1
  unzip $ZIP -d $TMPDIR

  FONTZ=( $(ls $TMPDIR/fonts/) )
  cd $TMPDIR/fonts/

  # rename icomoon fonts to pearson-fa fonts
  for f in ${FONTZ[@]}; do
    mv $f $(echo $f | sed 's;icomoon\(\.*\);pearson-fa\1;')
  done

  cd ../../
  
  mv $TMPDIR/selection.json .  
  mv $TMPDIR/fonts/pearson-fa.* ../../assets/fonts/

  rm -rf $TMPDIR
  exit

  # not a .zip, this may be changed if icomoon gives .gz etc files
  else
    echo Error: I expect a .zip file. 
    exit 1
fi
