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

You can change the alignments of the data. Here the caption is at the bottom of the table and aligned left. The Party column is centered. The deaths columns is right-aligned.

{{#demo}}
<table class="pe-table pe-caption--bottom">
  <caption class="pe-table__left">Supervillains of History</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Country</th>
      <th scope="col" class="pe-table__center">Party</th>
      <th scope="col" class="pe-table__right">Deaths (in millions)</th>
    </tr>   
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pol Pot</th>
      <td>Cambodia</td>
      <td class="pe-table__center">Communist Party of Kampuchea</td>
      <td class="pe-table__right">1 to 3</td>
    </tr>
    <tr>
      <th scope="row">Joseph Stalin</th>
      <td>Soviet Union</td>
      <td class="pe-table__center">Communist Party of the Soviet Union</td>
      <td class="pe-table__right">2 to 3</td>
    </tr>
    <tr>
      <th scope="row">Adolf Hitler</th>
      <td>Germany</td>
      <td class="pe-table__center">National Socialist German Workers' Party</td>
      <td class="pe-table__right">~11</td>
    </tr>
    <tr>
      <th scope="row">Mao Zedong</th>
      <td>China</td>
      <td class="pe-table__center">Communist Party of China</td>
      <td class="pe-table__right">15 to 55</td>
    </tr>
  </tbody>
</table>
{{/demo}}

### Selectable rows

Selectable-row tables require Javascript for full styling, so this example has a script to show the styles, however this script is not included in Elements.

Note the first table header is not visible (the top left cell looks empty), however in accordance with accessibility, this cell has text naming the column.

{{#demo}}
<table class="pe-table">
  <caption class="pe-table__left">The Best Comics</caption>
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
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Spirou</td>
      <td>Spirou, Fantasio</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Suske en Wiske</td>
      <td>Suske, Wiske, Tante Sidonia, Krimson</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Lucky Luke</td>
      <td>Luke, Jolly Jumper, Rantanplan</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Asterix</td>
      <td>Asterix, Obelix, Panoramix</td>
      <td>France</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Gaston</td>
      <td>Gaston Lagaffe, Fantasio, Jules-de-chez-Smith-en-face</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>
        <div class="pe-checkbox">
          <input type="checkbox" id="c1" aria-labelledby="comic_select ">
          <span>
            <svg aria-hidden="true"
                 focusable="false"
                 class="pe-icon--check-sm-18">
              <use xlink:href="#check-sm-18"></use>
            </svg>
          </span>
        </div>
      </td>
      <td>Calvin and Hobbes</td>
      <td>Calvin, Hobbes, Suzy</td>
      <td>United States</td>
    </tr>
  </tbody>
</table>
{{/demo}}
