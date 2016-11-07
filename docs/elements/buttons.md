---
layout  : docs.html
title   : Buttons
section : elements
---

[Design Docs](http://pearson-higher-ed.github.io/design/c/buttons/)

Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page or document, rather than navigating a user elsewhere.

{{#demo}}
<button class="pe-btn">Default</button>
<button class="pe-btn__primary">Primary</button>
<button class="pe-btn__cta">Call To Action</button>
{{/demo}}

## Disabled

Buttons can be disabled when an action is not available to the user for the current context. Call to Action has no disabled state.

{{#demo}}
<button class="pe-btn" disabled>Default</button>
<button class="pe-btn__primary" disabled>Primary</button>
{{/demo}}

## Sizes

Buttons come in small, large and xlarge sizes. Prefer the small size but feel free to use the large size where they would fit better with surrounding content. Both small and large button sizes are meant to pair with equally sized inputs. XLarge buttons are to be used when the UI appears on a mobile device or screen smaller than 768px width (tablet portrait view).

{{#demo}}
<button class="pe-btn">Standard</button>
<button class="pe-btn--large">Large</button>
<button class="pe-btn--xlarge">xLarge</button>
{{/demo}}

<aside>
  <h1 class="pe-title">Accessibility: Using non-button elements</h1>
  <p>Where possible, prefer native HTML buttons (<code>&lt;button&gt;</code>, <code>&lt;input type="button"&gt;</code>) over other elements styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
  <p>If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a> to elements you want to disable, as well as manually changing the <code>tabindex</code> value to <code>"-1"</code> (or removing it in the case of non-natively focusables like div and span) to prevent average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>
</aside>
