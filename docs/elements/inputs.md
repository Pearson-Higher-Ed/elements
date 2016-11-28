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
      <label class="pe-textLabelInput__label" for="a">First Name</label>
      <input type="text" class="pe-textInput" id="a" placeholder="First Name">
      <span class="pe-input_underline"></span>
    </div>
  </div>
{{/demo}}

## Inputs (single line - error)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label--label_error" for="b">First Name</label>
      <input type="text" class="pe-textInput--input_error" id="b" placeholder="First Name"/>
      <span class="pe-inputError_underline"></span>
    </div>
  </div>
{{/demo}}

## Inputs (single line - disabled)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label--label-disabled" for="c">First Name</label>
      <input type="text" class="pe-textInput" id="c" value="Donald" disabled/>
    </div>
  </div>
{{/demo}}

## Inputs (single line - read only)

{{#demo}}
  <div class="inputWrapper">
    <div class="pe-input-wrapper">
      <label class="pe-textLabelInput__label" for="d">First Name</label>
      <input type="text" class="pe-textInput--input_readonly" id="d" value="Donald" readonly/>
    </div>
  </div>
{{/demo}}

## Inputs (checkbox)

{{#demo}}









  <div class="inputWrapper">
    <p>Unselected</p>
    <div class="checkbox">
  		<input type="checkbox" id="checkboxInput" aria-labeledby="actualLabel" aria-checked="" value="1" name="checkbox1" />
	  	<label id="checkboxInputLabel" for="checkboxInput"></label>
      <span id="actualLabel" class="pe-checkbox__label">Bacon</span>
  	</div>
    </div>
  </div>












  <br />

  <div class="inputWrapper">
    <p>Selected</p>
    <div class="pe-input-wrapper">
      <input type="checkbox" class="" id="d" />
      <label class="" for="d">Pastrami</label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Unselected Focus</p>
    <div class="pe-input-wrapper">
      <input type="checkbox" class="" id="e" />
      <label class="" for="e">Hamburger</label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Selected Focus</p>
    <div class="pe-input-wrapper">
      <input type="checkbox" class="" id="f" />
      <label class="" for="f">Short Ribs</label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Selected</p>
    <div class="pe-input-wrapper">
      <input type="checkbox" class="" id="g" />
      <label class="" for="g">Ham</label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Unselected</p>
    <div class="pe-input-wrapper">
      <input type="checkbox" class="" id="h" />
      <label class="" for="h">Filet Mignon</label>
    </div>
  </div>

{{/demo}}
