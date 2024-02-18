<template>


    <CardComp >
    <template #default>
        <o-carousel 
          aria-label="Carousel"
          aria-description="Carousel with 3 slides"
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
// programmatic changed from 0.8.0
//import { useProgrammatic } from '@oruga-ui/oruga-next'
import { useOruga } from '@oruga-ui/oruga-next'
// newer oruga >= 0.8.0 uses theme-oruga instead:
// import Oruga theme styling
//import '@oruga-ui/theme-oruga/dist/oruga-full.css'

/*
import Oruga from "@oruga-ui/oruga-next";
*/
import { defineComponent, ref } from 'vue'


export default defineComponent( {
  components: {
    CardComp, OButton, OCarousel, OCarouselItem, 
  },
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