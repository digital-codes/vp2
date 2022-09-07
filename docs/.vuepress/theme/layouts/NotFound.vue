<script setup lang="ts">
import { useRouteLocale } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/client'

const routeLocale = useRouteLocale()

const themeLocale  = useThemeLocaleData()

const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]

import Navbar from '@theme/Navbar.vue'


</script>

<template>
  <div
    class="theme-container"
  >
    <slot name="navbar">
      <Navbar>
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1>404</h1>

        <blockquote>{{ getMsg() }}</blockquote>

        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </div>
    </main>
  </div>

  <div class="my-footer">This is my custom page footer</div>

</div>
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


