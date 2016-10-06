---
layout  : docs.html
title   : Presentation Strategies
section : elements
---


This component provides several standard strategies for presenting content within a layout template.
Layout Templates help you structure a page at a high level and chunk it into major layout areas. Presentation strategies operate at one level lower, helping to actually fill out those layout areas in a standard and rational way.

[Design and Redlines](https://pearson-higher-ed.github.io/design/c/presentation-strategies/)

** **Grid and Spacing Features from Redlines... yet to be implimented**

Feature List
- Support for common layout patterns
- Full integration with the standard templates

Usage Guidelines
- All content within a template should specify a presentation strategy to use.


### Overview
Content areas
Each strategy defines the location of one or more content areas which should each contain a single piece of content.

### Stacking
Similarly to the templates themselves, strategies can be combined into stacks within a given template area.

### Responsive behavior
Strategies don’t include inherent responsive behavior, preferring instead to leave that up to their containing templates. More advanced designs may change between various strategies at the standard breakpoints.


## Default
The default strategy is the normal browser layout flow of left aligning content.

{{#demo}}
<div class='pe-template__single' style='background:magenta;width:300px;'>
  <div class='pe-strategy__default'>
    <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
    <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
  </div>
</div>
{{/demo}}




## Centered
The centered strategy simply centers its contents within the containing area.

{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:300px;'>
    <div class='pe-strategy__centered'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
  </div>
{{/demo}}


## Left/Right
This strategy aligns one chunk of content to the left and another chunk to the right.

{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:300px;'>
    <div class='pe-strategy__left_right'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
  </div>
{{/demo}}



## Redlines
#### Default Strategy
- Apply no specific positioning, just follow the standard left-aligned browser flow


#### Centered Strategy
- Center the content item horizontally within the container


#### Left/Right Strategy
- One content item is left aligned and the other is right aligned
- Both content items are vertically aligned to their top edges
