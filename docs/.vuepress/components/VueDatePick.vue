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
  >
    <template #input-icon>
        <font-awesome-icon class="input-slot-image" 
        icon="fa-regular fa-calendar-days" size="xl" 
        pull="right" 
        />
     </template>
     <template #calendar-icon>
        <font-awesome-icon class="slot-icon" icon="fa-regular fa-calendar-days" size="xl" />
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
  import { usePageLang } from '@vuepress/client'

  const theDate = ref(new Date())
  const pkr = ref(null)

  const lang = ref("en")

  onBeforeMount(async () => {
    const pageLang = usePageLang()._value.toLowerCase()
    console.log(usePageLang()._value)
    if (pageLang.startsWith("de")) {
      lang.value = "de"
    }
    console.log("Lang:",lang.value)
  })

  watch (
    theDate, (d1,d0) => {
      console.log("Date:",d1,d0)
    }
  )

  const localeObject = computed(() => {
    return lang.value == "de"?de:null
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


<style scoped>
.calIcon {
  margin-right: 5px;
}


</style>

