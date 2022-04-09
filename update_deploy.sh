#!/bin/bash


deployment_secret=$1
tag=$2


curl  --request POST --header "Content-Type: application/json" -d '{"token": "'${deployment_secret}'","tag": "'${tag}'"}' https://update-stagging.legitron.com/update_deployment
