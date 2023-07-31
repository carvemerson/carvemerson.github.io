#!/usr/bin/env bash

git checkout gh-pages
git pull origin gh-pages
git merge main

npm run build

git add -A
git commit -m "Deploy to gh-pages"
git git push origin gh-pages
git checkout main
