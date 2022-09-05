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

</script>
<template>
  <ParentLayout>
    <template #page-content-top>
        <h1>404</h1>
        <blockquote>{{ getMsg() }}</blockquote>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
    </template>
  </ParentLayout>
</template>

<!--
<template>
  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1>404</h1>
        <blockquote>{{ getMsg() }}</blockquote>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </div>
    </main>
  </div>
</template>
-->

<style scoped>

theme-default-content {
  display:none;
}

theme-default-content div {
  display:none;
}

</style>