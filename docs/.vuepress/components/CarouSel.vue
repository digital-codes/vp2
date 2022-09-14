<template>


    <CardComp >
    <template #default>
        <o-carousel 
          :autoplay="true" 
          :repeat="true" 
          :interval=2500
        >
            <o-carousel-item>
            <section class="c-slide" >
                    <img class="c-image" src="/images/slide1.png" alt="slide 1"/>
            </section>
            </o-carousel-item>
            <o-carousel-item>
            <section class="c-slide" >
                    <img class="c-image" src="/images/slide2.png" alt="slide 2"/>
            </section>
            </o-carousel-item>
            <o-carousel-item>
            <section class="c-slide" >
                    <img class="c-image" src="/images/slide3.png" alt="slide 3"/>
            </section>
            </o-carousel-item>
        </o-carousel>
    </template>

    </CardComp >
</template>

<script>

import CardComp from './CardComp.vue'

import {  OButton } from '@oruga-ui/oruga-next'
import {  OCarousel, OCarouselItem } from '@oruga-ui/oruga-next'
import { useProgrammatic } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.min.css'

/*
import Oruga from "@oruga-ui/oruga-next";
*/
import { defineComponent, ref, onBeforeMount, onBeforeUnmount } from 'vue'

/*
      iconComponent: "font-awesome-icon",
      iconPack: "fas"
*/

const faIconConfig = {
  iconComponent: "font-awesome-icon",
  iconPack: "fas"
}


export default defineComponent( {
  components: {
    CardComp, OButton, OCarousel, OCarouselItem, 
  },
  setup () {
    const docsIcon = ref(undefined)
    const { oruga } = useProgrammatic()
    console.log("oruga:",oruga)
    console.log("oruga cfg:",oruga.config)
    onBeforeMount(() => {
        docsIcon.value = oruga.config.getOptions().iconComponent
        oruga.config.setOptions(faIconConfig)
    })

    onBeforeUnmount(() => {
        oruga.config.setOptions({
            iconComponent: docsIcon.value,
        })
    })      
    return { oruga }
  }
})
</script>

<style scoped>

.c-slide {
  padding: 0; /* 9rem 4.5rem; */
  color: #ffffff;
  text-align: center;
}

.c-slide img {
  display:block;
  width: 100%;
}


</style>

<style>
/* notification needs global style ! */
.note {
  padding: 5px;
  margin-right: 2rem;
}
</style>