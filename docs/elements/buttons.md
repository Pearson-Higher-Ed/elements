---
layout: docs.html
title: Buttons
section: elements
permalink: /elements/buttons/
---

Use a button to represent a user action.

{{#demo}}
<!-- The default button style -->
<button class="pe-btn">Default</button>

<!-- The primary action for a given context, such as
the default action in a dialog -->
<button class="pe-btn pe-btn--primary">Primary</button>
{{/demo}}

### Disabled

Buttons can be disabled when an action is not available to the user for the current context.

{{#demo}}
<button class="pe-btn" disabled>Default</button>
<button class="pe-btn pe-btn--primary" disabled>Primary</button>
{{/demo}}

For non-`button` elements, use `pe-btn--disabled`.

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

In some cases, it may be necessary to style a button as a link.

{{#demo}}
<button class="pe-btn pe-btn--link">Link</button>
{{/demo}}
