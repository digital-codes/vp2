<script setup>
//import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

//import { usePageData, usePageFrontmatter } from '@vuepress/client'
//import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
//const page = usePageData()
//console.log("Page",page.filePathRelative)
//const frontmatter = usePageFrontmatter()
//console.log("Front",frontmatter)
//const themeLocale = useThemeLocaleData()
//console.log("local",themeLocale)

// see https://v2.vuepress.vuejs.org/reference/default-theme/extending.html#layout-slots

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
//@import '@vuepress/plugin-palette/palette';

// override  some ...
@import '../../styles/palette.scss';
@import '../../styles/index.scss';


</style>

