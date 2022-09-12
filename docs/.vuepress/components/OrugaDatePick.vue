<template>
  <section>
    <o-field >
      <font-awesome-icon class="calIcon" icon="fa-regular fa-calendar-days" size="xl" pull="left"/>
      <o-datetimepicker rounded placeholder="Click to select..."
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }">
      </o-datetimepicker>
    </o-field>
  </section>
</template>

<script>

// oruga datetimepicker
//import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import {  ODatetimepicker, OField, OInput,  } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.min.css'
// or import oruga in client.js


  export default {
    data() {
      return {
        showWeekNumber: true,
        enableSeconds: false,
        hourFormat: "24", // Browser locale
        locale: "de-DE" // Browser locale
      }
    },
  }
</script>

<style scoped>
.calIcon {
  margin-right: 5px;
}

</style>