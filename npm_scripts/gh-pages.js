const exec = require('./exec');

exec('GH_PAGES=1 gulp build-docs');
exec('git checkout gh-pages');
exec('git add -f _gh_pages');
exec('git commit -m "update gh-pages"');
exec('git filter-branch --subdirectory-filter _gh_pages/ -f');
