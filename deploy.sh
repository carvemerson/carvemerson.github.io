#!/usr/bin/env bash

# This script is used to deploy the application to the server.
npm run build

git add dist -f
git commit -m "Deploy to gh-pages"
git subtree push --prefix dist origin gh-pages