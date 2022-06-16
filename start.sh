#!/usr/bin/env bash
set e
npm i
npm run build
node ./build/index.js