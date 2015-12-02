---
layout: docs.html
title: Responsive Utilities
section: elements
---

## Responsive breakpoints and media queries

The responsive breakpoints are defined as follows:

| Breakpoint | Min width | Max width |
|------------|-----------|-----------|
| `xs`       | 0px       | 479px     |
| `sm`       | 480px     | 767px     |
| `md`       | 768px     | 1023px    |
| `lg`       | 1024px    | 1279px    |
| `xl`       | 1280px    |           |

### Advanced usage with Sass

If you are using Sass, you can use the `pe-responsive-breakpoint` mixin to generate media queries for a range of breakpoints:

```sass
// Sass
.foo {
  color: red;

  @include pe-responsive-breakpoint(sm) {
    color: blue;
  }

  @include pe-responsive-breakpoint(md to lg) {
    color: green;
  }

  @include pe-responsive-breakpoint(to xs) {
    color: purple;
  }
}

// Generated CSS
.foo {
  color: red;
}

@media (min-width: 480px) {
  .foo {
    color: blue;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .foo {
    color: green;
  }
}

@media (max-width: 479px) {
  .foo {
    color: purple;
  }
}
``` 

## Visibility

Visibility helpers are provided to make it easier to control element visibility based on the current breakpoint.

<table class="pe-table">
  <thead>
    <tr>
      <th>Selector</th>
      <th>Visible</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.pe-xs--visible</code></td>
      <td><span class="pe-xs--visible">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-sm--visible</code></td>
      <td><span class="pe-sm--visible">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-md--visible</code></td>
      <td><span class="pe-md--visible">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-lg--visible</code></td>
      <td><span class="pe-lg--visible">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-xl--visible</code></td>
      <td><span class="pe-xl--visible">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-xs--hidden</code></td>
      <td><span class="pe-xs--hidden">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-sm--hidden</code></td>
      <td><span class="pe-sm--hidden">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-md--hidden</code></td>
      <td><span class="pe-md--hidden">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-lg--hidden</code></td>
      <td><span class="pe-lg--hidden">✓</span></td>
    </tr>
    <tr>
      <td><code>.pe-xl--hidden</code></td>
      <td><span class="pe-xl--hidden">✓</span></td>
    </tr>
  </tbody>
</table>

### Visible

{{#demo}}
<div class="pe-xs--visible"><code>.pe-xs--visible</code></div>
<div class="pe-sm--visible"><code>.pe-sm--visible</code></div>
<div class="pe-md--visible"><code>.pe-md--visible</code></div>
<div class="pe-lg--visible"><code>.pe-lg--visible</code></div>
<div class="pe-xl--visible"><code>.pe-xl--visible</code></div>
{{/demo}}

### Hidden

{{#demo}}
<div class="pe-xs--hidden"><code>.pe-xs--hidden</code></div>
<div class="pe-sm--hidden"><code>.pe-sm--hidden</code></div>
<div class="pe-md--hidden"><code>.pe-md--hidden</code></div>
<div class="pe-lg--hidden"><code>.pe-lg--hidden</code></div>
<div class="pe-xl--hidden"><code>.pe-xl--hidden</code></div>
{{/demo}}

### Accessibility

#### Making content visible to screen readers

Sometimes content needs to be hidden visually but remain visible to assistive technology. Add `pe-sr-only` to an element to hide the element on the page so that it is still read by screen readers.

{{#demo}}
<p>This paragraph is visible on the screen.</p>
<p class="pe-sr-only">
  This paragraph is only visible to assistive technologies
  like screen readers.
</p>
{{/demo}}

#### Hiding content from screen readers

To hide an element from assistive technology, add the [`aria-hidden`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden) attribute.

{{#demo}}
<p aria-hidden="true">This paragraph is not visible to assistive technologies.</p>
{{/demo}}
