---
layout: docs.html
title: Buttons
section: elements
---

Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page or document, rather than navigating a user elsewhere. These button styles are generally intended for content buttons rather than UI buttons. See below for UI buttons.

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
<input class="pe-btn" type="submit" value="Submit">
{{/demo}}

<aside>
  <h3 class="pe-title">Accessibility: Using non-button elements</h3>
  <p>Where possible, prefer native HTML buttons (<code>&lt;button&gt;</code>, <code>&lt;input type="button"&gt; etc</code>) over other elements styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
  <p>If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a> to elements you want to disable, as well as manually changing the <code>tabindex</code> value to <code>"-1"</code> (or removing it in the case of non-natively focusables like div and span) to prevent average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>

  <p>Another thing to be aware of that developers sometimes miss, is that because a focusable, interactive element is <strong>not</strong> allowed inside a button (ie, <span style="color:#b00;">&lt;button&gt; I'm button text &lt;a href="somewhere"&gt;with a link&lt;/a&gt;&lt;/button&gt;</span>), the same rule holds for divs or other elements turned into buttons with <code>tabindex</code> and <code>role=button</code>, even though an HTML validator currently won't flag this. This also holds true for polyfilled <code>details/summary</code> elements!</p> 
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

## UI Buttons

<script>if (!document.getElementById('pe-icons-sprite')) {
  var pe_ajax = new XMLHttpRequest();
  pe_ajax.open("GET", "/icons/p-icons-sprite-1.1.svg", true);
  pe_ajax.responseType = "document";
  pe_ajax.onload = function(e) {
    document.body.insertBefore(
      pe_ajax.responseXML.documentElement,
      document.body.childNodes[0]
    );
  }
  pe_ajax.send();
}</script>

Some buttons, such as "close" buttons or accordion toggles (so-called UI buttons) may in the design not match any of the above content buttons, but may only contain an icon (see <a href="../icons">icons documentation</a>). The class `pe-icon--btn` removes default button styles such as padding or border, allowing the icon alone to represent the control.

Keep in mind that with just a loose icon, the context needs to make it clear to users that the icon represents a control rather than a decoration.

{{#demo}}
<button type="button" class="pe-icon--btn">
  <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       role="img"
       aria-labelledby="b1"
       class="pe-icon--remove-lg-24">
    <title id="b1">Close dialog</title>
    <use xlink:href="#remove-lg-24"></use>
  </svg>
</button>
{{/demo}}
