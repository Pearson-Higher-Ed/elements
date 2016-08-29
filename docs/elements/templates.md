---
layout  : docs.html
title   : Templates
section : elements
---

A standard set of page structures for a variety of use cases.
Templates provide a way of organizing and structuring the content of a page in a consistent and responsive way. There are a variety of templates available for everything from simple single column presentations to more complicated multi-column structures.

Several Presentation Strategies are available for organization of content within the layout areas provided by each templates.

Feature List:
- Consistent dimensions for a variety of useful page structures
- Responsive strategies for each template
- Accessible implementation

Usage Guidelines:
- Every page should utilize one or more of these templates to create its high level structure.


## Single Column
The simplest page template, it takes up the full 12 columns available at every breakpoint.

Dimensions:
- Full 12 column width at all breakpoints

Responsive:
- Maintain full 12 column width

{{#demo}}
  <div class='pe-template__single' style='background:magenta;'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
{{/demo}}


## Two Column
This template devotes 8 columns to a main content area and the remaining 4 to a sidebar which appears on either side. At medium and smaller breakpoints the content areas stack, with the option to put the sidebar above or below the main content area.

Dimensions:
- Full 12 column width at all breakpoints

Responsive:
- Maintain full 12 column width

#### Two Column - (right)
{{#demo}}
  <div class='pe-template__double' style='background:magenta;'>
    <div class='pe-template__double--main'>
      <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
    </div>
    <div class="pe-template__double--sidebar">
      <h6 style='background:cyan;text-align:center;height:40px;'>Sidebar Area</h6>
    </div>
  </div>
{{/demo}}

#### Two Column - (left)
{{#demo}}
  <div class='pe-template__double' style='background:magenta;'>
    <div class="pe-template__double--sidebar">
      <h6 style='background:cyan;text-align:center;height:40px;'>Sidebar Area</h6>
    </div>
    <div class='pe-template__double--main'>
      <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
    </div>
  </div>
{{/demo}}

## Static Column
The static column presents a single column of fixed width which is centered in the page. At smaller breakpoints it transitions to full width fluid behavior. This column comes in two different sizes (small at 480px and large at 800px) and is handy for presenting modals or small pieces of content like sign in forms.

Dimensions:
- The large size is 800px wide at large breakpoints and larger
- The small size is 480px wide at medium breakpoints and larger

Responsive:
- Below the breakpoints mentioned above, both sizes become 10 grid columns wide and centered
- Below the small breakpoint both sizes become the full 12 column width

#### Static Column - (small)
{{#demo}}
  <div class='pe-template__static-small'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
{{/demo}}

#### Static Column - (large)
{{#demo}}
  <div class='pe-template__static-large'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
{{/demo}}


## Shared Features
Spacing:
- Directly adjoining templates have no vertical space between them
- Small Gap is 40px total
- Large Gap is 80px total

Backgrounds & Borders:
- Each template section may include a full width border (either color or image)
- Two template sections may be divided with a border that is either full page width or just 12 columns wide

#### Directly Adjoining - (Default)
{{#demo}}
  <div class='pe-template__single' style='background:magenta;'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
  <div class='pe-template__double' style='background:magenta;'>
      <div class='pe-template__double--main'>
        <h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>
      </div>
      <div class='pe-template__double--sidebar'>
        <h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>
      </div>
    </div>
  <div class='pe-template__single' style='background:magenta;'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
{{/demo}}

#### Standard Spacing
{{#demo}}
  <div class='.pe-template__small-gap'>
    <div class='pe-template__single' style='background:magenta;'>
      <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
    </div>
    <div class='pe-template__double' style='background:magenta;'>
      <div class='pe-template__double--main'>
        <h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>
      </div>
      <div class='pe-template__double--sidebar'>
        <h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>
      </div>
    </div>
    <div class='pe-template__single' style='background:magenta;'>
      <h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>
    </div>
  </div>
{{/demo}}

#### Large Spacing
{{#demo}}
<div class='.pe-template__large-gap'>
  <div class='pe-template__single' style='background:magenta;'>
    <h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>
  </div>
  <div class='pe-template__double' style='background:magenta;'>
    <div class='pe-template__double--main'>
      <h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>
    </div>
    <div class='pe-template__double--sidebar'>
      <h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>
    </div>
  </div>
  <div class='pe-template__single' style='background:magenta;'>
    <h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>
  </div>
</div>
{{/demo}}
