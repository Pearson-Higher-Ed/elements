---
layout: docs.html
title: Inputs
section: elements
---

An input is a field used to elicit a response from a user

## Inputs (single line)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label">First Name</label>
      <input type="text" class="pe-textInput" placeholder="First Name">
      <span class="pe-input_underline"></span>
    </div>
  </div>
{{/demo}}

## Inputs (single line - error)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label--label_error">First Name</label>
      <input type="text" class="pe-textInput--input_error" placeholder="First Name"/>
      <span class="pe-inputError_underline"></span>
    </div>
  </div>
{{/demo}}

## Inputs (single line - disabled)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label" disabled>First Name</label>
      <input type="text" class="pe-textInput" placeholder="First Name" disabled/>
    </div>
  </div>
{{/demo}}

## Inputs (single line - read only)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label" readonly>First Name</label>
      <input type="text" class="pe-textInput" value="First Name" readonly/>
    </div>
  </div>
{{/demo}}
