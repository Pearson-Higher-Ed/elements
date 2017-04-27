---
layout: docs.html
title: Modal
section: elements
---

Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.  **This need Javascript to activate some features.


This is impliemented as a React Component Based on 'react-modal' in [Compounds](https://pearson-higher-ed.github.io/compounds/#/)

{{#demo}}
  <button class="pe-btn__cta" onclick="toggleModal()">ToggleModal</button>
{{/demo}}

{{#demo}}
<div class="modalPortal">
  <div class="modalOverlay">
  <div class="ReactModal__Content pe-template__static-medium" tabindex="-1" role="dialog" aria-label="Modal" aria-labelledby="modalContent">
    <div id="modalContent" class="modalContent">
      <div id="modalHeader" class="modalHeader">
        <button class="modalClose pe-icon--btn" onclick="toggleModal()">
        <svg class="pe-icon--remove-sm-24" focusable="false" role="img" aria-hidden="false" aria-labelledby="_3d82fc60-2926-11e7-8bd0-375a85c4a530">
          <title id="_3d82fc60-2926-11e7-8bd0-375a85c4a530">close dialog</title>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#remove-sm-24"></use>
        </svg>
        </button>
        <h2 id="modalHeaderText" class="modalHeaderText pe-title">Basic Title</h2>
      </div>
        <div class="modalBody">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum. Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi. Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum quis ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus.</p>
        </div>
        <div class="modalFooter">
          <button class="modalCancel pe-btn--btn_large"  onclick="toggleModal()">Standard Button</button>
          <button class="modalSave pe-btn__cta_t--btn_large">Standard Button</button>
        </div>
      </div>
    </div>
  </div>
</div>
{{/demo}}



- Javascript controlling the toggle...

{{#demo}}
<script>
 function toggleModal(){
   const portal            = document.getElementsByClassName('modalPortal')[0];
   const headerCloseButton = document.getElementsByClassName('modalClose')[0];
   const footerCloseButton = document.getElementsByClassName('modalCancel')[0];

   portal.style.display = (portal.style.display === "none") ? "" : "none";

   if(portal.style.display === "none"){

      // apply Focus to close button on open...
      headerCloseButton ? headerCloseButton.focus() : footerCloseButton.focus();

      // set aria values...
      modalContent.setAttribute('aria-labelledby', 'modalContent');

    }
    
 }

 // conditional borders on modalbody if scrollbar is present...
 const modalBody     = document.getElementsByClassName('modalBody')[0];
 modalBody.className = (modalBody.clientHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';

 window.onresize = (e) => {
   modalBody.className = (modalBody.clientHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody';
 }
</script>
{{/demo}}
