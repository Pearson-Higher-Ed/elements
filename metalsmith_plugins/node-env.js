/**
 * Enables setting metadata properties based on the
 * value of `NODE_ENV`. To use, add the following to
 * metalsmith.json:
 *
 * ```json
 * {
 *   ./metalsmith_plugins/node-env.js: {
 *     "development": {
 *       "site": {
 *         "baseUrl": ""
 *       }
 *     },
 *     "production": {
 *       "site": {
 *         "baseUrl": "/foo"
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * When `NODE_ENV` is set to "production", the value
 * of `site` will be set to `{ "baseUrl": "/foo" }`.
 * If `NODE_ENV` is not set, it will default to
 * "development".
 */

module.exports = plugin;

function plugin(options) {
  options = options || {};

  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata();
    var env = process.env.NODE_ENV || 'development';
    var data = options[env];

    if (data) {
      Object.keys(data).forEach(function (key) {
        metadata[key] = Object.assign({}, metadata[key], data[key]);
      });
    }

    done();
  };
}
