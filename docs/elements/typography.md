---
layout: docs.html
title: Typography
section: elements
permalink: /elements/typography/
---
## Headings

Content headings, used to delineate the outline of a page. If there is a need to have a subheading, use a `header` element, with a `p.subtitle` to hold the subtitle, as illustrated below.

{{#demo}}
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
{{/demo}}

### Subtitles

{{#demo}}
<header>
	<h1>Title Element 1</h1>
	<p class="subtitle">Subtitle, sized based on the preceding element</p>
</header>
<header>
	<h2>Title Element 2</h2>
	<p class="subtitle">Subtitle, sized based on the preceding element</p>
</header>
<header>
	<h3>Title Element 3</h3>
	<p class="subtitle">Subtitle, sized based on the preceding element</p>
</header>
<header>
	<h4>Title Element 4</h4>
	<p class="subtitle">Subtitle, sized based on the preceding element</p>
</header>
<header>
	<h5>Title Element 5</h5>
	<p class="subtitle">Subtitle, sized based on the preceding element</p>
</header>
{{/demo}}

## Paragraphs

Paragraphs should naturally have the default body copy styles, but if they inherit other styles, the `pe-paragraph` class references them as well. The final paragraph of a block of content should have no bottom margin, which can be set using the `pe-paragraph--last` class.

This style also represents the basic body copy styles for a document.

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

<p class="pe-paragraph--last">
  Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id
  elit non mi porta gravida at eget metus. Duis mollis, est non commodo
  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
</p>
{{/demo}}

### Small copy style

{{#demo}}
<p class="pe-copy pe-copy--small">
  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
  id dolor id nibh ultricies vehicula.
</p>

<p class="pe-copy pe-copy--small pe-paragraph--last">
  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
  id dolor id nibh ultricies vehicula.
</p>
{{/demo}}

### Large copy style

{{#demo}}
<p class="pe-copy pe-copy--large">
  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
  id dolor id nibh ultricies vehicula.
</p>
{{/demo}}

### Secondary color copy style

{{#demo}}
<p class="pe-copy pe-copy--secondary">
  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
  id dolor id nibh ultricies vehicula.
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

## UI Page Headings

Page-level UI headings. Basic and smaller sizing for page level titles is available.

{{#demo}}
<h1 class="pe-page-title">Page Level Heading</h1>
<h1 class="pe-page-title pe-page-title--secondary">Secondary Color Page Level Heading</h1>
{{/demo}}

{{#demo}}
<h1 class="pe-page-title pe-page-title--small">Small Page Level Heading</h1>
<h1 class="pe-page-title pe-page-title--small pe-page-title--secondary">Secondary Color Small Page Level Heading</h1>
{{/demo}}

## UI Section Headings

Note that UI Section Headings are going to be "heading" content, so most if not all of the time, they will be heading elements. Use the `pe-title` class for this UI Section Headings style.

{{#demo}}
<h3 class="pe-title">Default UI Section Headings</h3>
<h3 class="pe-title"><b>Bold UI Section Headings<b/></h3>
<h3 class="pe-title pe-title--secondary">Secondary Color Default UI Section Headings</h3>
{{/demo}}

### Sizes

Titles can be larger or smaller for additional emphasis. Note: pe-title--extra-large has been deprecated in v1 Elements.

{{#demo}}
<h3 class="pe-title pe-title--small">Small UI Section Headings</h3>
<h3 class="pe-title pe-title--small"><b>Small and Bold UI Section Headings</b></h3>
<h3 class="pe-title pe-title--small pe-title--secondary">Secondary Color Small UI Section Headings</h3>
<h3 class="pe-title pe-title--large">Large UI Section Headings</h3>
<h3 class="pe-title pe-title--large"><b>Large and bold UI Section Headings</b></h3>
<h3 class="pe-title pe-title--large pe-title--secondary">Secondary Color Large UI Section Headings</h3>
{{/demo}}

## UI Text

Note these are not related to form element labels (use the HTML `label` element for those). This was remapped from a "label" in v0 to a "UI Text" in v1. The markup remains the same as in v0.

{{#demo}}
<div class="pe-label">Default UI Text</div>
<div class="pe-label pe-label--secondary">Secondary UI Text</div>
<div class="pe-label pe-label--bold">Bold UI Text</div>
{{/demo}}

### Sizes

UI Text can be smaller or larger than the default.

{{#demo}}
<div class="pe-label pe-label--small">Small UI Text</div>
<div class="pe-label pe-label--small pe-label--secondary">Small UI Text secondary color</div>
<div class="pe-label pe-label--large">Large UI Text</div>
<div class="pe-label pe-label--large pe-label--secondary">Large UI Text secondary color</div>
{{/demo}}

### Inverse

When UI Text is used on a dark background, use `pe-label--inverse` to make it visible.

{{#demo}}
<div style="background-color: #000">
  <div class="pe-label pe-label--inverse">Inverse UI Text</div>
  <div class="pe-label pe-label--secondary pe-label--inverse">Inverse secondary UI Text</div>
</div>
{{/demo}}

## Inline text

Use the `<abbr>`, `<ins>`, `<del>`, `<s>`, `<mark>`, `<em>`, `<strong>`, `<sub>`, `<sup>` and `<q>` elements to indicate contextual changes or differences within a string of text.

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

### `<sub>`

Use the `<sub>` element to lower characters below the font baseline. This is commonly done in mathematical expressions and chemical formulas.

{{#demo}}
<p>The main ingredient is H<sub>2</sub>O.</p>
{{/demo}}

### `<sup>`

Use the `<sup>` element to raise characters above the font baseline. This is not only used exponents, but also for ordinals, the trademark symbol, and atomic charges.

{{#demo}}
<p>On December 5<sup>th</sup>, the Dutch celebrate Saint Nicholas' Eve.</p>
{{/demo}}


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
The <code class="pe-code-inline">&lt;section&gt;</code> HTML element represents a section of a document.
{{/demo}}

### Block

A multi-line code block should be wrapped with `<pre></pre>` elements.

{{#demo}}
<pre class="pe-code"><code>// This is a code example
function greet(greeting) {
  console.log(greeting);
}
greet('hello, world');</code></pre>
{{/demo}}

### User Input

Use the `<kbd>` element to represent user input.

{{#demo}}
<p>
  To switch directories, type <kbd class="pe-kbd">cd</kbd> followed by the name of the directory.<br/>
  To edit settings, press <kbd class="pe-kbd">ctrl</kbd> + <kbd class="pe-kbd">,</kbd>
</p>
{{/demo}}

## Lists

### Unstyled lists

Use `pe-list--unstyled` for plain lists.

{{#demo}}
<ul class="pe-list pe-list--unstyled">
  <li>One</li>
  <li>Two</li>
  <li>Three
	<ul class="pe-list pe-list--unstyled">
	  <li>Three-One</li>
	  <li>Three-Two</li>
	  <li>Three-Three</li>
	</ul>
  </li>
</ul>
{{/demo}}

### Nested ordered lists

When nested, `pe-styled-lists--ordered` should be added to each `<ol>` element.

{{#demo}}
<p>
Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
</p>
<ol class="pe-list pe-styled-lists--ordered">
  <li>List item one. How are you doing today? Quite fine, thank you.</li>
  <li>Item two.</li>
  <li>Item three.
    <ol>
      <li>child item one</li>
      <li>child item two
        <ol>
          <li>grand child item one</li>
          <li>grand child item two</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
<p>
And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
</p>
{{/demo}}

### Nested unordered lists

When nested, `pe-styled-lists--unordered` should be added to each `<ul>` element.

{{#demo}}
<p>
And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
</p>
<ul class="pe-list pe-styled-lists--unordered">
  <li>List item one. How are you doing today? Quite fine, thank you.</li>
  <li>Item two.</li>
  <li>Item three.
    <ul>
      <li>child item one</li>
      <li>child item two
        <ul>
          <li>grand child item one</li>
          <li>grand child item two</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<p>
And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
</p>
{{/demo}}

### Nested ordered lists following a heading

When nested, `pe-styled-lists-heading--ordered` should be added to each `<ol>` element for lists directly under a heading.

{{#demo}}
<h2>Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?</h2>
<ol class="pe-list pe-styled-lists-heading--ordered">
  <li>List item one. How are you doing today? Quite fine, thank you.</li>
  <li>Item two.</li>
  <li>Item three.
    <ol>
      <li>child item one</li>
      <li>child item two
        <ol>
          <li>grand child item one</li>
          <li>grand child item two</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
{{/demo}}

### Nested unordered lists following a heading

When nested, `pe-styled-lists-heading--unordered` should be added to each `<ul>` element for lists directly under a heading.

{{#demo}}
<h2>Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?</h2>
<ul class="pe-list pe-styled-lists-heading--unordered">
  <li>List item one. How are you doing today? Quite fine, thank you.</li>
  <li>Item two.</li>
  <li>Item three.
    <ul>
      <li>child item one</li>
      <li>child item two
        <ul>
          <li>grand child item one</li>
          <li>grand child item two</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
{{/demo}}

## Links

Use a link to represent a user navigational element. For performing an action on the page, such as closing a dialog, use a `<button>` element instead.

### Notes on anchors
HTML anchor elements require an `href` attribute. Without it, anchors are not keyboard-focusable. Link text should be clear and actionable; try to avoid text like "click here." Finally, be aware that anchors do not have a disabled state, and setting the disabled attribute on it does nothing.

{{#demo}}
<p>For more information, <a href="path/to/account">view your account page</a>.</p>
{{/demo}}
