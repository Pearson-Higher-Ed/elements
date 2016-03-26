---
layout: docs.html
title: inputs
section: elements
---

Checkboxes are for times when the user needs to make one or more binary choices about a related item. Type attribute of "Checkbox" also represents a state or option that can be toggled.

{{#demo}}
  <input type="checkbox" name="Selected Checkbox" value="" checked>Selected Checkbox<br>
  <input type="checkbox" name="UnSelected" value="" >UnSelected<br>
{{/demo}}

### Elements

Checkbox classes can be used with `<input>` element with explanatory text enclosed in label tags. You can place input tags in div, span as well as form elements.

{{#demo}}
<div class="checkbox checked">
  <label for="checkbox">
    <input type="checkbox" name="Selected Checkbox" value="" checked>Selected Checkbox<br>
  </label>
</div>
<form class="checkbox checked">
  <label for="checkbox">
    <input type="checkbox" name="Selected Checkbox" value="" checked>Selected Checkbox<br>
  </label>
</form>
{{/demo}}

### Disabled

Checkboxes can be disabled.

{{#demo}}
  <input type="checkbox" name="Read only/Disabled" value="" disabled>Read only/Disabled<br>
{{/demo}}


### Disabled and Selected

Checkboxes can be selected and disabled.

{{#demo}}
  <input type="checkbox" name="Read only/Disabled (selected)" value="" disabled checked>Read only/Disabled (selected)<br>
{{/demo}}
