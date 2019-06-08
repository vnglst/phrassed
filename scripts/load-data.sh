
#!/bin/bash
# Script to run load termbase into postgresql database

echo "---> Resetting database"
yarn db:reset

echo "---> Creating JSON"
node ./workers/tbx2json.js -i seed-data/IATE_export_26022019.xml.gz --nofail > tmp/IATE.json

echo "---> Storing JSON in db"
cat tmp/IATE.json | node ./workers/json2db.js

