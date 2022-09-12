<script setup>
const props = defineProps({
  size: String,
  icon: String,
})


</script>

<template>

<span 
  class="loading"
  >
  <slot></slot>
  <font-awesome-icon v-if="icon == 'arrow'" icon="fa-solid fa-rotate" class="spinner" spin :size="size" ></font-awesome-icon> 
  <font-awesome-icon v-if="icon == 'gear'" icon="fa-solid fa-gear" class="spinner" spin :size="size" ></font-awesome-icon> 
  <font-awesome-icon v-if="icon == 'spinner'" icon="fa-solid fa-spinner" class="spinner" spin :size="size" ></font-awesome-icon> 

  </span>

</template>

<style scoped>
.loading {

}

.spinner {
  margin-left: 1rem;
  color: var(--c-info);

}

</style>
