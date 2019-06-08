
#!/bin/bash
# Script to run integration tests

# make sure we kill server after script finishes 
trap 'kill $(jobs -pr)' SIGINT SIGTERM EXIT
echo "---> Starting server"
yarn start:dev >/dev/null &

echo "---> Resetting database"
yarn db:reset

echo "---> Creating JSON"
mkdir -p tmp
node ./workers/tbx2json.js -i ./test-data/IATE-last-5Mb.xml.br --nofail > tmp/IATE-last-5Mb.json

echo "---> Storing JSON in db"
cat tmp/IATE-last-5Mb.json | node ./workers/json2db.js

echo "---> Running tests"
yarn jest ./server "$@"
