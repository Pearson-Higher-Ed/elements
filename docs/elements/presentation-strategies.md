---
layout  : docs.html
title   : Presentation Strategies
section : elements
---


This component provides several standard strategies for presenting content within a layout template.
Layout Templates help you structure a page at a high level and chunk it into major layout areas. Presentation strategies operate at one level lower, helping to actually fill out those layout areas in a standard and rational way.

[Design and Redlines](https://pearson-higher-ed.github.io/design/c/presentation-strategies/)

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

### Spacing
Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.

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


## Basic Grid
The basic grid strategy arranges equally sized chunks of content into two, three, or four rows. Each chunk should maintain the same height. The gutter size is configurable to be either small (10px) or large (20px). Chunks fill the content area in a left-to-right, top-to-bottom pattern.

#### Basic Grid (--small-2col)
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:100%;height:250px;'>
    <div class='pe-strategy__basic-grid--small-2col'>
      <div style='background:cyan;text-align:center;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;'>Content Area</div>
      <div style='background:whiteSmoke;text-align:center;'><img src="https://img1.etsystatic.com/022/0/6252525/il_fullxfull.478145691_guj1.jpg" height="50px"; width="100px";></div>
      <div style='background:greenYellow;text-align:center;'><img src="https://img1.etsystatic.com/022/0/6252525/il_fullxfull.478145691_guj1.jpg" height="100px"; width="100px";><p>hi there</p></div>
      <div style='background:lightBlue;text-align:center;'>Content Area</div>
      <div style='background:BurlyWood;text-align:center;'>Content Area</div>
      <div style='background:HotPink;text-align:center;'>Content Area</div>
      <div style='background:OliveDrab;text-align:center;'>Content Area</div>
      <div style='background:Orange;text-align:center;'>Content Area</div>
      <div style='background:Plum;text-align:center;'>Content Area</div>
      <div style='background:Silver;text-align:center;'>Content Area</div>
      <div style='background:SlateBlue;text-align:center;'>Content Area</div>
    </div>
  </div>
{{/demo}}


#### Basic Grid (--small-3col)
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:100%;height:175px'>
    <div class='pe-strategy__basic-grid--small-3col'>
      <div style='background:cyan;text-align:center;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;'>Content Area</div>
      <div style='background:whiteSmoke;text-align:center;'>Content Area</div>
      <div style='background:greenYellow;text-align:center;'>Content Area</div>
      <div style='background:lightBlue;text-align:center;'>Content Area</div>
      <div style='background:BurlyWood;text-align:center;'>Content Area</div>
      <div style='background:HotPink;text-align:center;'>Content Area</div>
      <div style='background:OliveDrab;text-align:center;'>Content Area</div>
      <div style='background:Orange;text-align:center;'>Content Area</div>
      <div style='background:Plum;text-align:center;'>Content Area</div>
      <div style='background:Silver;text-align:center;'>Content Area</div>
      <div style='background:SlateBlue;text-align:center;'>Content Area</div>
    </div>
  </div>
{{/demo}}


#### Basic Grid (--small-4col)
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:100%;height:150px'>
    <div class='pe-strategy__basic-grid--small-4col'>
      <div style='background:cyan;text-align:center;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;'>Content Area</div>
      <div style='background:whiteSmoke;text-align:center;'>Content Area</div>
      <div style='background:greenYellow;text-align:center;'>Content Area</div>
      <div style='background:lightBlue;text-align:center;'>Content Area</div>
      <div style='background:BurlyWood;text-align:center;'>Content Area</div>
      <div style='background:HotPink;text-align:center;'>Content Area</div>
      <div style='background:OliveDrab;text-align:center;'>Content Area</div>
      <div style='background:Orange;text-align:center;'>Content Area</div>
      <div style='background:Plum;text-align:center;'>Content Area</div>
      <div style='background:Silver;text-align:center;'>Content Area</div>
      <div style='background:SlateBlue;text-align:center;'>Content Area</div>
    </div>
  </div>
{{/demo}}


#### Basic Grid (large)
{{#demo}}
<div class='pe-template__single' style='background:magenta;width:100%;height:100px;'>
  <div class='pe-strategy__basic-grid--large'>
    <div style='background:cyan;text-align:center;'>Content Area</div>
    <div style='background:blueViolet;text-align:center;'>Content Area</div>
    <div style='background:whiteSmoke;text-align:center;'>Content Area</div>
    <div style='background:greenYellow;text-align:center;'>Content Area</div>
  </div>
</div>
{{/demo}}


## Spacing
Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.

#### Directly Adjoining (Default)
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:300px;'>
    <div class='pe-strategy__centered'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
  </div>
{{/demo}}

#### Small Gap
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:300px;'>
    <div class='pe-strategy__centered--small-gap'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered--small-gap'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered--small-gap'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
  </div>
{{/demo}}

#### Large Gap
{{#demo}}
  <div class='pe-template__single' style='background:magenta;width:300px;'>
    <div class='pe-strategy__centered--large-gap'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered--large-gap'>
      <div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>
      <div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>
    </div>
    <div class='pe-strategy__centered--large-gap'>
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


#### Basic Grid Strategy
- Each content area is either 50%, 33.333333%, or 25% wide (including a gutter’s width)
- Small gutters are 10px, large are 20px
- Negative margins or a similar technique should be used to position the left and right edges of the content areas directly against the edge of the container
- Each item should have the same height
- Items are filled in a left-to-right and then top-to-bottom order


#### Spacing
- Directly adjoining strategies should have no gap between them
- Small Gap is 40px total
- Large gap is 80px total
