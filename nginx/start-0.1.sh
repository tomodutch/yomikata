#!/usr/bin/env bash

# export NODE_ENV=production
export DATABASE_URL=file:/app/api/prisma/dev.db

envsubst \$PORT < ./app.conf > /etc/nginx/sites-enabled/default
cat /etc/nginx/sites-enabled/default
nginx &

yarn install
# somehow required after running in production
# yarn add @babel/runtime-corejs3 -W
yarn rw build

ls -latr ./node_modules/.bin
./node_modules/.bin/api-server -f ./api/dist/functions
