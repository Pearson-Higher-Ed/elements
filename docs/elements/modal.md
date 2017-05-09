---
layout: docs.html
title: Modal
section: elements
---

Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.
This is impliemented as a React Component Based on 'react-modal' in [Compounds](https://pearson-higher-ed.github.io/compounds/#/)
**This need Javascript to activate some features.

[Design and Redlines](http://pearson-higher-ed.github.io/design/c/modal/beta/)




### Modal With Footer:
{{#demo}}
  <button class="pe-btn__cta_t--btn_xlarge" onclick="toggleModal('modalPortalWithFooter')">ToggleModal With Footer</button>
{{/demo}}
{{#demo}}
<div id="modalPortalWithFooter" class="modalPortal" style="display:none;">
  <div class="modalOverlay">
  <div class="pe-template__static-medium modalContent" tabindex="-1" role="dialog" aria-label="Modal" aria-labelledby="modalContent">
    <div id="modalHeader" class="modalHeader">
      <h2 id="modalHeaderText" class="modalHeaderText pe-title">Basic Title</h2>
    </div>
      <div id="modalBody" class="modalBody" tabindex="0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.piscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.
          piscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo.
        </p>
      </div>
      <div class="modalFooter">
        <button class="modalCancel pe-btn--btn_large" onclick="toggleModal('modalPortalWithFooter')">Standard Button</button>
        <button class="modalSave pe-btn__cta_t--btn_large">Standard Button</button>
      </div>
    </div>
  </div>
</div>
{{/demo}}


### Modal Without Footer:
{{#demo}}
<button class="pe-btn__primary--btn_xlarge" onclick="toggleModal('modalPortalWithoutFooter')">ToggleModal Without Footer</button>
{{/demo}}
{{#demo}}
<div id="modalPortalWithoutFooter" class="modalPortal" style="display:none;">
  <div class="modalOverlay">
  <div class="pe-template__static-medium modalContent" tabindex="-1" role="dialog" aria-label="Modal" aria-labelledby="modalContent">
    <div id="modalHeader" class="modalHeader">
      <button class="modalClose pe-icon--btn" onclick="toggleModal('modalPortalWithoutFooter')">
      <svg class="pe-icon--remove-sm-24" focusable="false" role="img" aria-hidden="false" aria-labelledby="_3d82fc60-2926-11e7-8bd0-375a85c4a530">
        <title id="_3d82fc60-2926-11e7-8bd0-375a85c4a530">close dialog</title>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#remove-sm-24"></use>
      </svg>
      </button>
      <h2 id="modalHeaderText" class="modalHeaderText pe-title">Basic Title</h2>
    </div>
      <div id="modalBody" class="modalBody" tabindex="0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
        </p>
      </div>
    </div>
  </div>
</div>
{{/demo}}


### Javascript controlling the toggle:

{{#demo}}
<script>
 function toggleModal(target){
    const portal            = document.getElementById(target);
    const headerCloseButton = document.getElementsByClassName('modalClose')[0];
    const footerCloseButton = document.getElementsByClassName('modalCancel')[0];
    const modalBody         = document.getElementsByClassName('modalBody')[0];
    const modalBody2        = document.getElementsByClassName('modalBody')[1];
    const modalContent      = document.getElementsByClassName('modalContent')[0];
    const modalOverlay      = document.getElementsByClassName('modalOverlay')[0];
    const header            = document.getElementsByClassName('modalHeader')[0];
    const footer            = document.getElementsByClassName('modalFooter')[0];

    // apply padding based on clientHeight...
    const windowHeight  = window.innerHeight;
    const contentHeight = modalContent.offsetHeight;
    const paddingHeight = (windowHeight - contentHeight) / 2;
    const padding       = paddingHeight > 60 ? paddingHeight : 60;
    const headerHeight  = header.getBoundingClientRect().height;
    const footerHeight  = footer.getBoundingClientRect().height;

    modalBody.style     = `max-height:${windowHeight - (headerHeight + footerHeight + 120)}px`
    modalOverlay.style  = `padding-top:${padding}px; padding-bottom:${padding}px;`;

    portal.style.display = (portal.style.display === "none") ? "" : "none";

    if(portal.style.display === ""){
      // apply Focus to close button on open...
      headerCloseButton ? headerCloseButton.focus() : footerCloseButton.focus();
      document.body.style = "overflow:hidden;"
    }

    if(portal.style.display === "none"){
      document.body.style = ""
    }

 }

 // conditional borders on modalbody if scrollbar is present...

 modalBody.className  = (modalBody.clientHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';
 modalBody2.className = (modalBody2.clientHeight < modalBody2.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';

 window.onresize = (e) => {
   modalBody.className  = (modalBody.clientHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';
   modalBody2.className = (modalBody2.clientHeight < modalBody2.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';
 }


</script>
{{/demo}}
