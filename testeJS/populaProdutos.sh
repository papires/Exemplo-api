#/bin/bash


CONTADOR=0
while [  $CONTADOR -lt 120 ]; do
  curl http://localhost:3000/api/produto -X POST -H "Content-type: application/json"  -d @produto01.json ;
  sleep 0.1
  echo;
  let CONTADOR=CONTADOR+1;
done
