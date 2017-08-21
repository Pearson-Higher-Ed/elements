---
layout: docs.html
title: Forms
section: elements
---

[Design and redlines](http://pearson-higher-ed.github.io/design/c/forms/)

The basic form consists of several parts: a form name (class: pe-form--name or pe-form--name-bold), an optional top level error (class: pe-form--error),
an optional form/error description (pe-form--desc), one or more input fields (contained in class: pe-form--group), and a Next/Submit button (class: pe-btn__cta
or pe-btn__primary).

{{#demo}}
<form class="pe-form">

</form>
{{/demo}}

## Elements

Form classes should be used within a form tag with the pe-form class.  All form elements should be contained within this form tag.

### Form Name

For accessibility purposes, the form name should use a standard HTML header tag (e.g. h1-h6) but should also have the class pe-form--name added to it.  The purpose of this
class is to insure proper spacing while the HTML header tag will handle typography.

### Top Level error

Individual input fields should present their own errors following the styles dictated for input components.  Fields with errors should always be accompanied by error text,
unless a top level error message is sufficient to understand and fix the problem(s).  

Top level errors relevant to the form as a whole may be presented above the first input and below the form name.  It should consist of a single line message (class: pe-form--error)
and then optional chunk of body copy (class: pe-form--desc) that explains the situation in more detail.  

### Form description

An optional form description may be added should the form fields themselves be insufficient to properly explain the information requested.  This optional area should be
standard body copy using the appropriate semantic HTML but should contain the pe-form--desc class in order to enforce proper spacing.

### Input Fields

One or more input fields from the input components may be included in the form.  Each form element must be contained within a container (e.g. div) with the class pe-form--group
added to insure proper spacing between form fields.  Form fields will occupy 100% of the form width and stack.

### Next/Submit button

The Next/Submit button should start out as a default button and become a primary (pe-btn__primary) or a CTA (pe-btn__cta) once the form has been completely filled out.  Since
this change cannot be accomplished strictly via CSS, the application will need to detect the circumstances where the button will change upon form completion.

If the form is broken up into multiple pages, use a "Continue" or "Next" button to advance the form series. Maintain the same form name between each page.  The UI will also need
to provide the means to return to previous steps in the process when appropriate.

{{#demo}}
<form class="pe-form">
  <h1 class="pe-form--name-bold">Form Name</h1>
  <p class="pe-form--error">Initial error description (target one line or less)</p>
  <p class="pe-form--desc">Additional error details or form instructions for the form can go here.  This is optional.</p>
  <div class="pe-form--group">
    <label class="pe-textLabelInput__label" for="a">First Name</label>
    <input type="text" class="pe-textInput" id="a" placeholder="First Name">
    <span class="pe-input_underline"></span>
  </div>
  <div class="pe-form--group">
    <label class="pe-textLabelInput__label" for="b">Last Name</label>
    <input type="text" class="pe-textInput" id="b" placeholder="Last Name">
    <span class="pe-input_underline"></span>
  </div>
  <button class="pe-btn__cta">Submit</button>
</form>
{{/demo}}
