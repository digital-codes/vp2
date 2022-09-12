<script setup>
// testing 
/* 
import { ref, reactive, computed } from 'vue'
const downloadData = reactive([{"key": 1}, {"key": 2}])
const fileType = "csv"

const convertData = computed(() => {
  let contentType = ''
  let dData = ''
  let blob
  let url
  let titles
  console.log("Downloading -- ",downloadData)
  switch (fileType) {
    case 'json':
      contentType = 'application/json'
      dData = JSON.stringify(downloadData, null, 2)
      blob = new Blob([dData], { type: contentType })
      url = window.URL.createObjectURL(blob)
      break

    case 'csv':
      //https://stackoverflow.com/questions/61927914/how-to-download-csv-file-from-json-data
      if (!downloadData || downloadData.length === 0) { 
          console.log("data was empty");
          break
      }
      let csv = [Object.keys(downloadData[0]).slice(0).join(",")];
      downloadData.forEach(
        item => csv.push(
          Object.values(item).map(val => isNaN(val) ? '"'+val+'"':val).join(",")
        )
      )
      csv=csv.join("\n");
      console.log(csv);
      url = "data:text/csv;charset=utf-8,"+escape(csv)
      break

    default:
      break
  }
  console.log("URL: ", url)
  return url
})
*/

function click() {
  console.log("Click")
}



const props = defineProps({
  class: String,
  tag: String,
  href: String,
  target: String,
  download: String,
})


</script>

<template>
  <span v-if="tag == 'a'" class="btn-wrap">
  <a 
    :href="href" 
    :target="target" 
    :class="class"
  >
    <slot></slot>
  </a> 
  </span>

  <span v-if="tag == 'down'" class="btn-wrap">
  <a 
    :href="href" 
    :download="download"
    :class="class"
  >
    <slot></slot>
  </a> 
  </span>

  <span v-if="tag == 'btn'" class="btn-wrap">
  <button  
    @click="click" 
    :class="class"
  >
    <slot></slot>
  </button> 
  </span>

</template>

<style scoped>
.btn-wrap {
  /*
  text-decoration: none;
  */
  display: inline-block;
  margin: .5rem;
  padding: .2rem .8rem .2rem .8rem;
  border: solid 1px var(--c-border);
  border-radius: 3px;
  background-color: var(--c-bg);
}


.btn-wrap > a {
  color: var(--c-brand);
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0;
  text-decoration: none;
  background-color: unset;
  cursor:pointer;
}

.btn-wrap > button {
  color: var(--c-brand);
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0;
  background-color: unset;
  border: unset;
  cursor:pointer;
}

.dark .btn-wrap > button {
  background-color: unset;
}


</style>

