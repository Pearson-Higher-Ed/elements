---
layout: docs.html
title: inputs
section: elements
---

Checkboxes are for times when the user needs to make one or more binary choices about a related item. Type attribute of "Checkbox" also represents a state or option that can be toggled.
### Checked

{{#demo}}
  <div class="pe-checkbox pe-checkbox--checked">
    <input type="checkbox" name="Selected Checkbox" id="chk1" value="" checked>
    <label for="chk1">Selected Checkbox</label>
  </div>
{{/demo}}

### UnChecked

{{#demo}}
  <div class="pe-checkbox pe-checkbox--unchecked">
      <input type="checkbox" name="UnChecked" id="chk2" value="">
      <label for="chk2">UnChecked</label>
    </div>
{{/demo}}

### Disabled

{{#demo}}
  <div class="pe-checkbox pe-checkbox--disabled">
      <input type="checkbox" name="Read only/Disabled" id="chk3" value="" disabled>
      <label for="chk3">Read only/Disabled</label>
    </div>
{{/demo}}


### Disabled and Selected

{{#demo}}
 <div class="pe-checkbox pe-checkbox--disabled-checked">
       <input type="checkbox" name="Read only/Disabled (selected)" id="chk4" value="" disabled checked>
       <label for="chk4">Read only/Disabled(selected)</label>
   </div>
{{/demo}}
