#!/bin/sh
#Install de dependencies.
yarn install
#Execute the gulp commands to create the assets
if [[ "${ENVIRONMENT}" == "dev" ]]; then
    gulp serve
else
    gulp
fi
