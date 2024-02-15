<template>
  <!-- 
  <font-awesome-icon class="calIcon" icon="fa-regular fa-calendar-days" size="xl" pull="left" @click="$refs.picker.toggle()"/>
  -->
  <VueDatePicker
    v-model="theDate" 
    ref="pkr"
    :locale="localeString" :cancelText="cancelString" :selectText="selectString"
    :format-locale="localeObject" :format="formatString" 
    teleport-center 
    calendar-cell-class-name="calCell"
    menu-class-name="calMenu"
    input-class-name="calInput"
    :dark="calDark"
  >
    <template #input-icon>
        <font-awesome-icon class="calIconInput" 
        icon="fa-regular fa-calendar-days" size="xl" 
        pull="right" 
        />
     </template>
     <template #calendar-icon>
        <font-awesome-icon class="calIconSlot" icon="fa-regular fa-calendar-days" size="xl" />
     </template>
  </VueDatePicker>
</template>

<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { de } from 'date-fns/locale';
  import { enUS } from 'date-fns/locale';
  // -----
  import { ref, computed, watch, onBeforeMount } from "vue"
  // import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
  //import { useDarkMode } from '@vuepress/plugin-theme-data/client'

  import { useClientData } from 'vuepress/client'

  const theDate = ref(new Date())
  const pkr = ref(null)

  const lang = ref("en")
  const calDark = ref(false)


  const {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData,
  } = useClientData()
  console.log("Client:",pageLang,siteLocaleData)

  const pageLang_ = siteLocaleData._value.lang.toLowerCase()
  console.log(pageLang_)
  if (pageLang_.startsWith("de")) {
    lang.value = "de"
  }
  console.log("Lang:",lang.value)


  watch (
    theDate, (d1,d0) => {
      console.log("Date:",d1,d0)
    }
  )

  const localeObject = computed(() => {
    return lang.value == "de"?de:enUS
  })
  const localeString = computed(() => {
    return lang.value == "de"?"de":"en"
  })
  const formatString = computed(() => {
    return lang.value == "de"?"E dd.MM.yyyy HH:mm":"E yyyy-MM-dd HH:mm"
  })
  const selectString = computed(() => {
    return lang.value == "de"?"auswählen":"select"
  })
  const cancelString = computed(() => {
    return lang.value == "de"?"abbrechen":"cancel"
  })

</script>

<style scoped lang="scss">

.dark {
  .dp__theme_light {
    --dp-background-color: #002;
    --dp-text-color: #ffffff;
    --dp-hover-color: #484848;
    --dp-hover-text-color: #ffffff;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #005cb2;
    --dp-primary-text-color: #ffffff;
    --dp-secondary-color: #a9a9a9;
    --dp-border-color: #2d2d2d;
    --dp-menu-border-color: #2d2d2d;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #737373;
    --dp-scroll-bar-background: #212121;
    --dp-scroll-bar-color: #484848;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #959595;
    --dp-danger-color: #e53935;
    --dp-highlight-color: rgba(0, 92, 178, 0.2);
  }
}

.dp__theme_light {
   --dp-background-color: #fcc;
   --dp-text-color: #212121;
   --dp-hover-color: #f3f3f3;
   --dp-hover-text-color: #212121;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #1976d2;
   --dp-primary-text-color: #f8f5f5;
   --dp-secondary-color: #c0c4cc;
   --dp-border-color: #ddd;
   --dp-menu-border-color: #ddd;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #f6f6f6;
   --dp-scroll-bar-background: #f3f3f3;
   --dp-scroll-bar-color: #959595;
   --dp-success-color: #76d275;
   --dp-success-color-disabled: #a3d9b1;
   --dp-icon-color: #959595;
   --dp-danger-color: #ff6f60;
   --dp-highlight-color: rgba(25, 118, 210, 0.1);
}


</style>

<style>
/*
.calCell {
  color: #00f;
 
}
.calInput {
  color: #0f0;
  font-size:3rem;
  
}
.calMenu {
  color: #f00;
}
*/
</style>

