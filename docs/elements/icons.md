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
  <li><i class="pe-icon--chevron-left"></i> chevron-left</li>
  <li><i class="pe-icon--chevron-right"></i> chevron-right</li>
  <li><i class="pe-icon--cog"></i> cog</li>
  <li><i class="pe-icon--envelope"></i> envelope</li>
  <li><i class="pe-icon--plus-circle"></i> plus-circle</li>
  <li><i class="pe-icon--search"></i> search</li>
  <li><i class="pe-icon--thumb-tack"></i> thumb-tack</li>
  <li><i class="pe-icon--times"></i> times</li>
  <li><i class="pe-icon--times-circle"></i> times-circle</li>
  <li><i class="pe-icon--trash-o"></i> trash-o</li>
  <li><i class="pe-icon--users"></i> users</li>
  <li><i class="pe-icon--user"></i> user</li>
  <li><i class="pe-icon--info-circle"></i> info-circle</li>
  <li><i class="pe-icon--file-o"></i> file-o</li>
  <li><i class="pe-icon--calendar"></i> calendar</li>
  <li><i class="pe-icon--square-o"></i> square</li>
  <li><i class="pe-icon--check-square-o"></i> check square</li>
  <li><i class="pe-icon--ban"></i> ban</li>
  <li><i class="pe-icon--camera"></i> camera</li>
  <li><i class="pe-icon--clock-o"></i> clock-o</li>
  <li><i class="pe-icon--exclamation-circle"></i> exclamation-circle</li>
  <li><i class="pe-icon--bell"></i> bell</li>
</ul>

## Adding new icons

In `/misc/icomoon` there is a file `how-to-add-an-icon.md` and a shell script called `icomover.sh`. Follow the How-to-add instructions and don't forget to add the new icon to this file (as well as the CSS necessary).

## Using CSS to make the icon appear

Add `pe-icon--{name}` to the icon element, where `{name}` is the icon name from the above list.

{{#demo}}
<span class="pe-icon--check"></span>
{{/demo}}

<aside>
  <h3 class="pe-title">Do not combine with other elements</h3>
  <p>Icons should not be combined with other elements; instead, use a nested <code>&lt;span&gt;</code>. Icon elements should not have children.</p>
</aside>

<aside>
  <h3 class="pe-title">Change the path to the icon font</h3>
  <p>The default directory for the icon files is <code>../fonts/</code>. You may change the location and/or names of the files by overriding <code>$pe-icons-path</code> and <code>$pe-icons-name</code>, or by replacing the paths in the generated CSS files.</p>
</aside>


## Making icons accessible

The major accessibility problem with icons is that users don't tend to know what they are or what they mean unless they are associated with a textual label. This particularly aids users with cognitive disabilities. This is especially important if the icons are the primary "text" of an interactive element (e.g. links, buttons).

### Screen readers

Screen readers *may* read CSS-generated content, such as the unicode characters that are used to render an icon. To prevent screen readers from reading the content, add `aria-hidden="true"` to the icon element:

{{#demo}}
<span class="pe-icon--times" aria-hidden="true"></span>
{{/demo}}

The meanings of few icons are intuitively known by most users, however there are cases where the context plus the icon are generally enough (if shown by user testing), where the visual design may not allow text. An example would be a dialog-close button with an "x" representing "close". Because what is visually obvious is usually not available to screen reader users, you can add an element that is visible only to screen readers using `pe-sr-only`:

{{#demo}}
<button class="pe-btn">
  <span class="pe-icon--times" aria-hidden="true"></span>
  <span class="pe-sr-only">close</span>
</button>
{{/demo}}

It's important to note that speech users (who interact with the page using voice commands) will not have access to the names of interactive elements whose text is visually hidden and only made available to screen readers. There are only a few icons where a user has a good chance of guessing the interactive element's name, such as "close" and "search", so it's important to show visible names of interactive elements as much as possible.

