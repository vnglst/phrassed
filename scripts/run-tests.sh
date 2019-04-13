
#!/bin/bash
# Script to run integration tests

# make sure we kill server after script finishes 
trap 'kill $(jobs -pr)' SIGINT SIGTERM EXIT
echo "---> Starting server"
yarn start >/dev/null &

echo "---> Resetting database"
yarn db:reset

echo "---> Running tests"
yarn jest ./server "$@"
