
#!/bin/bash
# Script to parse xml file into json

echo "---> Creating JSON"
node ./workers/tbx2json.js -i seed-data/IATE_export_26022019.xml.gz --nofail > tmp/IATE.json

