<template>
  <section class="upload">
    <o-field>
      <o-upload v-model="dropFiles"  multiple drag-drop>
        <section class="ex-center">
          <p>
            <font-awesome-icon icon="fa-upload" size="xl"/>
          </p>
          <p>Drop your files here or click to upload</p>
        </section>
      </o-upload>
    </o-field>

    <div class="tags">
      <span v-for="(file, index) in dropFiles" :key="index">
        {{ file.name }}
        <o-button icon-left="fa-times" size="small" native-type="button" @click="deleteDropFile(index)">
        </o-button>
      </span>
    </div>
  </section>

</template>

<script>

// oruga datetimepicker
//import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import {  OField, OUpload, OButton } from '@oruga-ui/oruga-next'
// newer oruga >= 0.8.0 uses theme-oruga instead:
// import Oruga theme styling
//import '@oruga-ui/theme-oruga/dist/oruga.css'

import { defineComponent, ref } from 'vue'

export default defineComponent({
    components: {
      OField, OUpload, OButton,
    },
    setup() {
        const dropFiles = ref([])
        const deleteDropFile = (index) => {
            dropFiles.value.splice(index, 1)
        }
        return { dropFiles, deleteDropFile }
    }
})
</script>

<style scoped>
.ex-center {
  text-align: center;
}

.upload {
  background-color: #cce;
}
.dark .upload {
  background-color: #446;
}

</style>