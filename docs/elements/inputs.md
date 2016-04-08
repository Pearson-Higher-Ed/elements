---
layout: docs.html
title: Inputs
section: elements
---

Text input form elements are to be used for single line text inputs.

{{#demo}}
<input type="text" class="pe-input" value="Basic text input field"></input>
<input type="text" class="pe-input pe-input--small" value="Small text input field"></input>
{{/demo}}

### Placeholder

Placeholders can be used to give additional information about the format of data.

{{#demo}}
<input type="text" class="pe-input pe-input--basicplaceholder" placeholder="Basic text input field"></input>
<input type="text" class="pe-input pe-input--smallplaceholder" placeholder="Small text input field"></input>
{{/demo}}

### Readonly

To prevent the user from interacting with the field.

{{#demo}}
<input type="text" class="pe-input pe-input--readonly" value="Readonly" readonly></input>
<input type="text" class="pe-input pe-input-placeholder-readonly" placeholder="Readonly" readonly></input>
{{/demo}}

### Disabled

This state is a form input that is unavailable for interaction.

{{#demo}}
<input type="text" class="pe-input" value="Disabled" disabled></input>
<input type="text" class="pe-input pe-input-placeholder-disabled" placeholder="Disabled" disabled></input>
{{/demo}}

### Error

This field is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message.

{{#demo}}
<input type="text" class="pe-input pe-input--error" value="Error"></input>
{{/demo}}
