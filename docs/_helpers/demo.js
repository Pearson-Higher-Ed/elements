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
