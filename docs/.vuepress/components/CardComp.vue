<script setup>
// https://vuejs.org/guide/components/slots.html#named-slots
import { ref } from "vue"

const marker = ref(false)

</script>

<template>
<div class="card">
  <div v-if="marker" class="marker">
    <div class="marker-time">
      2020
    </div>
  </div>
  <header class="hdr">
    <div>
    <slot name="header">
    </slot>
    </div>
  </header>
  <main class="content">
    <div>
    <slot>
      Card Content
    </slot>
    </div>
  </main>
  <footer class="ftr">
    <div class="ftr-content">
    <slot name="footer"></slot>
    </div>
  </footer>
</div>
</template>

<style scoped>
.card {
    position:relative;
    min-width: 0;
    color: var(--c-text);
    background-color: var(--c-bg-light); /* #f8f8f8;*/
    padding: 1rem;
    margin: .5rem 0 .5rem 0;
    box-shadow: var(--c-card-shadow);
    background-clip: border-box;
    border: 1px solid var(--c-border); /*rgba(0,0,0,.2);*/
    border-radius: 0.25rem;
}

.card .marker {
  position:absolute;
  top:-10%;
  left: .5rem;
  height:120%;
  width: 2rem;
  background:red;
}

.card .marker-time {
  height: 2rem;
  /*width: 6rem;*/
  border: solid 2px green;
  background:blue;
  border-radius: 100px;
  position: absolute;
  top: 45%;
  color:white;
  padding:1rem;
}

.card .hdr {
    text-align: center;
    font-size: 150%;
    padding-bottom: 20px;
}

.card .content {
    padding: 0 20px 0 20px;
    text-align: justify;
    text-justify: auto;
    hyphens: auto;
}

.card .ftr {
    text-align: center;
    margin-top: 10px;
    padding-top: 5px;
    font-size: 80%;
    /*
    border-top: solid 1px var(--c-border);
    */
}

</style>

<style>
/* global image style */

.card img {
  width: 50px;
}


/* global chart styles */
.card .chart {
  background-color: var(--c-bg-fix);
}
/*
.dark .card .chart {
  background-color: rgba(255,255,255,.7);
}
*/

/* global code styles */
code {
  color: var(--c-color) !important;
}

</style>
