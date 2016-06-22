---
layout: docs.html
title: Calendar
section: elements
---


This component defines the standard visual style for the calendar element. Cells or dates which have visual highlighting or other states conveyed via a purely visual manner must also include a textual version of that information using the `pe-sr-only` class. Note the space between the date number and the hidden text; this is to prevent assistive technology from running the date and the first hidden word together. A newline character is also acceptable.

{{#demo}}
<div class="pe-calendar">
  <div class="pe-calendar-year">
    <h3 class="pe-calendar-month" id="m1">March 2016</h3>
    <div class="pe-calendar-buttons">
      <button class="pe-btn--inverse-link" aria-label="Previous" title="Previous">
        <span class="pe-icon--chevron-left" aria-hidden="true"></span>
      </button>
      <button class="pe-btn--inverse-link" aria-label="Next" title="Next">
        <span class="pe-icon--chevron-right" aria-hidden="true"></span>
      </button>
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
        <td class="pe-calendar-dates--selected">
          <div class="pe-calendar-dates-div">9</div> <span class="pe-sr-only">Selected</span>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">10 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">11 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">12 <span class="pe-sr-only">Highlighted</span></div>
        </td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">13 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">14 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">15 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">16 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">17 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">18 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">19 <span class="pe-sr-only">Highlighted</span></div>
        </td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted">
          <div class="pe-calendar-dates-div">20 <span class="pe-sr-only">Highlighted</span></div>
        </td>
        <td class="pe-calendar-dates--disabled">
          <div class="pe-calendar-dates-div">21 <span class="pe-sr-only">Not selectable</span></div>
        </td>
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
