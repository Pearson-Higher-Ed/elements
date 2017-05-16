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
  <div class="modalOverlay"  onclick="toggleModal('modalPortalWithFooter')">
  <div class="pe-template__static-medium modalContent" tabindex="-1" role="dialog" aria-label="Modal" aria-labelledby="modalContent">
  <div id="modalHeader" class="modalHeader">
    <h2 id="modalHeaderText" class="modalHeaderText pe-title">Basic Title</h2>
  </div>
    <div id="modalBody" class="modalBody" tabindex="0">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras
    </p>
    </div>
    <div class="modalFooter">
    <button class="modalCancel pe-btn--btn_large" >Standard Button</button>
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
  <div class="modalOverlay" onclick="toggleModal('modalPortalWithoutFooter')">
  <div class="pe-template__static-medium modalContent" tabindex="-1" role="dialog" aria-label="Modal" aria-labelledby="modalContent">
  <div id="modalHeader" class="modalHeader">
    <button class="modalClose pe-icon--btn">
    <svg class="pe-icon--remove-sm-24" focusable="false" role="img" aria-hidden="false" aria-labelledby="_3d82fc60-2926-11e7-8bd0-375a85c4a530">
    <title id="_3d82fc60-2926-11e7-8bd0-375a85c4a530">close dialog</title>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#remove-sm-24"></use>
    </svg>
    </button>
    <h2 id="modalHeaderText" class="modalHeaderText pe-title">Basic Title</h2>
  </div>
    <div id="modalBody" class="modalBody" tabindex="0">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremdiam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremdiam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
    </p>
    </div>
  </div>
  </div>
</div>
{{/demo}}


### Javascript controlling the toggle:

{{#demo}}
<script type="text/javascript">

  function heightCalc() {
    var modalContent = document.getElementsByClassName('modalContent')[0];
    var modalOverlay = document.getElementsByClassName('modalOverlay')[0];
    var modalBody = document.getElementsByClassName('modalBody')[0];
    var header = document.getElementsByClassName('modalHeader')[0];
    var footer = document.getElementsByClassName('modalFooter')[0];

    var windowHeight = window.innerHeight;
    var contentHeight = modalContent.getBoundingClientRect().height;
    var paddingHeight = (windowHeight - contentHeight) / 2;
    var padding = paddingHeight > 60 ? paddingHeight : 60;
    var headerHeight = header.getBoundingClientRect().height;
    var footerHeight = footer ? footer.getBoundingClientRect().height : 0;

    // apply padding based on clientHeight for second modal on the page...
    var modalBody2 = document.getElementsByClassName('modalBody')[1];
    var modalOverlay2 = document.getElementsByClassName('modalOverlay')[1];
    var header2 = document.getElementsByClassName('modalHeader')[1];
    var modalContent2 = document.getElementsByClassName('modalContent')[1];

    var contentHeight2 = modalContent2.getBoundingClientRect().height;
    var paddingHeight2 = (windowHeight - contentHeight2) / 2;
    var padding2 = paddingHeight2 > 60 ? paddingHeight2 : 60;
    var headerHeight2 = header2.getBoundingClientRect().height;

    // calculate body max...
    modalBody.style.maxHeight = windowHeight - (headerHeight + footerHeight + 120) + "px";
    modalOverlay.style.paddingTop = padding + "px";
    modalOverlay.style.paddingBottom = padding + "px";

    modalBody2.style.maxHeight = windowHeight - (headerHeight2 + 120) + "px";
    modalOverlay2.style.paddingTop = padding2 + "px";
    modalOverlay.style.paddingBottom = padding2 + "px";

    // conditional borders on modalbody if scrollbar is present...
    modalBody.className = modalBody.clientHeight < modalBody.scrollHeight ? 'modalBody modalBody_border' : 'modalBody modalBody_border_normal';
    modalBody2.className = modalBody2.clientHeight < modalBody2.scrollHeight ? 'modalBody modalBody_border' : 'modalBody modalBody_border_normal';
  }

  function toggleModal(target) {

    var portal = document.getElementById(target);
    var footerCloseButton = document.getElementsByClassName('modalCancel')[0];
    var headerCloseButton = document.getElementsByClassName('modalClose')[1];

    // toggle modal...
    portal.style.display = portal.style.display === "none" ? "" : "none";

    //*****MODAL OPEN**************
    if (portal.style.display === "") {

      // calulate max-height for modalBody
      // and apply conditional scrollbars....
      heightCalc();

      // detect ESC KeyPress...
      document.addEventListener("keyup", function (e) {
        e.keyCode == 27 ? portal.style.display = "none" : null;
      });

      // apply focus to close button...
      headerCloseButton ? headerCloseButton.focus() : null;
      footerCloseButton ? footerCloseButton.focus() : null;

      // if open stop page underneath from scrolling...
      document.body.style = "overflow:hidden;";
    }

    //*****MODAL CLOSED**************
    portal.style.display === "none" ? document.body.style = "" : null;
  }


</script>
{{/demo}}
