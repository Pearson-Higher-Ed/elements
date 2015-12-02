---
layout: docs.html
title: Typography
section: elements
permalink: /elements/typography/
---
## Headings

{{#demo}}
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
{{/demo}}

## Paragraphs

{{#demo}}
<p>
  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque 
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
  id dolor id nibh ultricies vehicula.
</p>

<p>
  Cogito sociis natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis
  mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
  odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
</p>

<p>
  Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id
  elit non mi porta gravida at eget metus. Duis mollis, est non commodo
  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
</p>
{{/demo}}

## Titles

{{#demo}}
<div class="pe-title">Default title</div>
{{/demo}}

### Sizes

Titles can be larger for additional emphasis.

{{#demo}}
<div class="pe-title pe-title--large">Large title</div>
<div class="pe-title pe-title--extra-large">Extra large title</div>
{{/demo}}

## Labels

{{#demo}}
<div class="pe-label">Default label</div>
<div class="pe-label pe-label--secondary">Secondary label</div>
<div class="pe-label pe-label--bold">Bold label</div>
{{/demo}}

### Sizes

Labels can be smaller or larger than the default.

{{#demo}}
<div class="pe-label pe-label--small">Small label</div>
<div class="pe-label pe-label--large">Large label</div>
{{/demo}}

### Inverse

When a label is used on a dark background, use `pe-label--inverse` to make it visible.

{{#demo}}
<div style="background-color: #000">
  <div class="pe-label pe-label--inverse">Inverse label</div>
  <div class="pe-label pe-label--secondary pe-label--inverse">Inverse secondary label</div>
</div>
{{/demo}}

## Code

### Inline

Use the `<code>` element for inline code examples.

{{#demo}}
The <code>&lt;section&gt;</code> HTML element represents a section of a document.
{{/demo}}

### User Input

Use the `<kdb>` element to represent user input.

{{#demo}}
<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
  To edit settings, press <kbd>ctrl</kbd> + <kbd>,</kbd>
</p>
{{/demo}}

### Blocks

Multi-line code blocks should be wrapped with `<pre></pre>` elements.

{{#demo}}
<pre><code>
// This is a code example

function greet(greeting) {
  console.log(greeting);
}

greet('hello, world');
</code></pre>
{{/demo}}
