---
layout: docs.html
title: Forms
section: elements
---

Create a form that conforms to Pearson design specifications.

{{#demo}}
<form class="pe-form">

</form>
{{/demo}}

## Elements

Form classes should be used within a form tag with the pe-form class.  Next/Submit buttons should always be the CTA or primary styled button (e.g. pe-btn__cta, pe-btn__primary).

<aside>
  <h3 class="pe-title">Form Fields</h3>
  <p>Individual form fields should follow the patterns established in the inputs section of this guide.  Each form field group (i.e. label and input) should be contained
  within a div containing the pe-form-group class.</p>
</aside>

{{#demo}}
<form class="pe-form">
  <div class="pe-form-name">Form Name</div>
  <p class="pe-form-error">Error Message</p>
  <p class="pe-form-desc">Form desription</p>
  <div class="pe-form-group">
    <label class="pe-textLabelInput__label" for="a">First Name</label>
    <input type="text" class="pe-textInput" id="a" placeholder="First Name">
    <span class="pe-input_underline"></span>
  </div>
  <div class="pe-form-group">
    <label class="pe-textLabelInput__label" for="b">Last Name</label>
    <input type="text" class="pe-textInput" id="b" placeholder="Last Name">
    <span class="pe-input_underline"></span>
  </div>
  <button class="pe-btn__cta">Submit</button>
</form>
{{/demo}}
