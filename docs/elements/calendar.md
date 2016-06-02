---
layout: docs.html
title: Calendar
section: elements
---


This component defines the standard visual style for the calendar element.

{{#demo}}
<div class="pe-calendar">
  <h3 class="pe-calendar-month" id="m1">March 2016</h3>
  <div class="pe-calendar-chevron">
    <button class="pe-icon--chevron-left" aria-label="February" title="February"></button>
    <button class="pe-icon--chevron-right" aria-label="April" title="April"></button>
  </div>
</div>
<div class="pe-calendar pe-calendar-div">
  <table class="pe-calendar-dates">
    <thead>
      <tr>
        <th scope="col"><abbr title="Sunday" class="pe-calendar-title">S</abbr></th>
        <th scope="col"><abbr title="Monday" class="pe-calendar-title">M</abbr></th>
        <th scope="col"><abbr title="Tuesday" class="pe-calendar-title">T</abbr></th>
        <th scope="col"><abbr title="Wednesday" class="pe-calendar-title">W</abbr></th>
        <th scope="col"><abbr title="Thursday" class="pe-calendar-title">T</abbr></th>
        <th scope="col"><abbr title="Friday" class="pe-calendar-title">F</abbr></th>
        <th scope="col"><abbr title="Saturday" class="pe-calendar-title">S</abbr></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pe-calendar-dates--outside">28</td>
        <td class="pe-calendar-dates--outside">29</td>
        <td class="pe-calendar-dates--within">1</td>
        <td class="pe-calendar-dates--within">2</td>
        <td class="pe-calendar-dates--within">3</td>
        <td class="pe-calendar-dates--within">4</td>
        <td class="pe-calendar-dates--within">5</td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--within">6</td>
        <td class="pe-calendar-dates--within">7</td>
        <td class="pe-calendar-dates--within">8</td>
        <td class="pe-calendar-dates--selected">9 <span class="pe-sr-only">selected</span></td>
        <td class="pe-calendar-dates--highlighted">10 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">11 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">12 <span class="pe-sr-only">highlighted</span></td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted">13 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">14 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">15 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">16 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">17 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">18 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--highlighted">19 <span class="pe-sr-only">highlighted</span></td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--highlighted">20 <span class="pe-sr-only">highlighted</span></td>
        <td class="pe-calendar-dates--within pe-calendar-dates--disabled">21</td>
        <td class="pe-calendar-dates--within">22</td>
        <td class="pe-calendar-dates--within">23</td>
        <td class="pe-calendar-dates--within">24</td>
        <td class="pe-calendar-dates--within">25</td>
        <td class="pe-calendar-dates--within">26</td>
      </tr>
      <tr>
        <td class="pe-calendar-dates--within">27</td>
        <td class="pe-calendar-dates--within">28</td>
        <td class="pe-calendar-dates--within">29</td>
        <td class="pe-calendar-dates--within">30</td>
        <td class="pe-calendar-dates--within">31</td>
        <td class="pe-calendar-dates--outside">1</td>
        <td class="pe-calendar-dates--outside">2</td>
      </tr>
    </tbody>
  </table>
</div>
{{/demo}}
