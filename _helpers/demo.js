<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="/elements/css/elements.css">
    <link rel="stylesheet" href="/elements/css/docs.css">
  </head>
  <body>
    const handlebars = require('handlebars');
const hljs = require('highlight.js');

hljs.configure({ useBR: true });

module.exports = function (options) {
  const code = options.fn(this);
  const codeExample = hljs.fixMarkup(hljs.highlight('html', code).value);

  const demo = `
    <div class="d-demo pe-card">
      <div class="pe-card__header">${code}</div>
      <div class="pe-card__content hljs">${codeExample}</div>
    </div>
  `.trimLeft();

  return new handlebars.SafeString(demo);
};

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
  </body>
</html>
