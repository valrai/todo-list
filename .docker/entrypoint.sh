#!/bin/sh
yarn cross-env NODE_ENV=prod yarn migration:run
yarn start
