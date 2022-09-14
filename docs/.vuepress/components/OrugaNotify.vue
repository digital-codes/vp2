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
import { useProgrammatic } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.min.css'

import { defineComponent, ref, onBeforeMount, onBeforeUnmount } from 'vue'

const faIconConfig = {
  iconComponent: "font-awesome-icon",
  iconPack: "fas"
}

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
    const docsIcon = ref(undefined)
    const { oruga } = useProgrammatic()
    console.log("oruga:",oruga)
    console.log("oruga cfg:",oruga.config)
    onBeforeMount(() => {
        docsIcon.value = oruga.config.getOptions().iconComponent
        oruga.config.setOptions(faIconConfig)
    })
    onBeforeUnmount(() => {
        oruga.config.setOptions({
            iconComponent: docsIcon.value,
        })
    })      
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