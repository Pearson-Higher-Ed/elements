---
layout: docs.html
title: Grid
section: elements
---

A low level framework for positioning elements on the page.

## Equal Columns
{{#demo}}
<div class="pe-container">
  <div class='pe-row'>
    <div class="pe-col-xs-1"><p style="background:cyan">one</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">two</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">three</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">four</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">five</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">six</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">seven</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">eight</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">nine</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">ten</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">eleven</p></div>
    <div class="pe-col-xs-1"><p style="background:cyan">twelve</p></div>
  </div>
</div>
{{/demo}}

## Span mulitple Columns
{{#demo}}
<div class="pe-container">
  <div class='pe-row'>
    <div class="pe-col-xs-4"><p style="background:cyan">one</p></div>
    <div class="pe-col-xs-4"><p style="background:cyan">two</p></div>
    <div class="pe-col-xs-4"><p style="background:cyan">three</p></div>
  </div>
</div>
{{/demo}}

## Span Columns
{{#demo}}
<div class="pe-container">
  <div class='pe-row'>
    <div class="pe-col-xs-1"><p style="background:cyan">one</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-2"><p style="background:cyan">two</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-3"><p style="background:cyan">three</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-4"><p style="background:cyan">four</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-5"><p style="background:cyan">five</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-6"><p style="background:cyan">six</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-7"><p style="background:cyan">seven</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-8"><p style="background:cyan">eight</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-9"><p style="background:cyan">nine</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-10"><p style="background:cyan">ten</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-11"><p style="background:cyan">eleven</p></div>
  </div>
  <div class='pe-row'>
    <div class="pe-col-xs-12"><p style="background:cyan">twelve</p></div>
  </div>
</div>
{{/demo}}

## Feature List
- Adapts to standard breakpoints
- Consistent fluid behavior
- Handy 12 column grid that can support many layouts
- Integration with Templates component for easy usage

## Usage Guidelines
You should generally not use this component directly, prefer instead to use Templates and Presentation Strategies in your designs.

## Grid Structure
The grid consists of four key parts: the Container, Container Margins, Columns, and Gutters.

All columns reside within the Container, which is located at the root level of a page. Depending on the breakpoint, the container will have Container Margins of various sizes. The container also has a maximum width property, beyond which only the container margins grow in size.

The container is divided into 12 proportional Columns which contain actual content. These are separated by Gutters of a fixed size (which varies based on the breakpoint again).

See the redlines for the exact dimensions of each feature at each breakpoint.


## Rediline Details
Container:
Maximum width of 1140px
Always horizontally centered

Container Margins:
≥ 40px at Large and Extra Large breakpoints
20px at Small and Medium breakpoints
10px at Extra Small breakpoints

Gutters:
40px at Medium and larger breakpoints
20px at Small breakpoints
10px at Extra Small breakpoints

Columns:
Equal widths, size determined by remaining space after accounting for the container width and gutter size
