<script setup>
import { ref, computed, onMounted } from 'vue'

const mounted = ref(false)

const color = computed(() => {
  switch (mode) {
    case "action":
      return "action"
      break;
    case "info":
      return "action"
      break;
      return "text"
      break;
  }
})


const props = defineProps({
  size: String,
  icon: String,
  type: String, // regular, solid, brands
  mode: String, // text, info, action
})

onMounted(() => {
  mounted.value = true
})

</script>

<template>

<span v-if="mounted"
  class="icon"
  >
  <font-awesome-icon v-if="type == 'solid'" :icon="'fa-solid fa-' + icon" :size="size" :class="mode"></font-awesome-icon> 
  <font-awesome-icon v-if="type == 'brands'" :icon="'fa-brands fa-' + icon" :size="size"  :class="mode"></font-awesome-icon> 
  <font-awesome-icon v-if="type == 'regular'" :icon="'fa-regular fa-' + icon" :size="size"  :class="mode"></font-awesome-icon> 

  </span>

</template>

<style scoped>

.icon {
  margin: .5rem;
}

.icon .action {
  color: var(--c-brand);
}
.icon .info {
  color: var(--c-info);
}
.icon .text {
  color: var(--c-text);
}

</style>
