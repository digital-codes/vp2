<script setup>
import CardComp from './CardComp.vue'

const items = [1,2,3,4,5,6,7]

</script>

<!--
<template>
  <div class="flex-container">
    <CardComp>
    </CardComp>
    <CardComp>
    </CardComp>
    <CardComp>
    </CardComp>
    <CardComp>
    </CardComp>
  </div>
</template>
-->
<template>
  <div class="flex-container">
    <CardComp v-for="item in items"  :key="item">
    </CardComp>
  </div>
</template>


<style scoped>

/* https://www.w3schools.com/css/css3_flexbox_responsive.asp */

.flex-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* background-color: DodgerBlue; */
  box-sizing: border-box;
  /* compensate item margins */
  margin: 0 -.5rem 0 -.5rem;
}


.flex-container > div {
  /* flex value depends on margins and padding */
  flex: 30%;
  box-sizing: border-box;
  margin: 0.5rem;
  /* can set size limit, if needed **
  max-width: 32%;
  */
}

@media (max-width: 800px) {
.flex-container > div {
  flex: 100%;
  box-sizing: border-box;
}

}

</style>

