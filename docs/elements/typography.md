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

## Leads

A lead paragraph or sentence introduces and guides the user into the primary content.

{{#demo}}
<p class="pe-lead">It was the best of times, it was the worst of times&hellip;</p>
<p>
  &hellip;it was the age of wisdom, it was the age of foolishness, it was
  the epoch of belief, it was the epoch of incredulity, it was the season
  of Light, it was the season of Darkness, it was the spring of hope, it
  was the winter of despair, we had everything before us, we had nothing
  before us, we were all going direct to Heaven, we were all going direct
  the other way&mdash;in short, the period was so far like the present period,
  that some of its noisiest authorities insisted on its being received,
  for good or for evil, in the superlative degree of comparison only.
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

## Inline text

Use the `<abbr>`, `<ins>`, `<del>`, `<s>`, `<mark>`, `<em>`, `<strong>`, and `<q>` elements to indicate contextual changes or differences within a string of text.

### `<abbr>`

The `<abbr>` element represents an abbreviation.

{{#demo}}
<p>
  Basic elements are the backbone of any
  <abbr title="HyperText Markup Language">HTML</abbr> document.
</p>
{{/demo}}

### `<ins>`, `<del>`

The `<ins>` and `<del>` elements represent text that has been inserted and deleted, respectively.

{{#demo}}
<p>It was the best of times, it was the <del>blurst</del><ins>worst</ins> of times&hellip;</p>
{{/demo}}

### `<s>`

The `<s>` (strikethrough) element should be used to indicate text that is no longer relevant or accurate.

{{#demo}}
<p>
  Support is provided for the latest versions of Chrome, Firefox,
  and Internet Explorer<s>, and IE versions 7 and 8</s>.
</p>
{{/demo}}

### `<mark>`

Use the `<mark>` element to highlight text.

{{#demo}}
<p>The latest report shows that <mark>profits have increased by 15%</mark> over the previous year.</p>
{{/demo}}

### `<em>`

Use the `<em>` element to emphasize a word, phrase, or other part of the text.

{{#demo}}
<p>I think carrots are ok, but I <em>love</em> beets.</p>
{{/demo}}

### `<strong>`

  Use the `<strong>` element when you want to give text strong importance with respect to other text in the same context.

{{#demo}}
Use <kbd>rm -rf</kbd> to recursively remove files. <strong>Be careful when using
<code>-f</code> because it will remove files without prompting for confirmation.</strong>
{{/demo}}

<aside>
  <h1 class="pe-title">The difference between <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code></h1>
  <p>The <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code> elements are similar. However, bold is a physical state that represents both the content and its presentation, while strong is a logical state that separates the content from its presentation&mdash;it indicates that, in the current context, the text is more important than the surrounding text.</p>
</aside>

### `<q>`

The `<q>` element should be used for inline quotations.

{{#demo}}
<p>
  <q cite="https://en.wikipedia.org/wiki/Lost_in_Space#Catchphrases">That does not compute</q>
  is one of several of the Robot's catchphrases used in the television show <i>Lost in Space</i>.
</p>
{{/demo}}

## Code

### Inline

Use the `<code>` element for inline code examples.

{{#demo}}
The <code>&lt;section&gt;</code> HTML element represents a section of a document.
{{/demo}}

### Block

A multi-line code block should be wrapped with `<pre></pre>` elements.

{{#demo}}
<pre><code>
// This is a code example

function greet(greeting) {
  console.log(greeting);
}

greet('hello, world');
</code></pre>
{{/demo}}

### User Input

Use the `<kbd>` element to represent user input.

{{#demo}}
<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
  To edit settings, press <kbd>ctrl</kbd> + <kbd>,</kbd>
</p>
{{/demo}}

## Lists

### Unstyled lists

Use `pe-list--unstyled` for plain lists.

{{#demo}}
<ul class="pe-list pe-list--unstyled">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
{{/demo}}

### Nested lists

When nested, `pe-list--unstyled` should be added to each `<ul>` element.

{{#demo}}
<ul class="pe-list pe-list--unstyled">
  <li>1</li>
  <li>
    <ul class="pe-list pe-list--styled">
      <li>1.a</li>
      <li>1.b</li>
    </ul>
  </li>
  <li>2</li>
  <li>3</li>
</ul>
{{/demo}}

### Inline lists

Use `pe-list--inline` to change the display to `inline-block`.

{{#demo}}
<ul class="pe-list pe-list--inline">
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ul>
{{/demo}}
