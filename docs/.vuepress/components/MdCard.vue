<script setup>
import CardComp from './CardComp.vue'
import Markdown from 'vue3-markdown-it';

const props = defineProps({
  hdr: String,
  ftr: String,
  src: String
})


const src1 = "## Head \n\
A paragraph for the main content. \n\n\
And another one. \
\
<a href='http://cern.ch'>Cern</a> \n\n\
<img class='img' src='https://codeproject.freetls.fastly.net/App_Themes/CodeProject/Img/logo250x135.gif' alt='gif'>\n\n\
The master branch is a snapshot of the latest release. Submit your PR in the develop branch \
Include screenshots or animated GIFs in your pull request whenever needed (if visual changes) \
It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging \
DO NOT commit the lib and dist folder, use it only for testing on your end \
If adding new feature: \
\
Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on i \
"

</script>

<template>
    <CardComp>
    <template #header>
        {{ hdr }}
    </template>

    <template #default>
       <Markdown :source="src" class="mdContent"  html="true" />
    </template>

    <template #footer>
        {{ ftr }}
    </template>

    </CardComp>
</template>

<style scoped>

</style>
