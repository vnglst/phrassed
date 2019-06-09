
#!/bin/bash
# Script to load terminology data into postgresql database

echo "---> Storing terms JSON in db"
cat tmp/IATE_export_26022019.json | node ./workers/json2db.js

