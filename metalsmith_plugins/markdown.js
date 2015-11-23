/**
 * Adapted from https://github.com/segmentio/metalsmith-markdown.
 * Replaces https://github.com/chjj/marked with
 * https://github.com/markdown-it/markdown-it
 */

var basename = require('path').basename;
var dirname = require('path').dirname;
var extname = require('path').extname;
var MarkdownIt = require('markdown-it');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to convert markdown files.
 *
 * @param {Object} options (optional)
 *   @property {Array} keys
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done){
    setImmediate(done);
    var md = new MarkdownIt(options);
    Object.keys(files).forEach(function(file){
      if (!markdown(file)) return;
      var data = files[file];
      var dir = dirname(file);
      var html = basename(file, extname(file)) + '.html';
      if ('.' != dir) html = dir + '/' + html;

      var str = md.render(data.contents.toString());
      data.contents = new Buffer(str);
      keys.forEach(function(key) {
        data[key] = md.render(data[key]);
      });

      delete files[file];
      files[html] = data;
    });
  };
}

/**
 * Check if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function markdown(file){
  return /\.md|\.markdown/.test(extname(file));
}
