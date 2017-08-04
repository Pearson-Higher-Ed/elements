---
layout: docs.html
title: Tables
section: elements
---

Use tables to display tabular data. For simply laying things out in a visual grid form, use CSS instead (and ensure any focusables follow visual tab order if you do).

Tables should have either a heading above them, or a caption element, giving them their name/basic description.

## Basic Tables

All tables will have:
* some kind of name such as a caption or heading (may not always be visible)
* a &lt;thead&gt; element with table headers
* column and (possible) row headers are &lt;th&gt; elements and have a <code>scope</code> attribute

{{#demo}}
<table class="pe-table">
  <caption>Presidential Superheroes</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Superpower(s)</th>
      <th scope="col">Battle Cry</th>
      <th scope="col">Team</th>
      <th scope="col">Nemesis</th>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <th scope="row">Franklin Pierce</th>
      <td>Dashing Good Looks, Waffler Extraordinaire</td>
      <td>"I shall Pierce my enemies!"</td>
      <td>Alcoholics Anonymous</td>
      <td>The Grim Reaper, Bum Knee</td>
    </tr>
    <tr>
      <th scope="row">Ulysses S Grant</th>
      <td>Drinking, Fighting</td>
      <td>"Unconditional Surrender!"</td>
      <td>Alcoholics Anonymous</td>
      <td>Alcohol</td>
    </tr>
    <tr>
      <th scope="row">Theodore Roosevelt</th>
      <td>Will of Steel, Friend to All the Animals</td>
      <td>"Bully!"</td>
      <td>Rough Riders</td>
      <td>Corporations, Trusts, Monopolies</td>
    </tr>
    <tr>
      <th scope="row">William Howard Taft</th>
      <td>Immense mass</td>
      <td>"TAFT SMASH!"</td>
      <td>Skull and Bones</td>
      <td>Bathtubs</td>
    </tr>
  </tbody>
</table>
{{/demo}}

## Alignments

You can change the alignments of the data. Here the caption is at the bottom of the table and aligned left. The Team column is centered. The value column is right-aligned.

{{#demo}}
<table class="pe-table pe-caption--bottom">
  <caption class="pe-table__left">Supervillains of Propaganda</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Country</th>
      <th scope="col" class="pe-table__center">Team</th>
      <th scope="col" class="pe-table__right">Net Worth (in bazillions)</th>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <th scope="row">(Keith) Rupert Murdoch</th>
      <td>Australia</td>
      <td class="pe-table__center">Foxxxy Foxes</td>
      <td class="pe-table__right">13</td>
    </tr>
    <tr>
      <th scope="row">William Randall Hearst</th>
      <td>United States</td>
      <td class="pe-table__center">Yellow Journalists </td>
      <td class="pe-table__right">30</td>
    </tr>
    <tr>
      <th scope="row">Mark Zuckerberg</th>
      <td>United States</td>
      <td class="pe-table__center">SpyFace</td>
      <td class="pe-table__right">62</td>
    </tr>
    <tr>
      <th scope="row">Mao Zedong</th>
      <td>China</td>
      <td class="pe-table__center">LAMAO</td>
      <td class="pe-table__right">0</td>
    </tr>
  </tbody>
</table>
{{/demo}}

## Selectable rows

Selectable-row tables require Javascript for full styling, so this example has a script to show the styles, however this script is not included in Elements.

Note the first table header is not visible (the top left cell looks empty), however in accordance with accessibility, this cell has text naming the column.
The checkbox is named using <code>aria-labelledby</code> pointing to both the hidden column name and the name of the row item (using <code>id</code>s). For letting the checkbox remain clickable, there is still a label element, however the accessible name from the label is overridden by the aria-labellebdbys.

{{#demo}}
<table class="pe-table pe-table--selectable">
  <caption class="pe-table__left">The Best Comics (sorry no Smurfs)</caption>
  <thead>
    <tr>
      <th scope="col" id="comic_select" class="pe-sr-only">Select</th>
      <th scope="col">Comic</th>
      <th scope="col">Main characters</th>
      <th scope="col">Country of Origin</th>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select sel_Spirou">
          <label for="c1"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_Spirou">Spirou</td>
      <td><p>Spirou, Fantasio</p>
          <p>(Robbedoes, Kwabbernoot)</p>
      </td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c2" aria-labelledby="comic_select sel_sew">
          <label for="c2"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_sew">Suske en Wiske</td>
      <td><p>Suske, Wiske, Tante Sidonia, Krimson</p>
          <p>(Bob, Bobette, Tante Sido, Crimson)</p>
      </td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c3" aria-labelledby="comic_select sel_ll">
          <label for="c3"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_ll">Lucky Luke</td>
      <td>Lucky Luke, Jolly Jumper, Rantanplan</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c4" aria-labelledby="comic_select sel_ch" checked>
          <label for="c4"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_ch">Calvin and Hobbes</td>
      <td><p>Calvin, Hobbes, Suzy</p>
          <p>(Casper, Hobbes, Inge)</p>
      </td>
      <td>United States</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c5" aria-labelledby="comic_select sel_ax">
          <label for="c5"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_ax">Asterix</td>
      <td>Asterix, Obelix, Panoramix</td>
      <td>France</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c6" aria-labelledby="comic_select sel_guus">
          <label for="c6"> </label>
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td id="sel_guus">Gaston</td>
      <td><p>Gaston Lagaffe, Fantasio, Jules-de-chez-Smith-en-face</p>
          <p>(Guust Flater, Kwabbernoot, Joost-van-Smith-aan-de-overkant)</p>
      </td>
      <td>Belgium</td>
    </tr>
  </tbody>
</table>
{{/demo}}

<script>
  +function() {
    var tables=document.querySelectorAll('.pe-table--selectable');

    for (i=0,l=tables.length;i<l;i++) {
      var table=tables[i],
          trs=[].slice.call(table.getElementsByTagName('TR'));

      trs.forEach(function(tr) {
        var thisTR=tr,
            input=tr.getElementsByTagName('INPUT')[0];
        if (input && input.type=='checkbox') {
          if (input.checked) {
            tr.classList.add('selected');
          }
          tr.addEventListener('click', function(e) {
            var thisTR=this; 
            if (e.target.nodeName!=='INPUT' && e.target.nodeName!=='LABEL') {
              input.click();
            }
            selectToggle(thisTR,input);
          }, false);
        }
      });
    }
  }();
  
  function selectToggle(tr, input) {
    if (input.checked) {
      tr.classList.add('selected');
    }
    else {
      tr.classList.remove('selected');
    }
  }
  
</script>

## Sortable columns

Tables with sortable columns will have controls for sorting in the table headers, represented by the sorting icons. These tables also require JavaScript to do anything. No JavaScript is present on this page for demonstration. 

{{#demo}}
<h3 class="pe-table-caption">Sort Supervillains From Best To Worst</h3>
<table class="pe-table pe-table--active-headers">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        <span>Name</span>
        <button type="button" class="pe-icon--btn">
          <svg role="img"
               focusable="false"
               aria-labelledby="s1"
               class="pe-icon--sort-up-18">
            <title id="s1">Sorted ascending</title>
            <use xlink:href="#sort-up-18"></use>
          </svg>
        </button>
      </th>
      <th scope="col">
        Country
      </th>
      <th scope="col" class="pe-table__center" aria-sort="none">
        <span>Team</span>
        <button type="button" class="pe-icon--btn">
          <svg role="img"
               focusable="false"
               aria-labelledby="s2"
               class="pe-icon--sortable-18">
            <title id="s2">Unsorted</title>
            <use xlink:href="#sortable-18"></use>
          </svg>
        </button>
      </th>
      <th scope="col" class="pe-table__right" aria-sort="descending">
        <span>Net Worth (in bazillions)</span>
        <button type="button" class="pe-icon--btn">
          <svg role="img"
               focusable="false"
               aria-labelledby="s3"
               class="pe-icon--sort-down-18">
            <title id="s3">Sorted Descending</title>
            <use xlink:href="#sort-down-18"></use>
          </svg>
        </button>
      </th>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mark Zuckerberg</th>
      <td>United States</td>
      <td class="pe-table__center">SpyFace</td>
      <td class="pe-table__right">62</td>
    </tr>
    <tr>
      <th scope="row">William Randall Hearst</th>
      <td>United States</td>
      <td class="pe-table__center">Yellow Journalists </td>
      <td class="pe-table__right">30</td>
    </tr>
    <tr>
      <th scope="row">(Keith) Rupert Murdoch</th>
      <td>Australia</td>
      <td class="pe-table__center">Foxxxy Foxes</td>
      <td class="pe-table__right">13</td>
    </tr>
    <tr>
      <th scope="row">Mao Zedong</th>
      <td>China</td>
      <td class="pe-table__center">LAMAO</td>
      <td class="pe-table__right">0</td>
    </tr>
  </tbody>
</table>
{{/demo}}
