#!/bin/sh
npx concurrently \
"npm run build --prefix ../app-child-1" \
"npm run build --prefix ../app-child-2" \
"npm run build"
