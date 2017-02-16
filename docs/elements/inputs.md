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
     <svg aria-hidden="true"
        focusable="false"
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
        <svg aria-hidden="true"
             focusable="false"
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
        <svg aria-hidden="true"
             focusable="false"
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
        <svg aria-hidden="true"
             focusable="false"
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
        <svg aria-hidden="true"
             focusable="false"
             class="pe-icon--check-sm-18">
          <use xlink:href="#check-sm-18"></use>
        </svg>
      </span>
    </div>
{{/demo}}

## Inputs (radio buttons)

Radio buttons are for times when the user needs to make a single choice among many options. Unlike a select box, all options are available and visible to all users at once.

- Radio buttons are required to be inside a radio group (the most common example is a fieldset element where the fieldset's `<legend>` contains the subject the user is making a choice about).  They are required to have a label (which names the choice). Thus there is almost always a combination of a subject regarding the group (like a question), and a label per option.

- Radio buttons within a radio group are also required to share the same `name` attribute. There cannot be only 1 radio button in a radio group.

- It is <strong>strongly recommended</strong> that one of the radio buttons are selected by default, rather than letting browsers choose to either pre-select the first item or leave them all unselected.

- When a subject line and individual options, or using a fieldset/legend seem unnecessary for your question, consider using a select element instead.

- When there is more than one option that could be selected, use checkboxes instead.

Example showing unselected, selected, and disabled unselected versions:

{{#demo}}
<fieldset class="pe-fieldset">
  <legend>Which scotch do you like with your cookies?</legend>
  <div class="pe-radio">
    <input type="radio" name="scotch" id="scotchTB">
    <label for="scotchTB">T&#233; Bheag (unselected)</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>

  <div class="pe-radio">
    <input type="radio" name="scotch" id="scotchMS" checked="checked">
    <label for="scotchMS">Monkey Shoulder (selected)</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>

  <div class="pe-radio">
    <input type="radio" name="scotch" id="scotchT" disabled>
    <label for="scotchT">Talisker 18 years (disabled unselected)</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>
</fieldset>
{{/demo}}

Example showing focused unselected and disabled selected versions (developers should avoid offering a focused-but-unselected state by having one option pre-selected). "Focused" state shown visually only; developers do not have to add any inline styles to see this style on real focus events.

{{#demo}}
<fieldset class="pe-fieldset">
  <legend>Which kinds of cookies do you like with your scotch?</legend>
  <div class="pe-radio">
    <input type="radio" name="cookie" id="cookieCC">
    <label for="cookieCC">Chocolate Chip (unselected)</label>
    <span style="border-color:#047a9c;">
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>

  <div class="pe-radio">
    <input type="radio" name="cookie" id="oreo" disabled checked>
    <label for="oreo">Oreo (disabled selected)</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>
</fieldset>
{{/demo}}

Example showing unselected and focused selected versions. Again, developers do not add inline styles for this effect.

{{#demo}}
<fieldset class="pe-fieldset">
  <legend>Choose a meat</legend>
  <div class="pe-radio">
    <input type="radio" name="meat" id="bacon">
    <label for="bacon">Bacon (unselected)</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>

  <div class="pe-radio">
    <input type="radio" name="meat" id="shortribs" checked>
    <label for="shortribs">Short Ribs (focused selected)</label>
    <span style="border-color:#047a9c;">
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>
</fieldset>
{{/demo}}

### Accessibility Concerns

There can be times when a developer cannot have a fieldset+legend but must for some reason use radio buttons. It is possible to use another wrapping element, such as a div, with `role=radiogroup` set on it. Additionally for the legend text, if there is nearby text that is visually being relied upon to do the question/subject work, giving that element a unique id can allow you to add `aria-describedby="that unique id"` on your div.

{{#demo}}
<h2 id="cookiemonster">Cookies</h2>
<div role="radiogroup" aria-describedby="cookiemonster">
  <div class="pe-radio">
    <input type="radio" name="cookiez" id="cookiey" checked>
    <label for="cookiey">Love them</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>
  <div class="pe-radio">
    <input type="radio" name="cookiez" id="cookien">
    <label for="cookien">Hate them</label>
    <span>
      <svg aria-hidden="true"
           focusable="false"
           class="pe-icon--radio-dot">
        <use xlink:href="#new-notification-9"></use>
      </svg>
    </span>
  </div>
</div>
{{/demo}}

If the developer doesn't even have the freedom to wrap the radio buttons, `aria-describedby` can be used directly as well:

{{#demo}}
<h2 id="cookiemonster2">Cookies</h2>
<div class="pe-radio">
  <input type="radio" name="cookiezz" id="cookieyes" checked aria-describedby="cookiemonster2">
  <label for="cookieyes">Love them</label>
  <span>
    <svg aria-hidden="true"
         focusable="false"
         class="pe-icon--radio-dot">
      <use xlink:href="#new-notification-9"></use>
    </svg>
  </span>
</div>
<div class="pe-radio">
  <input type="radio" name="cookiezz" id="cookieno" aria-describedby="cookiemonster2">
  <label for="cookieno">Hate them</label>
  <span>
    <svg aria-hidden="true"
         focusable="false"
         class="pe-icon--radio-dot">
      <use xlink:href="#new-notification-9"></use>
    </svg>
  </span>
</div>
{{/demo}}
