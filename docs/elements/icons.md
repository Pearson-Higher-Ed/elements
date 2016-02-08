---
layout: docs.html
title: Icons
section: elements
---

The available icons are a subset of [Font Awesome by Dave Gandy](http://fontawesome.io) that includes the following:

<ul class="d-icon-list">
  <li><i class="pe-icon--check"></i> check</li>
  <li><i class="pe-icon--chevron-down"></i> chevron-down</li>
  <li><i class="pe-icon--chevron-up"></i> chevron-up</li>
  <li><i class="pe-icon--cog"></i> cog</li>
  <li><i class="pe-icon--envelope"></i> envelope</li>
  <li><i class="pe-icon--plus-circle"></i> plus-circle</li>
  <li><i class="pe-icon--search"></i> search</li>
  <li><i class="pe-icon--thumb-tack"></i> thumb-tack</li>
  <li><i class="pe-icon--times"></i> times</li>
  <li><i class="pe-icon--times-circle"></i> times-circle</li>
  <li><i class="pe-icon--trash-o"></i> trash-o</li>
  <li><i class="pe-icon--users"></i> users</li>
  <li><i class="pe-icon--info"></i> info</li>
  <li><i class="pe-icon--info-circle"></i> info-circle</li>
  <li><i class="pe-icon--user"></i> user<li>
  <li><i class="pe-icon--file-o"></i> file-o</li>
  <li><i class="pe-icon--file"></i> file</li>
</ul>

Add `pe-icon--{name}` to the icon element, where `{name}` is the icon name from the above list.

{{#demo}}
<span class="pe-icon--check"></span>
{{/demo}}

<aside>
  <h1 class="pe-title">Do not combine with other elements</h1>
  <p>Icons should not be combined with other elements; instead, use a nested <code>&lt;span&gt;</code>. Icon elements should not have children.</p>
</aside>

<aside>
  <h1 class="pe-title">Change the path to the icon font</h1>
  <p>The default directory for the icon files is <code>../fonts/</code>. You may change the location and/or names of the files by overriding <code>$pe-icons-path</code> and <code>$pe-icons-name</code>, or by replacing the paths in the generated CSS files.</p>
</aside>

## Making icons accessible

Screen readers *may* read CSS-generated content, such as the unicode characters that are used to render an icon. To prevent screen readers from reading the content, add `aria-hidden="true"` to the icon element:

{{#demo}}
<span class="pe-icon--times" aria-hidden="true"></span>
{{/demo}}

Icons that are not just for presentation should provide an alternative element that is visible to screen readers. You can add an element that is visible only to screen readers using `pe-sr-only`:

{{#demo}}
<div>
  <span class="pe-icon--times" aria-hidden="true"></span>
  <span class="pe-sr-only">close</span>
</div>
{{/demo}}
