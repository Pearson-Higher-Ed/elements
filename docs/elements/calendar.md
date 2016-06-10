---
layout: docs.html
title: Calendar
section: elements
---


This component defines the standard visual style for the calendar element.

{{#demo}}
<div class="pe-calendar">
  <div class="pe-calendar-year">
    <h3 class="pe-calendar-month" id="m1">March 2016</h3>
    <div class="pe-calendar-chevron">
      <label class="pe-icon--chevron-left pe-calendar-chevron-cursor" aria-label="Prev" title="Prev"></label>
      <label class="pe-icon--chevron-right pe-calendar-chevron-cursor" aria-label="Next" title="Next"></label>
    </div>
  </div>
  <table class="pe-calendar-dates">
    <thead>
      <tr>
        <th scope="col"><abbr title="Sunday">S</abbr></th>
        <th scope="col"><abbr title="Monday">M</abbr></th>
        <th scope="col"><abbr title="Tuesday">T</abbr></th>
        <th scope="col"><abbr title="Wednesday">W</abbr></th>
        <th scope="col"><abbr title="Thursday">T</abbr></th>
        <th scope="col"><abbr title="Friday">F</abbr></th>
        <th scope="col"><abbr title="Saturday">S</abbr></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">28</div></td>
        <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">29</div></td>
        <td><div class="pe-calendar-dates-div">1</div></td>
        <td><div class="pe-calendar-dates-div">2</div></td>
        <td><div class="pe-calendar-dates-div">3</div></td>
        <td><div class="pe-calendar-dates-div">4</div></td>
        <td><div class="pe-calendar-dates-div">5</div></td>
      </tr>
      <tr>
        <td><div class="pe-calendar-dates-div">6</div></td>
        <td><div class="pe-calendar-dates-div">7</div></td>
        <td><div class="pe-calendar-dates-div">8</div></td>
        <td class="pe-calendar-dates--selected"><div class="pe-calendar-dates-div">9</div><span class="pe-sr-only">Highlighted</span></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">10</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">11</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">12</div></td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">13</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">14</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">15</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">16</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">17</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">18</div></td>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">19</div></td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted"><div class="pe-calendar-dates-div">20</div></td>
        <td class="pe-calendar-dates--disabled"><div class="pe-calendar-dates-div">21</div></td>
        <td><div class="pe-calendar-dates-div">22</div></td>
        <td><div class="pe-calendar-dates-div">23</div></td>
        <td><div class="pe-calendar-dates-div">24</div></td>
        <td><div class="pe-calendar-dates-div">25</div></td>
        <td><div class="pe-calendar-dates-div">26</div></td>
      </tr>
      <tr>
        <td><div class="pe-calendar-dates-div">27</div></td>
        <td><div class="pe-calendar-dates-div">28</div></td>
        <td><div class="pe-calendar-dates-div">29</div></td>
        <td><div class="pe-calendar-dates-div">30</div></td>
        <td><div class="pe-calendar-dates-div">31</div></td>
        <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">1</div></td>
        <td class="pe-calendar-dates--outside"><div class="pe-calendar-dates-div">2</div></td>
      </tr>
    </tbody>
  </table>
</div>
{{/demo}}
