<template>
  <section>
  <div>
    <!-- with MDIcons -->
    <o-field >
    <calendar-icon class="icon-2x"/>
      <o-datetimepicker rounded placeholder="Click to select..."
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }">
      </o-datetimepicker>
    </o-field>
  </div>
  <div>
    <!-- with coreui icons -->
    <o-field >
    <CIcon icon="cilCalendar" size="xl"/>
      <o-datetimepicker rounded placeholder="Click to select..."
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }">
      </o-datetimepicker>
    </o-field>
  </div>
    <!--
    <o-field label="Select datetime">
      <o-datetimepicker rounded placeholder="Click to select..."  icon="calendar"
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }">
      </o-datetimepicker>
    </o-field>
    -->
  </section>
</template>

<script>

// import oruga in enhanceapp.js
/*
import {  Datetimepicker, Field,   } from '@oruga-ui/oruga-next'
import '../public/css/oruga.css'
*/

// for coreicons:  or in enhanceApp
//import '../public/css/cicons.css'

  export default {
    //inject: ['icons'],
    data() {
      return {
        showWeekNumber: true,
        enableSeconds: false,
        hourFormat: "24", // Browser locale
        locale: "de-DE" // Browser locale
      }
    }
  }
</script>
