<script setup>
const props = defineProps({
  class: String,
  tag: String,
  href: String,
  target: String,
  download: String,
})

function click() {
  console.log("Click")
}

</script>

<template>
  <span v-if="tag == 'a'" class="btn-wrap">
  <a 
    :href="href" 
    :target="target" 
    :download="download"
    style="text-decoration: none;"
    class="btn"
  >
    <slot></slot>
  </a> 
  </span>

  <span v-if="tag == 'btn'" class="btn-wrap">
  <button  
    @click="click" 
    class="btn"
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
  border: solid 1px #444;
  border-radius: 3px;
  background-color: var(--c-bg-lighter);
}

/*
.dark .btn-wrap {
  background-color: var(--c-bg-lighter);
}
*/

.btn-wrap > a {
  color: var(--c-text);
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0;
  text-decoration: none;
  background-color: unset;
  cursor:pointer;
}

/*
.dark .btn-wrap > a {
  background-color: unset;
}
*/

.btn-wrap > button {
  color: var(--c-text);
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

<style>


.dark .btn {
  background-color: rgba(255,255,255,.7);
}

</style>
