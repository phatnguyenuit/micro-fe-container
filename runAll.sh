#!/bin/sh
npx concurrently \
"npm start --prefix ../app-child-1" \
"npm start --prefix ../app-child-2" \
"npm start"
