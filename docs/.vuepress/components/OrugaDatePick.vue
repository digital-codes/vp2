<template>
  <section>
    <o-field >
    <font-awesome-icon icon="fa-regular fa-calendar-days" size="xl" pull="left"/>
      <o-datetimepicker rounded placeholder="Click to select..."
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }">
      </o-datetimepicker>
    </o-field>
  </section>
</template>

<script>

// import oruga in client.js
/*
import {  Datetimepicker, Field,   } from '@oruga-ui/oruga-next'
import '../public/css/oruga.css'
*/

  export default {
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

<style scoped>
.calIcon {
  margin-right: 5px;
}

</style>