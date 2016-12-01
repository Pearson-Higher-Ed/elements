---
layout: docs.html
title: Inputs
section: elements
path: /icons/p-icons-sprite-1.1.svg
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
	  	<label>
        <input type="checkbox" id="checkboxInput" value="1" name="" />
        <span>
          <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               role="img"
               aria-labelledby="r2"
               class="pe-icon--check-sm-18">
            <title id="r2">Box Checked</title>
            <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
          </svg>
        </span>
        Bacon
      </label>
  	</div>
  </div>

  <br />

  <div class="inputWrapper">
      <p>Selected</p>
      <div class="checkbox">
  	  	<label>
          <input type="checkbox" id="checkboxInput" value="1" name="" />
          <span>
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 role="img"
                 aria-labelledby="r2"
                 class="pe-icon--check-sm-18">
              <title id="r2">Box Checked</title>
              <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
            </svg>
          </span>
          Pastrami
        </label>
    	</div>
    </div>

  <br />

  <div class="inputWrapper">
    <p>Unselected Focus</p>
    <div class="checkbox">
      <label>
        <input type="checkbox" id="checkboxInput" value="1" name="" />
        <span>
          <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               role="img"
               aria-labelledby="r2"
               class="pe-icon--check-sm-18">
            <title id="r2">Box Checked</title>
            <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
          </svg>
        </span>
        Hamburger
      </label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Selected Focus</p>
    <div class="checkbox">
      <label>
        <input type="checkbox" id="checkboxInput" value="1" name="" />
        <span>
          <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               role="img"
               aria-labelledby="r2"
               class="pe-icon--check-sm-18">
            <title id="r2">Box Checked</title>
            <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
          </svg>
        </span>
        Ribs
      </label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Selected</p>
    <div class="checkbox">
      <label>
        <input type="checkbox" id="checkboxInput" value="1" name="" checked disabled/>
        <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             role="img"
             aria-labelledby="r2"
             class="pe-icon--check-sm-18">
          <title id="r2">Box Checked</title>
          <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
        </svg>
        </span>
        Ham
      </label>
    </div>
  </div>

  <br />

  <div class="inputWrapper">
    <p>Disabled Unselected</p>
    <div class="checkbox">
      <label>
        <input type="checkbox" id="checkboxInput" value="1" name="" disabled />
        <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             role="img"
             aria-labelledby="r2"
             class="pe-icon--check-sm-18">
          <title id="r2">Box Checked</title>
          <use xlink:href="/icons/p-icons-sprite-1.1.svg#check-sm-18"></use>
        </svg>
        </span>
        Steak
      </label>
    </div>
  </div>

{{/demo}}
