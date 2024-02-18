<template>
      <section>
        <div class="odocs-spaced">
        <o-button
          label="Launch notification (default)"
          size="medium"
          @click="simple"
        />
        </div>
      </section>
</template>

<script>

import {  OButton, ONotification } from '@oruga-ui/oruga-next'
// programmatic changed from 0.8.0
//import { useProgrammatic } from '@oruga-ui/oruga-next'
import { useOruga } from '@oruga-ui/oruga-next'
// newer oruga >= 0.8.0 uses theme-oruga instead:
// import Oruga theme styling
//import '@oruga-ui/theme-oruga/dist/oruga.css'

import { defineComponent, ref } from 'vue'


export default defineComponent( {
  components: {
    OButton, ONotification,
  },
  methods: {
    simple() {
      console.log(this.oruga,this.oruga.keys)
      this.oruga.notification.open({
        message:'Something happened',
        closable: true,
        //duration: 5000,
        indefinite: true,
        contentClass: "note",
        })
    },
  },
  setup () {
    // needed for programmatic nitification access
    const oruga = useOruga()
    return { oruga }
  }
})
</script>

<style>
/* notification needs global style ! */
.note {
  padding: 5px;
  margin-right: 2rem;
}
</style>