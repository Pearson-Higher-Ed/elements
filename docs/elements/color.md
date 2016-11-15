---
layout: docs.html
title: Color
section: elements
---
## Entire Palette

The background color of each swatch is the hex code that will be used.

Text is in both black and white to show you the un-adjusted contrast for each.

You should not have to use these directly, but in the event you do, use `$pe-color-[color-name]` for example<br/>`$pe-color-digital-pearson-blue`.

### Primary Palette 
<div class="d-swatches">
  {{#each colors.colors-primary}}
    <div class="d-swatch d-swatch--pe-color-{{this}}"></div>
  {{/each}}
</div>

### Secondary Palette
<div class="d-swatches">
  {{#each colors.colors-secondary}}
    <div class="d-swatch d-swatch--pe-color-{{this}}"></div>
  {{/each}}
</div>

### Neutral Palette
<div class="d-swatches">
  {{#each colors.colors-neutral}}
    <div class="d-swatch d-swatch--pe-color-{{this}}"></div>
  {{/each}}
</div>

### Conditional Palette
<div class="d-swatches">
  {{#each colors.colors-conditional}}
    <div class="d-swatch d-swatch--pe-color-{{this}}"></div>
  {{/each}}
</div>
