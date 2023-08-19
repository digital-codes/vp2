<template>
    <div>
      <section class="pagination">
      <o-pagination :total="3" v-model:current="current" 
      :per-page="1"
      :range-before="1"
      :range-after="1"
      order="centered"
      size="default" 
      :simple="false"
      :rounded="false"
      @change="imgChanged"
      >
        <template #default="props">
          <o-pagination-button
            :page="props.page"
            :id="`page${props.page.number}`"
          >
            {{ labels[props.page.number-1] }}
          </o-pagination-button>
        </template>
        <!-- 
        <template #previous="props">
          <o-pagination-button
            :page="props.page"
          >
            Previous
          </o-pagination-button>
        </template>
        <template #next="props">
          <o-pagination-button :page="props.page">
            Next
          </o-pagination-button>
        </template>

        -->
      </o-pagination>
    </section>

    <section class="paged-content">
      <div v-if="current==1">
        <div class="c-slide" >
            <img class="c-image zoomable" src="/images/slide1.png" alt="I1"/>
        </div>
        <p class="c-text">Text1</p>
      </div>

      <div v-if="current==2">
        <div class="c-slide" >
          <img class="c-image zoomable" src="/images/slide2.png" alt="I2"/>
        </div>
        <p class="c-text">Text2</p>
      </div>

      <div v-if="current==3">
        <div class="c-slide" >
          <img class="c-image zoomable" src="/images/slide3.png" alt="I3"/>
        </div>
        <p class="c-text">Text3</p>
      </div>
    </section>
  </div>
</template>

<script>

import {  OPagination, OPaginationButton } from '@oruga-ui/oruga-next'
import { useProgrammatic } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.min.css'

/*
import Oruga from "@oruga-ui/oruga-next";
*/
import { defineComponent, ref, onBeforeMount, onBeforeUnmount } from 'vue'

// zoom dynmic images
// https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html#usemediumzoom
import { nextTick } from 'vue'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/client'


const faIconConfig = {
  iconComponent: "font-awesome-icon",
  iconPack: "fas"
}

export default defineComponent( {
  components: {
    OPagination, OPaginationButton,
  },
  props: ["lang"],
  methods: {
    async zrefresh() {
      await nextTick()
      if (this.zoom) {
        this.zoom.refresh('img.zoomable')
      }
    },
    imgChanged() {
      if (this.zoom) {
        setTimeout(this.zrefresh,100)
      }
    }
  },
  setup (props) {
    const docsIcon = ref(undefined)
    const zoom = useMediumZoom()
    const { oruga } = useProgrammatic()
    onBeforeMount(() => {
        docsIcon.value = oruga.config.getOptions().iconComponent
        oruga.config.setOptions(faIconConfig)
    })

    onBeforeUnmount(() => {
        oruga.config.setOptions({
            iconComponent: docsIcon.value,
        })
    })      
    const current = ref(1) 
    const labels = ["Gates","Code","Data"]
    return { oruga, current, labels, zoom, docsIcon }
  }
})
</script>

<style>
.o-pag__link svg{
  color:var(--c-brand);
}
</style>

<style scoped>

.pagination {
  margin-bottom: .5rem;
  border: 1px solid var(--c-border);
  border-radius: 0.25rem;
}

.o-pag__link {
  color:var(--c-text);
  background-color:unset;
  border: unset;
}

.o-pag__link--current {
  color:var(--c-brand);
  background-color:unset;
}

.c-slide {
  padding: 0; /* 9rem 4.5rem; */
  color: #ffffff;
  text-align: center;
}

.c-slide img {
  display:block;
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: 0.25rem;
}



</style>

<style>
/* notification needs global style ! */
.note {
  padding: 5px;
  margin-right: 2rem;
}
</style>