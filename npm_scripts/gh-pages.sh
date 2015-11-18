#!/bin/bash -e

if ! [ -e "npm_scripts/gh-pages.sh" ]; then
  echo >&2 "Please run npm_scripts/gh-pages.sh from the repo root"
  exit 1
fi

GH_PAGES=1 gulp build-docs

git checkout gh-pages
git add -f _gh_pages
git commit -m "update gh-pages"
git filter-branch --subdirectory-filter _gh_pages/ -f
