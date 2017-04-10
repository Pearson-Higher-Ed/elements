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
 <input type="text" class="pe-textInput--input_error" id="b" placeholder="First Name" aria-describedby="someError">
 <span class="pe-inputError_underline"></span>
 <span id="someError" class="pe-input--info_message">this is an info message</span>
 <span id="someError" class="pe-input--error_message">this is an error message</span>
{{/demo}}

## Inputs - Fancy (single line - disabled)

{{#demo}}
 <label class="pe-textLabelInput__label--label-disabled" for="c">First Name</label>
 <input type="text" class="pe-textInput" id="c" value="Donald" disabled>
{{/demo}}

## Inputs (single line - read only)

{{#demo}}
 <label class="pe-textLabelInput__label" for="d">First Name</label>
 <input type="text" class="pe-textInput--input_readonly" id="d" value="Donald" readonly>
{{/demo}}


## Inputs - Basic (single line)

{{#demo}}
  <label class="pe-textLabelInput__label" for="z">Label</label>
  <input type="text" class="pe-textInput--basic" id="z" placeholder="Placeholder">
{{/demo}}

## Inputs - Basic (single line - focus)

{{#demo}}
  <label class="pe-textLabelInput__label--label_focus" for="yz">Label</label>
  <input type="text" class="pe-textInput--basic" id="yz" placeholder="Placeholder">
{{/demo}}

## Inputs - Basic (single line - error)

{{#demo}}
  <label class="pe-textLabelInput__label--label_error" for="y">Email address</label>
  <input type="text" class="pe-textInput--basic_error" id="y" placeholder="Error">
{{/demo}}

## Inputs - Basic (single line - disabled)

{{#demo}}
  <label class="pe-textLabelInput__label--label-disabled" for="x">Label</label>
  <input type="text" class="pe-textInput--basic" id="x" placeholder="Disabled" disabled>
{{/demo}}

## Inputs - Basic (single line - readonly)

{{#demo}}
  <label class="pe-textLabelInput__label" for="y">Label</label>
  <input type="text" class="pe-textInput--input_readonly" id="y" placeholder="ReadOnly`" disabled>
{{/demo}}



## Inputs - Fancy (password)

{{#demo}}
  <label for="PasswordInputFancy" class="pe-textLabelInput__label">First Name</label>
  <input type="password" id="PasswordInputFancy" placeholder="First Name" class="pe-textInput">
  <span class="pe-input_underline"></span>
  <button id="showbutton-PasswordInputFancy" class="pe-textInput__showButton">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
{{/demo}}
** this needs javascript to action show/hide function, and label focus --
 <a href="https://github.com/Pearson-Higher-Ed/compounds/src/PasswordInput">https://github.com/Pearson-Higher-Ed/compounds/src/TextInput</a>

 ## Inputs (password) - Fancy (error)

 {{#demo}}
   <label for="PasswordInputFancyError" class="pe-textLabelInput__label--label_error">First Name</label>
   <input type="password" id="PasswordInputFancyError" placeholder="First Name" class="pe-textInput--input_error">
   <span class="pe-inputError_underline"></span>
   <button id="showbutton-PasswordInputFancyError" class="pe-textInput__showButton--error">show</button>
   <span class="pe-input--info_message">This is an info message</span>
   <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Fancy (readonly)

 {{#demo}}
  <label for="PasswordInputFancyReadOnly" class="pe-textLabelInput__label">First Name</label>
  <input type="password" id="PasswordInputFancyReadOnly" placeholder="First Name" disabled="" readonly="" class="pe-textInput--input_readonly">
  <button id="showbutton-PasswordInputFancyReadOnly" class="pe-textInput__showButton">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Fancy (disabled)

 {{#demo}}
  <label for="PasswordInputFancyDisabled" class="pe-textLabelInput__label--label-disabled">First Name</label>
  <input type="password" id="PasswordInputFancyDisabled" placeholder="First Name" disabled="" class="pe-textInput">
  <span class=""></span>
  <button id="showbutton-PasswordInputFancyDisabled" disabled="" class="pe-textInput__showButton--disabled">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Basic

 {{#demo}}
  <label for="PasswordInputBasic" class="pe-textLabelInput__label">First Name</label>
  <input type="password" id="PasswordInputBasic" placeholder="First Name" class="pe-textInput--basic">
  <span class=""></span>
  <button id="showbutton-PasswordInputBasic" class="pe-textInput__showButton-basic">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Basic (error)

 {{#demo}}
  <label for="PasswordInputBasicError" class="pe-textLabelInput__label--label_error">First Name</label>
  <input type="password" id="PasswordInputBasicError" placeholder="First Name" class="pe-textInput--basic_error">
  <span class=""></span>
  <button id="showbutton-PasswordInputBasicError" class="pe-textInput__showButton-basic">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Basic (disabled)

 {{#demo}}
  <label for="PasswordInputBasicDisabled" class="pe-textLabelInput__label--label-disabled">First Name</label>
  <input type="password" id="PasswordInputBasicDisabled" placeholder="First Name" disabled="" class="pe-textInput--basic">
  <span class=""></span>
  <button id="showbutton-PasswordInputBasicDisabled" disabled="" class="pe-textInput__showButton-basic--disabled">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}

 ## Inputs (password) - Basic (readonly)

 {{#demo}}
  <label for="PasswordInputBasicReadOnly" class="pe-textLabelInput__label">First Name</label>
  <input type="password" id="PasswordInputBasicReadOnly" placeholder="First Name" disabled="" readonly="" class="pe-textInput--input_readonly">
  <button id="showbutton-PasswordInputBasicReadOnly" class="pe-textInput__showButton">show</button>
  <span class="pe-input--info_message">This is an info message</span>
  <span class="pe-input--error_message">This is an error message</span>
 {{/demo}}


## Select Inputs - Basic

Select dropdowns are generally meant for times when a user needs to make a single choice from among many options. People can choose more than one option if the `mutliple` attribute is added, however checkboxes are much more user-friendly for multiple selections.

- Generally only 1 option is visible at a time, unless the `size` attribute is present (points to a string representing the number of options visible by default). We recommend leaving size to its default of "1".

- When there is more than 1 option that could be selected, use checkboxes instead.

**Note:** A separate label should be present and visible for the select box. We do not recommend using one of the options to display a question: browsers differ on how they truncate options before the user focuses on selects.

{{#demo}}
<label class="pe-textLabelInput__label" for="w">Send message to</label>
<div class="pe-select-container">
  <select class="pe-selectInput--basic" id="w">
    <option value="GBPTF">Grizzly Bear Prevention Task Force</option>
    <option value="1234B">Boaty McBoatface</option>
    <option value="GDL">GDL</option>
    <option value="LED">LED</option>
  </select>
  <svg aria-hidden="true"
    focusable="false"
    class="pe-icon--dropdown-open-18">
  <use xlink:href="#dropdown-open-18"></use>
  </svg>
</div>
{{/demo}}

## Select Inputs - Basic (error)

{{#demo}}
<label class="pe-textLabelInput__label--label_error" for="ww">Error label</label>
<div class="pe-select-container-error">
  <select class="pe-selectInput--basic" id="ww">
    <option value="uno">One</option>
    <option value="dos">Two</option>
    <option value="tres">Three</option>
    <option value="quatro">Four</option>
  </select>
  <svg aria-hidden="true"
    focusable="false"
    class="pe-icon--dropdown-open-18">
  <use xlink:href="#dropdown-open-18"></use>
  </svg>
</div>
<p id="someError" class="pe-input--error_message">error message</p>

{{/demo}}

## Select Inputs - Basic (disabled)

{{#demo}}
<label class="pe-textLabelInput__label--label-disabled" for="ww">Error label</label>
<div class="pe-select-container-disabled">
  <select class="pe-select-container-disabled" id="ww" disabled>
    <option value="uno">One</option>
    <option value="dos">Two</option>
    <option value="tres">Three</option>
    <option value="quatro">Four</option>
  </select>
  <svg aria-hidden="true"
    focusable="false"
    class="pe-icon--dropdown-open-18">
  <use xlink:href="#dropdown-open-18"></use>
  </svg>
</div>
<p id="someError" class="pe-input--error_message">error message</p>

{{/demo}}

## Select Inputs - Basic (readOnly)

{{#demo}}
<label class="pe-textLabelInput__label" for="ww">Error label</label>
<div class="pe-select-container-readonly">
  <select class="pe-select-container-readonly" id="ww">
    <option value="uno">One</option>
    <option value="dos">Two</option>
    <option value="tres">Three</option>
    <option value="quatro">Four</option>
  </select>
  <svg aria-hidden="true"
    focusable="false"
    class="pe-icon--dropdown-open-18">
  <use xlink:href="#dropdown-open-18"></use>
  </svg>
</div>
<p id="someError" class="pe-input--error_message">error message</p>

{{/demo}}

## Select Inputs - fancy

{{#demo}}
<label for="select" class="pe-textLabelInput__label">Select Label:</label>
   <div class="pe-select-container--fancy">
      <select id="select" class="pe-selectInput--fancy">
         <option>ipad</option>
         <option>mac</option>
         <option>iphone</option>
      </select>
      <span class="pe-input_underline"></span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-18">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dropdown-open-18"></use>
      </svg>
   </div>
   <span class="pe-input--info_message">This is an info message</span><span class="pe-input--error_message">This is an error message</span>
{{/demo}}


## Select Inputs - fancy (error)

{{#demo}}
<label for="select" class="pe-textLabelInput__label--label_error">Select Label:</label>
   <div class="pe-select-container-fancy-error">
      <select id="select" class="pe-selectInput-fancy-error">
         <option>ipad</option>
         <option>mac</option>
         <option>iphone</option>
      </select>
      <span class="pe-inputError_underline"></span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-18">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dropdown-open-18"></use>
      </svg>
   </div>
   <span class="pe-input--info_message">This is an info message</span><span class="pe-input--error_message">This is an error message</span>
{{/demo}}

## Select Inputs - fancy (disabled)

{{#demo}}
<label for="select" class="pe-textLabelInput__label--label-disabled">Select Label:</label>
   <div class="pe-select-container-fancy-disabled">
      <select id="select" disabled="" class="pe-selectInput-fancy-disabled">
         <option>ipad</option>
         <option>mac</option>
         <option>iphone</option>
      </select>
      <span class=""></span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-18">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dropdown-open-18"></use>
      </svg>
   </div>
   <span class="pe-input--info_message">This is an info message</span><span class="pe-input--error_message">This is an error message</span>
{{/demo}}

## Select Inputs - fancy (readonly)

{{#demo}}
<label for="select" class="pe-textLabelInput__label">Select Label:</label>
   <div class="pe-select-container-fancy-readonly">
      <select id="select" disabled="" class="pe-selectInput-fancy-readonly">
         <option>ipad</option>
         <option>mac</option>
         <option>iphone</option>
      </select>
      <span class=""></span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-18">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dropdown-open-18"></use>
      </svg>
   </div>
   <span class="pe-input--info_message">This is an info message</span><span class="pe-input--error_message">This is an error message</span>
{{/demo}}



## Multiple Line text

{{#demo}}
<label class="pe-textLabelInput__label" for="zz">Multi-line label</label>
<textarea class="pe-multiLineText" id="zz" cols="30" rows="5"
  placeholder="Many words displayed over multiple lines.">
</textarea>
{{/demo}}

## Multiple Line text - error

{{#demo}}
<label class="pe-textLabelInput__label--label_error" for="zz">Multi-line label</label>
<textarea class="pe-multiLineText--error" id="zz" cols="30" rows="5"
  placeholder="Many words displayed over multiple lines.">
</textarea>
{{/demo}}

## Multiple Line text - disabled

{{#demo}}
<label class="pe-textLabelInput__label--label-disabled" for="zz">Multi-line label</label>
<textarea class="pe-multiLineText--disabled" id="zz" cols="30" rows="5"
  placeholder="Many words displayed over multiple lines." disabled>
</textarea>
{{/demo}}

## Multiple Line text - readOnly

{{#demo}}
<label class="pe-textLabelInput__label" for="zz">Multi-line label</label>
<textarea class="pe-multiLineText--readOnly" id="zz" cols="30" rows="5"
  placeholder="Many words displayed over multiple lines." disabled>
</textarea>
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
        <svg aria-hidden="true"
             focusable="false"
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


### RadioCheckGroup - (radio)
{{#demo}}
<fieldset class="pe-fieldset">
   <legend class="pe-legend">These are radio buttons</legend>
   <div class="pe-radio">
      <input type="radio" id="radiocheck-radiobutton2-tea-0" name="radiobutton2" value="tea"><label for="radiocheck-radiobutton2-tea-0">tea</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>
         </svg>
      </span>
   </div>
   <div class="pe-radio">
      <input type="radio" id="radiocheck-radiobutton2-coffee-1" name="radiobutton2" value="coffee"><label for="radiocheck-radiobutton2-coffee-1">coffee</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>
         </svg>
      </span>
   </div>
   <div class="pe-radio">
      <input type="radio" id="radiocheck-radiobutton2-soda-2" name="radiobutton2" value="soda"><label for="radiocheck-radiobutton2-soda-2">soda</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>
         </svg>
      </span>
   </div>
   <div class="pe-radio">
      <input type="radio" id="radiocheck-radiobutton2-water-3" name="radiobutton2" value="water"><label for="radiocheck-radiobutton2-water-3">water</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>
         </svg>
      </span>
   </div>
</fieldset>
{{/demo}}

### RadioCheckGroup - (checkbox)

{{#demo}}
<fieldset class="pe-fieldset">
   <legend class="pe-legend">These are checkboxes</legend>
   <div class="pe-checkbox">
      <input type="checkbox" id="radiocheck-checkbox1-tea-0" name="checkbox1" value="tea"><label for="radiocheck-checkbox1-tea-0">tea</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>
         </svg>
      </span>
   </div>
   <div class="pe-checkbox">
      <input type="checkbox" id="radiocheck-checkbox1-coffee-1" name="checkbox1" value="coffee" disabled=""><label for="radiocheck-checkbox1-coffee-1">coffee</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>
         </svg>
      </span>
   </div>
   <div class="pe-checkbox">
      <input type="checkbox" id="radiocheck-checkbox1-soda-2" name="checkbox1" value="soda"><label for="radiocheck-checkbox1-soda-2">soda</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>
         </svg>
      </span>
   </div>
   <div class="pe-checkbox">
      <input type="checkbox" id="radiocheck-checkbox1-water-3" name="checkbox1" value="water" disabled=""><label for="radiocheck-checkbox1-water-3">water</label>
      <span>
         <svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>
         </svg>
      </span>
   </div>
</fieldset>
{{/demo}}
