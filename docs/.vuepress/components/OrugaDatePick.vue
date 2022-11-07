<template>
  <section>
    <o-field label="Date select">
      <font-awesome-icon class="calIcon" icon="fa-regular fa-calendar-days" size="xl" pull="left" @click="$refs.picker.toggle()"/>
      <o-datetimepicker rounded placeholder="Click to select..."
      :locale="locale" 
      :datepicker="{showWeekNumber}"
      :timepicker="{ enableSeconds, hourFormat }"
      v-model="theDate"
      ref="picker"
      >
        <template #footer>
        <div class="buttons-footer">
          Select date then click here 
          <o-button variant="primary" @click="$refs.picker.toggle()">
            <font-awesome-icon class="calIcon" icon="fa-solid fa-check" size="xl" pull="left"/>
            <span>OK</span>
          </o-button>
        </div>
      </template>      
      </o-datetimepicker>
    </o-field>
  </section>

  <section>
    <p>Read only inline calendar</p>
  <o-datetimepicker v-model="theDate" 
    :disabled="true" 
    inline></o-datetimepicker>
  </section>

</template>

<script>

// oruga datetimepicker
//import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import {  ODatetimepicker, OField, OInput, OButton } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.min.css'
// or import oruga in client.js

import { ref } from "vue"

  export default {
    components: {
      ODatetimepicker, OField, OInput, OButton
    },
    data() {
      return {
        theDate:new Date(),
        showWeekNumber: true,
        enableSeconds: false,
        hourFormat: "24", // Browser locale
        locale: "de-DE" // Browser locale
      }
    },
    watch: {
      theDate() {
        console.log("Pick:",this.theDate)
        console.log("Pkr:",this.picker)
      },
    },
    methods: {
    },
    setup() {
      const picker = ref()
      return { picker }
    }
  }
</script>

<style scoped>
.calIcon {
  margin-right: 5px;
}


</style>

<style>
  .o-drop--disabled {
    opacity: unset;
  }

  .o-dpck__table__cell--unselectable {
    color: unset;
  }

</style>