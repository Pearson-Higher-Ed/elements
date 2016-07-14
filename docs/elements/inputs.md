---
layout: docs.html
title: Inputs
section: elements
---

## Input with button
A combination of pe-input and pe-button.

{{#demo}}
<div class="pe-input-group">
  <div class="pe-input">
    <label for="i1">Label text</label>
    <input type="text" id="i1" value="Basic text input field">
    <button class="pe-btn pe-btn--medium">Do Stuff!</button>
  </div>
</div>

<p>Example as search: </p>
<div class="pe-input-group">
  <div class="pe-input">
    <label for="i2">Search our site</label>
    <input type="text" id="i2" placeholder="course number, course name, instructor">
    <button class="pe-btn pe-btn--medium">
      <i class="pe-icon--search" aria-hidden="true"></i>
      <span class="pe-sr-only">Search</span>
    </button>
  </div>
</div>
{{/demo}}


## Input with fake button (datepicker as example)
This is an input with a picture of a button.

{{#demo}}
<div class="pe-input-group pe-input-icon">
  <div class="pe-input">
    <label for="i3">Pick a date</label>
    <input type="text" id="i3" placeholder="dd/mm/yyyy">
    <span class="pe-btn pe-btn--medium">
      <i class="pe-icon--calendar" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pe-calendar">
    <div class="pe-calendar-year">
      <h3 class="pe-calendar-month" id="m1">March 2016</h3>
      <div class="pe-calendar-buttons">
        <button class="pe-btn--inverse-link" aria-label="Previous" title="Previous">
          <span class="pe-icon--chevron-left" aria-hidden="true"></span>
        </button>
        <button class="pe-btn--inverse-link" aria-label="Next" title="Next">
          <span class="pe-icon--chevron-right" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <table class="pe-calendar-dates" aria-describedby="m1">
      <thead>
        <tr>
          <th scope="col"><abbr title="Sunday">S</abbr></th>
          <th scope="col"><abbr title="Monday">M</abbr></th>
          <th scope="col"><abbr title="Tuesday">T</abbr></th>
          <th scope="col"><abbr title="Wednesday">W</abbr></th>
          <th scope="col"><abbr title="Thursday">T</abbr></th>
          <th scope="col"><abbr title="Friday">F</abbr></th>
          <th scope="col"><abbr title="Saturday">S</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">28</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">29</div></td>
          <td><div class="pe-calendar-dates-div">1</div></td>
          <td><div class="pe-calendar-dates-div">2</div></td>
          <td><div class="pe-calendar-dates-div">3</div></td>
          <td><div class="pe-calendar-dates-div">4</div></td>
          <td><div class="pe-calendar-dates-div">5</div></td>
        </tr>
        <tr>
          <td><div class="pe-calendar-dates-div">6</div></td>
          <td><div class="pe-calendar-dates-div">7</div></td>
          <td><div class="pe-calendar-dates-div">8</div></td>
          <td class="pe-calendar-dates--selected">
            <div class="pe-calendar-dates-div">9</div> <span class="pe-sr-only">Selected</span>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">10 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">11 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">12 <span class="pe-sr-only">Highlighted</span></div>
          </td>
        </tr>
        <tr>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">13 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">14 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">15 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">16 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">17 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">18 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">19 <span class="pe-sr-only">Highlighted</span></div>
          </td>
        </tr>
        <tr>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">20 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--disabled">
            <div class="pe-calendar-dates-div">21 <span class="pe-sr-only">Not selectable</span></div>
          </td>
          <td><div class="pe-calendar-dates-div">22</div></td>
          <td><div class="pe-calendar-dates-div">23</div></td>
          <td><div class="pe-calendar-dates-div">24</div></td>
          <td><div class="pe-calendar-dates-div">25</div></td>
          <td><div class="pe-calendar-dates-div">26</div></td>
        </tr>
        <tr>
          <td><div class="pe-calendar-dates-div">27</div></td>
          <td><div class="pe-calendar-dates-div">28</div></td>
          <td><div class="pe-calendar-dates-div">29</div></td>
          <td><div class="pe-calendar-dates-div">30</div></td>
          <td><div class="pe-calendar-dates-div">31</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">1</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">2</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="pe-input-group pe-input-icon">
  <div class="pe-input pe-input--small">
    <label for="d3">Pick a tiny date</label>
    <input type="text" id="d3" placeholder="dd/mm/yyyy">
    <span class="pe-btn pe-btn--small">
      <i class="pe-icon--calendar" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pe-calendar">
    <div class="pe-calendar-year">
      <h3 class="pe-calendar-month" id="m2">March 2016</h3>
      <div class="pe-calendar-buttons">
        <button class="pe-btn--inverse-link" aria-label="Previous" title="Previous">
          <span class="pe-icon--chevron-left" aria-hidden="true"></span>
        </button>
        <button class="pe-btn--inverse-link" aria-label="Next" title="Next">
          <span class="pe-icon--chevron-right" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <table class="pe-calendar-dates" aria-describedby="m2">
      <thead>
        <tr>
          <th scope="col"><abbr title="Sunday">S</abbr></th>
          <th scope="col"><abbr title="Monday">M</abbr></th>
          <th scope="col"><abbr title="Tuesday">T</abbr></th>
          <th scope="col"><abbr title="Wednesday">W</abbr></th>
          <th scope="col"><abbr title="Thursday">T</abbr></th>
          <th scope="col"><abbr title="Friday">F</abbr></th>
          <th scope="col"><abbr title="Saturday">S</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">28</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">29</div></td>
          <td><div class="pe-calendar-dates-div">1</div></td>
          <td><div class="pe-calendar-dates-div">2</div></td>
          <td><div class="pe-calendar-dates-div">3</div></td>
          <td><div class="pe-calendar-dates-div">4</div></td>
          <td><div class="pe-calendar-dates-div">5</div></td>
        </tr>
        <tr>
          <td><div class="pe-calendar-dates-div">6</div></td>
          <td><div class="pe-calendar-dates-div">7</div></td>
          <td><div class="pe-calendar-dates-div">8</div></td>
          <td class="pe-calendar-dates--selected">
            <div class="pe-calendar-dates-div">9</div> <span class="pe-sr-only">Selected</span>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">10 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">11 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">12 <span class="pe-sr-only">Highlighted</span></div>
          </td>
        </tr>
        <tr>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">13 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">14 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">15 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">16 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">17 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">18 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">19 <span class="pe-sr-only">Highlighted</span></div>
          </td>
        </tr>
        <tr>
          <td class="pe-calendar-dates--highlighted">
            <div class="pe-calendar-dates-div">20 <span class="pe-sr-only">Highlighted</span></div>
          </td>
          <td class="pe-calendar-dates--disabled">
            <div class="pe-calendar-dates-div">21 <span class="pe-sr-only">Not selectable</span></div>
          </td>
          <td><div class="pe-calendar-dates-div">22</div></td>
          <td><div class="pe-calendar-dates-div">23</div></td>
          <td><div class="pe-calendar-dates-div">24</div></td>
          <td><div class="pe-calendar-dates-div">25</div></td>
          <td><div class="pe-calendar-dates-div">26</div></td>
        </tr>
        <tr>
          <td><div class="pe-calendar-dates-div">27</div></td>
          <td><div class="pe-calendar-dates-div">28</div></td>
          <td><div class="pe-calendar-dates-div">29</div></td>
          <td><div class="pe-calendar-dates-div">30</div></td>
          <td><div class="pe-calendar-dates-div">31</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">1</div></td>
          <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">2</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{/demo}}

<script>
  var dp=document.querySelectorAll('.pe-input-icon input'),
      cal=document.querySelectorAll('.pe-calendar'),
      container=document.querySelector('.pe-input-icon');

console.log(dp);
  console.log(cal[0]);
    
  container.style.position='relative';
  cal[0].style.display='none';
  cal[0].style.position='absolute';
  cal[0].style.marginTop='-5px';
  cal[1].style.display='none';
  cal[1].style.position='absolute';
  cal[1].style.marginTop='-5px';

  dp[0].addEventListener('focus',function() {
    cal[0].style.display="block";
  },false);
  dp[0].addEventListener('blur',function() {
    cal[0].style.display="none";
  },false);

  dp[1].addEventListener('focus',function() {
    cal[1].style.display="block";
  },false);
  dp[1].addEventListener('blur',function() {
    cal[1].style.display="none";
  },false);
</script>

## Single-line input fields

<aside>
Label-input pairs are wrapped in divs in order to have a single unit that can be styled and moved around. The `pe-inlineblock` class on a container will make these divs line up horizontally.
</aside>

Text input form elements are to be used for single line text inputs.

{{#demo}}
<div class="pe-inlineblock">
  <div class="pe-input">
    <label for="i4">Text label</label>
    <input type="text" id="i4" value="Basic text input field">
  </div>

  <div class="pe-input pe-input--small">
    <label for="i5">Text label</label>
    <input type="text" id="i5" value="Small text input field">
  </div>
</div>
{{/demo}}

### Placeholder

Placeholders can be used to give additional information about the format of data. They do *not* replace labels!

{{#demo}}
<div class="pe-input">
  <label for="i6">Your name</label>
  <input type="text" id="i6" placeholder="First and last name" value="">
</div>

<div class="pe-input pe-input--small">
  <label for="i7">Your name</label>
  <input type="text" id="i7" placeholder="First and last name" value="">
</div>
{{/demo}}

### Readonly

To prevent the user from interacting with the field. The `pe-input--readonly` class is only for styling; the readonly attribute *must* be applied to make the field function as readonly.

{{#demo}}
<div class="pe-input pe-input--readonly">
  <label for="i8">Your text</label>
  <input type="text" id="i8" value="Readonly text here" readonly>
</div>
{{/demo}}

### Disabled

This state is a form input that is unavailable for interaction. The `pe-input--disabled` class is only for styling; the disabled attribute *must* be applied to make the field function as disabled.

{{#demo}}
<div class="pe-input pe-input--disabled">
  <label for="i9">Text label</label>
  <input type="text" id="i9" value="Disabled" disabled>
</div>

<div class="pe-input pe-input--disabled">
  <label for="i10">Text label</label>
  <input type="text" id="i10" placeholder="disabled with a placeholder" value="" disabled>
</div>
{{/demo}}

### Error

This field is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message, which either must be inside the label element *or* if a separate element is used, it must have an id and the input must have a matching `aria-describedby` attribute.

{{#demo}}
<div class="pe-input pe-input--small pe-input--error">
  <label for="i11">Text label <span class="pe-error-text">something went wrong!</span></label>
  <input type="text" id="i11" value="Error (in small input)">
</div>

<div class="pe-input pe-input--error">
  <label for="i12">Text label </label>
  <input type="text" id="i12" aria-describedby="i12-error" value="Error">
  <p id="i12-error" class="pe-error-text">Something went wrong!</p>
</div>
{{/demo}}

## Checkboxes

Checkboxes are for times when the user needs to make one or more binary choices about a related item. Type attribute of "checkbox" also represents a state or option that can be toggled.

### Checked, unchecked, disabled and unchecked, disabled and checked

{{#demo}}
  <div class="pe-checkbox">
    <input type="checkbox" name="Checked" id="chk1" value="" checked>
    <label for="chk1">Checked</label>
  </div>

  <div class="pe-checkbox">
    <input type="checkbox" name="UnChecked" id="chk2" value="">
    <label for="chk2">UnChecked</label>
  </div>

  <div class="pe-checkbox">
    <input type="checkbox" name="Read only/Disabled" id="chk3" value="" disabled>
    <label for="chk3">Read only/Disabled</label>
  </div>

  <div class="pe-checkbox">
    <input type="checkbox" name="Read only/Disabled (checked)" id="chk4" value="" disabled checked>
    <label for="chk4">Read only/Disabled (checked)</label>
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

Radio buttons are for when the user must choose a single item out of several options. Type attribute of "radio" also represents a state or option that can be toggled. Radio buttons belong in a radio group; everyone in the radio group shares the same `name` attribute.

### Checked, unchecked, disabled and unchecked

{{#demo}}
  <div class="pe-radio">
    <input type="radio" name="group1" id="rad1" value="" checked>
    <label for="rad1">Checked</label>
  </div>

  <div class="pe-radio">
    <input type="radio" name="group1" id="rad2" value="">
    <label for="rad2">UnChecked</label>
  </div>

  <div class="pe-radio">
    <input type="radio" name="group1" id="rad3" value="" disabled>
    <label for="rad3">Read only/Disabled</label>
  </div>
{{/demo}}


### Disabled and Checked

{{#demo}}
 <div class="pe-radio">
    <input type="radio" name="group2" id="rad4" value="" disabled checked>
    <label for="rad4">Read only/Disabled (checked)</label>
 </div>
{{/demo}}

### Small radio button

{{#demo}}
  <div class="pe-radio pe-radio--small">
    <input type="radio" name="group3" id="rad6" value="">
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

## Select Box

The select input allows a user to choose one of many predetermined options.

{{#demo}}
<div class="pe-inlineblock">
  <div class="pe-select">
    <label for="se1">Text label</label>
    <select id="se1">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>

  <div class="pe-select pe-select--small">
    <label for="se2">Text label</label>
    <select id="se2">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</div>
{{/demo}}

### Select Readonly

{{#demo}}
<div class="pe-select pe-select--readonly">
  <label for="se3">Text label</label>
  <select id="se3">
    <option disabled="disabled">Java</option>
    <option selected="selected">CSS</option>
    <option disabled="disabled">HTML</option>
  </select>
</div>
{{/demo}}

### Select Disabled

{{#demo}}
<div class="pe-select pe-select--disabled">
  <label for="se4">Text label</label>
  <select disabled id="se4">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</div>
{{/demo}}

### Select Error

{{#demo}}
<div class="pe-select pe-select--error">
  <label for="se5">Text label</label>
  <select id="se5">
    <option value="error">Error</option>
  </select>
</div>
{{/demo}}
