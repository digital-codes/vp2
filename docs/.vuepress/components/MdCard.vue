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
  img: String,
  imgAlt: String,
  zoom: Boolean,
})

const mdText = computed(() => {
    let t = marked.parse(props.src)
    if (props.zoom)
        t = t.replace("<img ","<img class=\"mdimage zoomable\" ")
    return t
})

const mdImgClass = computed(() => {
    let c = "mdimage"
    if (props.zoom)
        c += " " + "zoomable"
    return c
})

</script>

<template>
    <CardComp>
    <template #header>
        {{ hdr }}
    </template>

    <template #default>
        <img v-if="img" v-bind:src="img" v-bind:class="mdImgClass" v-bind:alt="imgAlt" />
        <div class="mdcontent" v-once v-html="mdText">
        </div>
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

/* card overwrites this class ! */
.mdimage {
    max-width:200px;
    max-height:200px;
}

</style>

<style>
/* remove margin on first paragraf. Not scoped! */
.mdcontent > p:first-of-type {
    margin-top:0;
}

</style>