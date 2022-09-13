<script setup>
import CardComp from './CardComp.vue'
import { computed } from 'vue'
// iPhone 6se doesn't render vue-markdown,
// maybe due to memory issues
// => we use the small "marked" library to save memory
 
import { marked } from "marked" 

const props = defineProps({
  hdr: String,
  ftr: String,
  src: String,
  zoom: Boolean,
})

const mdText = computed(() => {
    let t = marked.parse(props.src)
    if (props.zoom)
        t = t.replace("<img ","<img class=\"zoomable\" ")
    return t
})

</script>

<template>
    <CardComp>
    <template #header>
        {{ hdr }}
    </template>

    <template #default>
        <span class="mdcontent" v-once v-html="mdText">
        </span>
    </template>

    <template #footer>
        {{ ftr }}
    </template>

    </CardComp>

</template>

<style scoped>

.mdcontent {
    text-align: justify;
    text-justify: auto;

}

</style>
