---
layout: docs.html
title: Inputs
section: elements
---

## Input with button
A combination of pe-input and pe-button

{{#demo}}
<div class="pe-input-group"> 
  <div class="pe-input">
    <label for="i1">Label text</label>
    <input type="text" id="i1" value="Basic text input field">
    <button class="pe-btn pe-btn--medium">
      <i class="pe-icon--search" aria-hidden="true"></i>
      <span class="pe-sr-only">Search</span>
    </button>
  </div>
</div>
{{/demo}}



## Single-line input fields

<aside>
Label-input pairs are wrapped in divs in order to have a single unit that can be styled and moved around. The `pe-inlineblock` class on a container will make these divs line up horizontally.
</aside>

Text input form elements are to be used for single line text inputs.

{{#demo}}
<div class="pe-inlineblock">
  <div class="pe-input">
    <label for="i1">Text label</label>
    <input type="text" id="i1" value="Basic text input field">
  </div>

  <div class="pe-input pe-input--small">
    <label for="i2">Text label</label>
    <input type="text" id="i2" value="Small text input field">
  </div>
</div>
{{/demo}}

### Placeholder

Placeholders can be used to give additional information about the format of data. They do *not* replace labels!

{{#demo}}
<div class="pe-input">
  <label for="i3">Your name</label>
  <input type="text" id="i3" placeholder="First and last name" value="">
</div>

<div class="pe-input pe-input--small">
  <label for="i4">Your name</label>
  <input type="text" id="i4" placeholder="First and last name" value="">
</div>
{{/demo}}

### Readonly

To prevent the user from interacting with the field. The `pe-input--readonly` class is only for styling; the readonly attribute *must* be applied to make the field function as readonly.

{{#demo}}
<div class="pe-input pe-input--readonly">
  <label for="i5">Your text</label>
  <input type="text" id="i5" value="Readonly text here" readonly>
</div>
{{/demo}}

### Disabled

This state is a form input that is unavailable for interaction. The `pe-input--disabled` class is only for styling; the disabled attribute *must* be applied to make the field function as disabled.

{{#demo}}
<div class="pe-input pe-input--disabled">
  <label for="i6">Text label</label>
  <input type="text" id="i6" value="Disabled" disabled>
</div>

<div class="pe-input pe-input--disabled">
  <label for="i7">Text label</label>
  <input type="text" id="i7" placeholder="disabled with a placeholder" value="" disabled>
</div>
{{/demo}}

### Error

This field is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message, which either must be inside the label element *or* if a separate element is used, it must have an id and the input must have a matching `aria-describedby` attribute.

{{#demo}}
<div class="pe-input pe-input--small pe-input--error">
  <label for="i8">Text label <span class="pe-error-text">something went wrong!</span></label>
  <input type="text" id="i8" value="Error (in small input)">
</div>

<div class="pe-input pe-input--error">
  <label for="i9">Text label </label>
  <input type="text" id="i9" aria-describedby="i9-error" value="Error">
  <p id="i9-error" class="pe-error-text">Something went wrong!</p>
</div>
{{/demo}}

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
  <div class="pe-textarea">
    <label for="ta1">Textarea label</label>
    <textarea name="largetext" rows="4" cols="50" id="ta1">Multiple lines of text entry are supported with the textarea element</textarea>
  </div>
{{/demo}}

### Small Size textarea, and small textarea with placeholder

{{#demo}}
<div class="pe-inlineblock"> 
  <div class="pe-textarea pe-textarea--small">
    <label for="ta2">Textarea label</label>
    <textarea name="smalltext" id="ta2">Text area</textarea>
  </div>
  <div class="pe-textarea pe-textarea--small">
    <label for="ta3">Textarea with placeholder</label>
    <textarea name="smalltext" id="ta3" placeholder="Textarea placeholder"></textarea>
  </div>
</div>
{{/demo}}

### Disabled text area

{{#demo}}
  <div class="pe-textarea pe-textarea--disabled">
    <label for="ta4">Textarea label</label>
    <textarea name="largetext" rows="4" cols="50" id="ta4" disabled>Textarea element...Disabled</textarea>
  </div>
{{/demo}}

### Readonly text area

{{#demo}}
  <div class="pe-textarea pe-textarea--readonly">
    <label for="ta5">Terms and Conditions</label>
    <textarea name="readonlytext" rows="4" cols="50" id="ta5" readonly>Read only text here...</textarea>
  </div>
{{/demo}}

### Error text area

{{#demo}}
  <div class="pe-textarea pe-textarea--error">
    <label for="ta5">Textarea label</label>
    <textarea name="errortext" rows="4" cols="50" id="ta5" aria-describedby="ta6-error">Bad text here</textarea>
    <p id="ta6-error" class="pe-error-text">Something went wrong!</p>
  </div>
{{/demo}}
