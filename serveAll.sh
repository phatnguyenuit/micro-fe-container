#!/bin/sh
./buildAll.sh
npx concurrently \
"npm run serve --prefix ../app-child-1" \
"npm run serve --prefix ../app-child-2" \
"npm run serve"
