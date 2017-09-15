---
layout: docs.html
title: Buttons
section: elements
---

Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page or document, rather than navigating a user elsewhere. These button styles are generally intended for content buttons rather than UI buttons. See below for <a href="#uibuttons">UI buttons</a>.

[Design and redlines](http://pearson-higher-ed.github.io/design/c/buttons/)

{{#demo}}
<button class="pe-btn">Default</button>
<button class="pe-btn__cta">Call To Action</button>
<button class="pe-btn__primary--btn_xlarge">Primary</button>
{{/demo}}

## Button groups

Button groups can be used in situations where several actions are closely related or you need to conserve space. <code>pe-btngroup</code> can be used to wrap the buttons you would like grouped together.

{{#demo}}
<div class="pe-btngroup">
  <button class="pe-btn">First</button><button class="pe-btn">Second</button>
</div>
{{/demo}}
{{#demo}}
<div class="pe-btngroup">
  <button class="pe-btn">First</button><button class="pe-btn">Second</button><button class="pe-btn">Third</button>
</div>
{{/demo}}

## Elements

Button classes can be used with `<div>`, `<span>`, `<a>`, `<button>`, and `<input>` elements. But try very hard not to use button styles on divs, spans, or links.

{{#demo}}
<div class="pe-btn" tabindex="0" role="button">Div</div>
<a href="#void" class="pe-btn" role="button">Link</a>
<a href="#void" class="pe-btn__primary--btn_xlarge" role="button">Large Primary Link</a>
<button type="button" class="pe-btn">Button</button>
<input class="pe-btn" type="submit" value="Submit">
<button type="button" class="pe-link">Button</button>
<button type="button" class="pe-link--btn">Link button 2.0</button>
<button type="button" class="pe-link--btn" disabled>Disabled link button 2.0</button>
{{/demo}}

<aside>
  <h3 class="pe-title">Accessibility: Using non-button elements</h3>
  <p>Where possible, prefer native HTML buttons (<code>&lt;button&gt;</code>, <code>&lt;input type="button"&gt;</code> etc) over other elements styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
  <p>If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a> to elements you want to disable, as well as manually changing the <code>tabindex</code> value to <code>"-1"</code> (or removing it in the case of non-natively focusables like div and span) to prevent average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>

  <p>Another thing to be aware of that developers sometimes miss, is that because a focusable, interactive element is <strong>not</strong> allowed inside a button (ie, <span style="color:#b00;">&lt;button&gt; I'm button text &lt;a href="somewhere"&gt;with a link&lt;/a&gt;&lt;/button&gt;</span>), the same rule holds for divs or other elements turned into buttons with <code>tabindex</code> and <code>role=button</code>, even though an HTML validator currently won't flag this. This also holds true for polyfilled <code>details/summary</code> elements!</p>
</aside>

## Disabled

Buttons can be disabled when an action is not available to the user for the current context. Primary and call to action buttons have no disabled state.

{{#demo}}
<button class="pe-btn" disabled>Default</button>
{{/demo}}

For elements that do not support the `disabled` attribute, use `pe-btn--disabled` and `aria-disabled`.

{{#demo}}
<div class="pe-btn pe-btn--disabled" aria-disabled="true">Not a button</div>
{{/demo}}

## Sizes

Buttons can be made smaller or larger.

{{#demo}}
<button class="pe-btn--btn_small">Small</button>
<button class="pe-btn__cta--btn_large">CTA Large</button>
<button class="pe-btn__primary--btn_xlarge">Primary xLarge</button>
{{/demo}}

## Text overflow

When the width of the button's text exceeds the container width, it will be truncated with an ellipsis. <strong>However, you should generally avoid using long text strings with buttons.</strong>

{{#demo}}
<button class="pe-btn" style="max-width: 200px">The quick brown fox jumps over the lazy dog.</button>
{{/demo}}

<h2 id="uibuttons">UI Buttons</h2>

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
  <svg role="img"
       aria-labelledby="b1"
       focusable="false"
       class="pe-icon--remove-lg-24">
    <title id="b1">Close dialog</title>
    <use xlink:href="#remove-lg-24"></use>
  </svg>
</button>
{{/demo}}


## Icon alignment inside buttons

{{#demo}}
<p>With size-18 icon:</p>
<button type="button" class="pe-btn--btn_small" aria-label="Start date">
  Small with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-18">
    <use xlink:href="#calendar-18"></use>
  </svg>
</button>
<button type="button" class="pe-btn--btn_large pe-btn__cta" aria-label="End date">
  CTA large with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-18">
    <use xlink:href="#calendar-18"></use>
  </svg>
</button>
<button type="button" class="pe-btn__primary--btn_xlarge" aria-label="Start date">
  Primary xLarge with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-18">
    <use xlink:href="#calendar-18"></use>
  </svg>
</button>

<p>With size-24 icon:</p>
<button type="button" class="pe-btn--btn_small" aria-label="End date">
  Small with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-24">
    <use xlink:href="#calendar-24"></use>
  </svg>
</button>
<button type="button" class="pe-btn--btn_large pe-btn__cta" aria-label="Start date">
  CTA large with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-24">
    <use xlink:href="#calendar-24"></use>
  </svg>
</button>
<button type="button" class="pe-btn__primary--btn_xlarge" aria-label="End date">
  Primary xLarge with icon
  <svg aria-hidden="true"
       focusable="false"
       class="pe-icon--calendar-24">
    <use xlink:href="#calendar-24"></use>
  </svg>
</button>
{{/demo}}
