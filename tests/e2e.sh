#! /bin/bash

# This script is super repetitive and would probably be better off
# using a loop/functions, but since there's only 3 I'm willing to
# accept it for the sake of readability

echo "e2e test 1:"
actual=$(node ../index.js < ./case1.txt)
expected=0,1,NORTH

if [[ $actual == $expected ]]; then
    echo ✔️ Passed
else
    echo ❌ Failed
    echo Receieved $actual
    echo Expected $expected
    exit 1
fi


echo "e2e test 2:"
actual=$(node ../index.js < ./case2.txt)
expected=0,0,WEST

if [[ $actual == $expected ]]; then
    echo ✔️ Passed
else
    echo ❌ Failed
    echo Receieved $actual
    echo Expected $expected
    exit 1
fi


echo "e2e test 3:"
actual=$(node ../index.js < ./case3.txt)
expected=3,3,NORTH

if [[ $actual == $expected ]]; then
    echo ✔️ Passed
else
    echo ❌ Failed
    echo Receieved $actual
    echo Expected $expected
    exit 1
fi