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
      <label for="checkboxInput">Bacon</label>
      <input type="checkbox" id="checkboxInput" value="1" />
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             role="img"
             aria-labelledby="r2"
             class="pe-icon--check-sm-18">
          <title id="r2">Box Checked</title>
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
  	</div>
  </div>

  <br />

  <div class="inputWrapper">
      <p>Selected</p>
      <div class="checkbox">
      <label for="checkboxInput2">Pastrami</label>
      <input type="checkbox" id="checkboxInput2" value="1" checked/>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             role="img"
             aria-labelledby="r2"
             class="pe-icon--check-sm-18">
          <title id="r2">Box Checked</title>
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    	</div>
    </div>

  <br />

  <div class="inputWrapper">
    <p>Unselected Focus</p>
    <div class="checkbox">
    <label for="checkboxInput3">Hamburger</label>
    <input type="checkbox" id="checkboxInput3" value="1" />
    <span>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           role="img"
           aria-labelledby="r2"
           class="pe-icon--check-sm-18">
        <title id="r2">Box Checked</title>
        <use xlink:href="#check-sm-18"></use>
      </svg>
    </span>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Selected Focus</p>
    <div class="checkbox">
    <label for="checkboxInput4">Ribs</label>
    <input type="checkbox" id="checkboxInput4" value="1" checked/>
    <span>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           role="img"
           aria-labelledby="r2"
           class="pe-icon--check-sm-18">
        <title id="r2">Box Checked</title>
        <use xlink:href="#check-sm-18"></use>
      </svg>
    </span>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Selected</p>
    <div class="checkbox">
    <label for="checkboxInput5">Steak</label>
    <input type="checkbox" id="checkboxInput5" value="1" checked disabled/>
    <span>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           role="img"
           aria-labelledby="r2"
           class="pe-icon--check-sm-18">
        <title id="r2">Box Checked</title>
        <use xlink:href="#check-sm-18"></use>
      </svg>
    </span>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Unselected</p>
    <div class="checkbox">
    <label for="checkboxInput6">Chicken</label>
    <input type="checkbox" id="checkboxInput6" value="1" disabled/>
    <span>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           role="img"
           aria-labelledby="r2"
           class="pe-icon--check-sm-18">
        <title id="r2">Box Checked</title>
        <use xlink:href="#check-sm-18"></use>
      </svg>
    </span>
    </div>
  </div>

{{/demo}}
