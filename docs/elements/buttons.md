---
layout: docs.html
title: Buttons
section: elements
permalink: /elements/buttons/
---

Use a button to represent a user action.

{{#demo}}
<button class="pe-btn">Default</button>
<button class="pe-btn pe-btn--primary">Primary</button>
{{/demo}}

### Elements

Button classes can be used with `<div>`, `<span>`, `<a>`, `<button>`, and `<input>` elements.

{{#demo}}
<div class="pe-btn" tabindex="0">Div</div>
<a href="#" class="pe-btn">Link</a>
<button class="pe-btn">Button</button>
<input type="submit" value="Submit" class="pe-btn">
{{/demo}}

<aside>
  <h1 class="pe-title">Accessibility: Using non-button elements</h1>
  <p>Where possible, prefer native HTML buttons (<code>&lt;button&gt;</code>, <code>&lt;input type="button"&gt;</code>) over other elements styled as buttons. If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute.</p>
</aside>

### Disabled

Buttons can be disabled when an action is not available to the user for the current context.

{{#demo}}
<button class="pe-btn" disabled>Default</button>
<button class="pe-btn pe-btn--primary" disabled>Primary</button>
<button class="pe-btn pe-btn--link" disabled>Link</button>
{{/demo}}

For elements that do not support the `disabled` attribute, use `pe-btn--disabled`.

{{#demo}}
<div class="pe-btn pe-btn--disabled">Not a button</div>
{{/demo}}

### Sizes

Buttons can be made smaller or larger.

{{#demo}}
<button class="pe-btn pe-btn--small">Small</button>
<button class="pe-btn pe-btn--large">Large</button>
{{/demo}}

### Links

In some cases, it may be desirable to style a button as a link.

{{#demo}}
<button class="pe-btn pe-btn--link">Link</button>
{{/demo}}

### Text overflow

When the width of the button's text exceeds the container width, it will be truncated with an ellipsis. <strong>However, you should generally avoid using long text strings with buttons.</strong>

{{#demo}}
<button class="pe-btn" style="max-width: 200px">The quick brown fox jumps over the lazy dog.</button>
{{/demo}}
