<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

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

