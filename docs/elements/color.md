---
layout: docs.html
title: Color
section: elements
---
### Pre-Defined Palettes

The background color of each swatch is the hex code that will be used.

In your SASS file, use `pePalette(light|dark|blue, swatch-label)` where swatch label is like `primary-text-color`.  Check the class name for the full label name.

<div class="d-swatch">
  {{#each colors.palettes}}
  <div class="d-palette-{{@key}}">
    <h4>{{this}}</h4>
    <div class="d-c--color d-c--primary-text-color">Primary Text</div>
    <div class="d-c--color d-c--secondary-text-color">Secondary Text</div>
    <div class="d-c--color d-c--primary-link-color">Primary Link</div>
    <div class="d-c--color d-c--secondary-link-color">Secondary Link</div>
    <div class="d-c--color d-c--bg-color-darker">BG Darker</div>
    <div class="d-c--color d-c--bg-color-dark">BG Dark</div>
    <div class="d-c--color d-c--bg-color-light">BG Light</div>
    <div class="d-c--color d-c--bg-color-lighter">BG Lighter</div>
    <div class="d-c--color d-c--highlight-color">Highlight</div>
    <div class="d-c--color d-c--accent-dark">Accent Dark</div>
    <div class="d-c--color d-c--accent-med">Accent Med</div>
    <div class="d-c--color d-c--accent-light">Accent Light</div>
  </div>
  {{/each}}

  <div style="clear: both;"></div>
</div>

<hr/>

### Entire Palette

The background color of each swatch is the hex code that will be used.

Text is in both black and white to show you the un-adjusted contrast for each.

You should not have to use these directly, but in the event you do, use `peColor(color-name)` for example `peColor(gray-no-1)`.

<div class="d-swatch">
  {{#each colors.colors}}
    <div class="d-swatch--color d-color-{{this}}"></div>
  {{/each}}
</div>
