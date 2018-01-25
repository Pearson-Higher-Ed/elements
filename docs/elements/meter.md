---
layout: docs.html
title: Meter
section: elements
---

The meter element is a gauge that is a static representation of the progress of an item. It is meant to have no dynamic component and therefore should be used to render items that are static on a single page. For all items that need to be updated via javascript there will be a Progress Bar available in [Elements-SDK](https://github.com/Pearson-Higher-Ed/elements-sdk).

The meter element should be rendered as a div with the class 'pe-progressbar', and the appropriate "progressbar" role with aria-roledescription="meter". There is also an optional value text to describe the value in aria.

{{#demo}}
<p class="pe-progressbar-label">80% Complete</p>
<div class="pe-progressbar" role="progressbar" aria-roledescription="meter" aria-readonly="true" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" aria-valuetext="almost done">
	<div class="pe-progressbar-inner" style="width:80%;"></div>
</div>
{{/demo}}


