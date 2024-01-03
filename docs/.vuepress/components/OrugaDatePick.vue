<template>
  <section>
    <o-field label="Date select">
      <font-awesome-icon class="calIcon" icon="fa-regular fa-calendar-days" size="xl" pull="left" @click="$refs.picker.toggle()"/>
      <o-datetimepicker class="datepick" rounded placeholder="Click to select..."
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


  <section>
    <p>Calendar events</p>
    <o-datepicker
      inline
      :events="events"
      indicators="dots"
      v-model="chkEvent"
    >
    </o-datepicker>
  </section>

</template>

<script>

// oruga datetimepicker
//import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import {  ODatetimepicker, OField, OInput, OButton } from '@oruga-ui/oruga-next'
// newer oruga >= 0.8.0 uses theme-oruga instead:
// import Oruga theme styling
//import '@oruga-ui/theme-oruga/dist/oruga.css'
// or import oruga in client.js

import { ref, computed } from "vue"
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
      ODatetimepicker, OField, OInput, OButton
    },
    data() {
      return {
        chkEvent:new Date(),
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
      },
      chkEvent(){
        console.log("evt",this.chkEvent)
        /*
        this.events.forEach(element => {
          console.log(element.date)
        });
        */
        const found = this.events.find(item => item.date.getTime() == this.chkEvent.getTime());
        if (found) {
          console.log("Found")
          alert("Event found")
        }
      },
    },
    methods: {
    },
    setup() {
      const picker = ref()
      const events = ref([
        {date: new Date(2022, 10 + Math.floor(Math.random() * 2), 2)},
        {date: new Date(2022, 10 + Math.floor(Math.random() * 2), 6)},
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 6),
          type: 'info',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 8),
          type: 'danger',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 10),
          type: 'success',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 10),
          type: 'link',
        },
        {date: new Date(2022, 10 + Math.floor(Math.random() * 2), 12)},
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 12),
          type: 'warning',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 16),
          type: 'danger',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 29),
          type: 'success',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 29),
          type: 'warning',
        },
        {
          date: new Date(2022, 10 + Math.floor(Math.random() * 2), 29),
          type: 'info',
        },
      ])
      return { picker, events }
    }
  })
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

  .o-dpck {
  min-width:300px;
}

.o-drop .o-dpck__dropdown {
  min-width:200px;
}


</style>