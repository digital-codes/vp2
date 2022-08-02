<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
const page = usePageData()
console.log("Page",page)
const frontmatter = usePageFrontmatter()
console.log("Front",frontmatter)
const themeLocale = useThemeLocaleData()
console.log("local",themeLocale)


</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}


</style>

<style lang="scss">
/* import default variables from palette */
@import '@vuepress/plugin-palette/palette';

// override  some ...
@import '../../styles/palette.scss';
@import '../../styles/index.scss';


</style>

