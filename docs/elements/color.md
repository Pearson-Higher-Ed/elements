---
layout: docs.html
title: Color
section: elements
---
## Entire Palette

The background color of each swatch is the hex code that will be used.

Text is in both black and white to show you the un-adjusted contrast for each.

You should not have to use these directly, but in the event you do, use `pe-color(color-name)` for example<br/>`pe-color(gray-no-1)`.

<div class="d-swatches">
  {{#each colors.colors}}
    <div class="d-swatch d-swatch--{{this}}"></div>
  {{/each}}
</div>
