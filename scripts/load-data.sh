
#!/bin/bash
# Script to run load termbases into postgresql database

# make sure we kill server after script finishes 
echo "---> Resetting database"
yarn db:reset

echo "---> Creating and validating JSON"
unzip -p test-data/IATE_download.zip | node workers/tbx2json.js --nofail > tmp/IATE.json | jq "."

echo "---> Storing JSON in db"
cat tmp/IATE.json | node workers/json2db.js
