---
layout: docs.html
title: Inputs
section: elements
---

An input is a field used to elicit a response from a user

## Inputs - Fancy (single line)

{{#demo}}
 <label class="pe-textLabelInput__label" for="a">First Name</label>
 <input type="text" class="pe-textInput" id="a" placeholder="First Name">
 <span class="pe-input_underline"></span>
{{/demo}}

## Inputs - Fancy (single line - focus)

{{#demo}}
 <label class="pe-textLabelInput__label--label_focus" for="ab">First Name</label>
 <input type="text" class="pe-textInput" id="ab" placeholder="First Name">
 <span class="pe-input_underline"></span>
{{/demo}}

## Inputs - Fancy (single line - error)

{{#demo}}
 <label class="pe-textLabelInput__label--label_error" for="b">First Name</label>
 <input type="text" class="pe-textInput--input_error" id="b" placeholder="First Name"/>
 <span class="pe-inputError_underline"></span>
{{/demo}}

## Inputs - Fancy (single line - disabled)

{{#demo}}
 <label class="pe-textLabelInput__label--label-disabled" for="c">First Name</label>
 <input type="text" class="pe-textInput" id="c" value="Donald" disabled/>
{{/demo}}

## Inputs (single line - read only)

{{#demo}}
 <label class="pe-textLabelInput__label" for="d">First Name</label>
 <input type="text" class="pe-textInput--input_readonly" id="d" value="Donald" readonly/>
{{/demo}}

## Inputs (password)

{{#demo}}
  <label class="pe-textLabelInput__label" for="e">Password</label>
  <input type="password" class="pe-textInput" id="e" placeholder="Password" />
  <span class="pe-input_underline"></span>
  <button id="showbutton" onclick="" class="pe-textInput__showButton">show</button>
{{/demo}}
** this needs javascript to action show/hide function --
 <a href="https://github.com/Pearson-Higher-Ed/compounds/src/PasswordInput">https://github.com/Pearson-Higher-Ed/compounds/src/PasswordInput</a>

## Inputs - Basic (single line)

{{#demo}}
  <label class="pe-textLabelInput__label" for="z">Label</label>
  <input type="text" class="pe-textInput--basic" id="z" placeholder="Placeholder" />
{{/demo}}

## Inputs - Basic (single line - focus)

{{#demo}}
  <label class="pe-textLabelInput__label--label_focus" for="yz">Label</label>
  <input type="text" class="pe-textInput--basic" id="yz" placeholder="Placeholder" />
{{/demo}}

## Inputs - Basic (single line - error)

{{#demo}}
  <label class="pe-textLabelInput__label--label_error" for="y">Email address</label>
  <input type="text" class="pe-textInput--basic_error" id="y" placeholder="Error" />
{{/demo}}

## Inputs - Basic (single line - disabled)

{{#demo}}
  <label class="pe-textLabelInput__label--label-disabled" for="x">Label</label>
  <input type="text" class="pe-textInput--basic" id="x" placeholder="Disabled" disabled />
{{/demo}}

## Select Inputs - Basic

{{#demo}}
<label class="pe-textLabelInput__label" for="w">Send message to</label>
<span class="pe-select-container">
  <select class="pe-selectInput--basic" id="w">
    <option>Which option will you choose?</option>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </select>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    class="pe-icon--dropdown-open-18">
  <use xlink:href="#dropdown-open-18"></use>
  </svg>
</span>
{{/demo}}

## Inputs (checkbox)

Checkboxes are for times when the user needs to make one or more binary choices about a related item.

- Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice.

- When there is more than one option but only one can be selected, use a radio button instead.

Unselected
{{#demo}}

    <div class="pe-checkbox">
      <input type="checkbox"  id="checkboxInput" value="1" />
      <label for="checkboxInput">Bacon</label>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}

Selected
{{#demo}}
 <div class="pe-checkbox">
   <input type="checkbox" id="checkboxInput2" value="1" checked/>
   <label for="checkboxInput2">Pastrami</label>
   <span>
     <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        class="pe-icon--check-sm-18">
      <use xlink:href="#check-sm-18"></use>
     </svg>
   </span>
 </div>
{{/demo}}


Unselected Focus
{{#demo}}
    <div class="pe-checkbox">
      <input type="checkbox" id="checkboxInput3" value="1" />
      <label for="checkboxInput3">Ham</label>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}

Selected Focus
{{#demo}}
    <div class="pe-checkbox">
      <input type="checkbox" id="checkboxInput4" value="1" checked/>
      <label for="checkboxInput4">Steak</label>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}

Disabled Selected
{{#demo}}
    <div class="pe-checkbox">
      <input type="checkbox" id="checkboxInput5" value="1" checked disabled/>
      <label for="checkboxInput5">Tripe</label>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}

Disabled Unselected
{{#demo}}
    <div class="pe-checkbox">
      <input type="checkbox" id="checkboxInput6" value="1" disabled/>
      <label for="checkboxInput6">Meatball</label>
      <span>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}
