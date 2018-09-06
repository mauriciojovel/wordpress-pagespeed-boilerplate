#!/bin/sh

set -e
#Install de dependencies.
yarn install

#Execute the gulp commands to create the assets
gulp serve

exec "$@"
