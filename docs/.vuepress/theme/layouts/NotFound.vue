<script setup lang="ts">
import { useRouteLocale } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/client'

import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const routeLocale = useRouteLocale()

const themeLocale  = useThemeLocaleData()

const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]


// ------ test ---------
import { useThemeData } from '@vuepress/theme-default/client'
const themeData  = useThemeData()
console.log("TD:",themeData.value)
console.log("TL:",themeLocale.value)


</script>

<template>
  <ParentLayout>
    <template #page-content-top>
        <h1>404</h1>
        <blockquote>{{ getMsg() }}</blockquote>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
    </template>
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


<style>

/*
vue adds a default message if no page content available.
Add class content404 in 

// src/components/Content.ts
import { pagesComponents } from "@internal/pagesComponents";
import { computed, defineComponent as defineComponent2, h } from "vue";
var Content = defineComponent2({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? h(pageComponent.value) : h(
      "div",
      // AKU fixme
      { class: 'content404', 
      innerHTML: __VUEPRESS_DEV__ ? "Page does not exist. This is a fallback content." : "404 Not Found"
      }
    );
  }
});

or in the distribution file, like 
node_modules/@vuepress/client/dist/chunk-O5XLV5GU.js

*/


.content404 {
  display:none;
}


</style>