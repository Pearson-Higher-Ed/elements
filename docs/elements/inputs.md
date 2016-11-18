---
layout: docs.html
title: Inputs
section: elements
---

## Inputs (single line)
An input is a field used to elicit a response from a user

Hint text Usage Hint text should be used as an aid to help guide users on the required format and content.

Hint text disappear as soon as input become focus.

{{#demo}}
  <div class="inputWrapper">
    <label class="pe-textLabelInput__label">First Name</label>
    <input type="text" class="pe-textInput" placeholder="First Name"/>
    <span class="pe-input_underline"></span>
  </div>
{{/demo}}

## Inputs (single line - error)
An input is a field used to elicit a response from a user

Hint text Usage Hint text should be used as an aid to help guide users on the required format and content.

Hint text disappear as soon as input become focus.

{{#demo}}
  <div class="inputWrapper">
    <label class="pe-textLabelInput__label--label_error">First Name</label>
    <input type="text" class="pe-textInput--input_error" placeholder="First Name"/>
  </div>
{{/demo}}

## Inputs (single line - disabled)
An input is a field used to elicit a response from a user

Hint text Usage Hint text should be used as an aid to help guide users on the required format and content.

Hint text disappear as soon as input become focus.

{{#demo}}
  <div class="inputWrapper">
    <label class="pe-textLabelInput__label" disabled>First Name</label>
    <input type="text" class="pe-textInput" placeholder="First Name" disabled/>
  </div>
{{/demo}}

## Inputs (single line - read only)
An input is a field used to elicit a response from a user

Hint text Usage Hint text should be used as an aid to help guide users on the required format and content.

Hint text disappear as soon as input become focus.

{{#demo}}
  <div class="inputWrapper">
    <label class="pe-textLabelInput__label" readonly>First Name</label>
    <input type="text" class="pe-textInput" placeholder="First Name" readonly/>
  </div>
{{/demo}}
