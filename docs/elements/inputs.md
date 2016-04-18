---
layout: docs.html
title: Inputs
section: elements
---

## Checkboxes

Checkboxes are for times when the user needs to make one or more binary choices about a related item. Type attribute of "Checkbox" also represents a state or option that can be toggled.

### Checked 

{{#demo}}
  <div class="pe-checkbox pe-checkbox--checked">
    <input type="checkbox" name="Checked" id="chk1" value="" checked>
    <label for="chk1">Checked</label>
  </div>
{{/demo}}

### UnChecked 

{{#demo}}
  <div class="pe-checkbox pe-checkbox--unchecked">
    <input type="checkbox" name="UnChecked" id="chk2" value="">
    <label for="chk2">UnChecked</label>
  </div>
{{/demo}}

### Disabled 

{{#demo}}
  <div class="pe-checkbox pe-checkbox--disabled">
    <input type="checkbox" name="Read only/Disabled" id="chk3" value="" disabled>
    <label for="chk3">Read only/Disabled</label>
  </div>
{{/demo}}

### Disabled and Checked 

{{#demo}}
 <div class="pe-checkbox pe-checkbox--disabled-checked">
    <input type="checkbox" name="Read only/Disabled (checked)" id="chk4" value="" disabled checked>
    <label for="chk4">Read only/Disabled(checked)</label>
 </div>
{{/demo}}

### Small checkbox

{{#demo}}
  <div class="pe-checkbox pe-checkbox--small">
    <input type="checkbox" name="Small checkbox" id="chk5" value="">
    <label for="chk5">Small checkbox</label>
  </div>
{{/demo}}


## Radio buttons 

Radio buttons are for when the user must choose a single item out of several options. Type attribute of "radio" also represents a state or option that can be toggled.

### Checked 

{{#demo}}
  <div class="pe-radio pe-radio--checked">
    <input type="radio" name="Checked" id="rad1" value="" checked>
    <label for="rad1">Checked</label>
  </div>
{{/demo}}

### UnChecked 

{{#demo}}
  <div class="pe-radio pe-radio--unchecked">
    <input type="radio" name="UnChecked" id="rad2" value="">
    <label for="rad2">UnChecked</label>
  </div>
{{/demo}}

### Disabled 

{{#demo}}
  <div class="pe-radio pe-radio--disabled">
    <input type="radio" name="Read only/Disabled" id="rad3" value="" disabled>
    <label for="rad3">Read only/Disabled</label>
  </div>
{{/demo}}


### Disabled and Checked 

{{#demo}}
 <div class="pe-radio pe-radio--disabled-checked">
    <input type="radio" name="Read only/Disabled (checked)" id="rad4" value="" disabled checked>
    <label for="rad4">Read only/Disabled(checked)</label>
 </div>
{{/demo}}

### Small radio button

{{#demo}}
  <div class="pe-radio pe-radio--small">
    <input type="radio" name="Small" id="rad6" value="">
    <label for="rad6">Small radio button</label>
  </div>
{{/demo}}

## Textarea

Textarea form elements are to be used for multiple lines of text. Vertical and horizontal resizing options may be enabled where appropriate. Textarea states are styled similarly to regular text inputs.

### Large Size text area

{{#demo}}
  <div class="pe-textarea pe-textarea--large">
    <label for="ta1">Large size text area</label>
    <textarea name="largetext" rows="4" cols="50">Enter text here...</textarea>
   </div>
{{/demo}}

### Small Size text area

{{#demo}}
  <div class="pe-textarea pe-textarea--small">
    <label for="ta2">Small size text area</label>
    <textarea name="smalltext">Enter text here...</textarea>
   </div>
{{/demo}}

### Disabled text area

{{#demo}}
  <div class="pe-textarea pe-textarea--disabled">
    <label for="ta3">Disabled text area</label>
    <textarea name="largetext" rows="4" cols="50" disabled>Enter text here...</textarea>
   </div>
{{/demo}}
