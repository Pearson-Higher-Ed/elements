---
layout: docs.html
title: Color
section: elements
permalink: /elements/color/
---
### Pre-Defined Palettes

<div class="d-swatch">
  {{#each colors.palettes}}
  <div class="pe-palette-{{@key}}">
    <h4>{{this}}</h4>
    <div class="pe-c--primary-text-color">Primary Text</div>
    <div class="pe-c--secondary-text-color">Secondary Text</div>
    <div class="pe-c--primary-link-color">Primary Link</div>
    <div class="pe-c--secondary-link-color">Secondary Link</div>
    <div class="pe-c--bg-color-darker">BG Darker</div>
    <div class="pe-c--bg-color-dark">BG Dark</div>
    <div class="pe-c--bg-color-light">BG Light</div>
    <div class="pe-c--bg-color-lighter">BG Lighter</div>
    <div class="pe-c--highlight-color">Highlight</div>
    <div class="pe-c--accent-dark">Accent Dark</div>
    <div class="pe-c--accent-med">Accent Med</div>
    <div class="pe-c--accent-light">Accent Light</div>
  </div>
  {{/each}}

  <div class="clear: both;"></div>
</div>


<br/><br/>
<hr/>

### Entire Palette
<div class="d-swatch">
  {{#each colors.colors}}
    <div class="d-swatch--color pe-color-{{this}}"></div>
  {{/each}}
</div>
