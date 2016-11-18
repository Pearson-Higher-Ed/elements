---
layout: docs.html
title: Buttons
section: elements
---

Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page or document, rather than navigating a user elsewhere.

{{#demo}}
<button class="pe-btn">Default</button>
<button class="pe-btn__primary">Primary</button>
<button class="pe-btn__cta">Call To Action</button>
{{/demo}}

## Elements

Button classes can be used with `<div>`, `<span>`, `<a>`, `<button>`, and `<input>` elements.

{{#demo}}
<div class="pe-btn" tabindex="0" role="button">Div</div>
<a href="#" class="pe-btn" role="button">Link</a>
<button class="pe-btn">Button</button>
<input type="submit" value="Submit" class="pe-btn">
{{/demo}}

<aside>
  <h1 class="pe-title">Accessibility: Using non-button elements</h1>
  <p>Where possible, prefer native HTML buttons (<code>&lt;button&gt;</code>, <code>&lt;input type="button"&gt;</code>) over other elements styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
  <p>If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a> to elements you want to disable, as well as manually changing the <code>tabindex</code> value to <code>"-1"</code> (or removing it in the case of non-natively focusables like div and span) to prevent average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>
</aside>

## Disabled

Buttons can be disabled when an action is not available to the user for the current context. Call to action has no disabled state.

{{#demo}}
<button class="pe-btn" disabled>Default</button>
<button class="pe-btn__primary" disabled>Primary</button>
{{/demo}}

For elements that do not support the `disabled` attribute, use `pe-btn--disabled` and `aria-disabled`.

{{#demo}}
<div class="pe-btn pe-btn--disabled" aria-disabled="true">Not a button</div>
{{/demo}}

## Sizes

Buttons can be made smaller or larger.

{{#demo}}
<button class="pe-btn--btn_small">Small</button>
<button class="pe-btn--btn_large">Large</button>
<button class="pe-btn--btn_xlarge">xLarge</button>
{{/demo}}

## Text overflow

When the width of the button's text exceeds the container width, it will be truncated with an ellipsis. <strong>However, you should generally avoid using long text strings with buttons.</strong>

{{#demo}}
<button class="pe-btn" style="max-width: 200px">The quick brown fox jumps over the lazy dog.</button>
{{/demo}}
