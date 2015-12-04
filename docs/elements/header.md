---
layout: docs.html
title: Header
section: elements
---

The header is the primary navigational element in a Pearson web property.

{{#demo}}
<header class="pe-header">
  <section class="pe-header__section">
    <a href="#" class="pe-header__brand">Brand</a>
  </section>
  <section class="pe-header__section pe-header__section--right">
    <nav class="pe-header__nav">
      <ul class="pe-header__nav-items">
        <li class="pe-header__nav-item">
          <a href="#">Item 1</a>
        </li>
        <li class="pe-header__nav-item">
          <a href="#">Item 2</a>
        </li>
      </ul>
    </nav>
  </section>
</header>
{{/demo}}

## Fixed

To fix the header to the top of the page, add `pe-header--fixed` to the root element:

```html
<header class="pe-header pe-header--fixed">
  …
</header>
```

## Nav items

### Active

Add `pe-header__nav-item--active` to select the active nav item.

{{#demo}}
<header class="pe-header">
  <section class="pe-header__section pe-header__section--right">
    <nav class="pe-header__nav">
      <ul class="pe-header__nav-items">
        <li class="pe-header__nav-item pe-header__nav-item--active">
          <a href="#">Active</a>
        </li>
        <li class="pe-header__nav-item">
          <a href="#">Inactive</a>
        </li>
      </ul>
    </nav>
  </section>
</header>
{{/demo}}

## Logo

For applications that require the Pearson logo, use a `<span>` element with `pe-header__logo` and `pe-header__logo--pearson`.

{{#demo}}
<header class="pe-header">
  <section class="pe-header__section">
    <a href="#" aria-label="Return to home">
      <span class="pe-header__logo pe-header__logo--pearson"></span>
    </a>
  </section>
</header>
{{/demo}}

<aside>
  <h1 class="pe-title">Accessibility: Screen readers</h1>
  <p>When the logo is a link, add the <code>aria-label</code> attribute. The label text conveys the intent of the link and will be read by screen readers.
</aside>

## Inverse

Add `pe-header--inverse` to the root element to invert the header.

{{#demo}}
<header class="pe-header pe-header--inverse">
  <section class="pe-header__section">
    <a href="#" aria-label="Return to home">
      <span class="pe-header__logo pe-header__logo--pearson"></span>
    </a>
  </section>
  <section class="pe-header__section pe-header__section--right">
    <nav class="pe-header__nav">
      <ul class="pe-header__nav-items">
        <li class="pe-header__nav-item pe-header__nav-item--active">
          <a href="#">Active</a>
        </li>
        <li class="pe-header__nav-item">
          <a href="#">Inactive</a>
        </li>
      </ul>
    </nav>
  </section>
</header>
{{/demo}}
