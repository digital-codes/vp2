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

    <template #footer>
      <section>
        <div class="odocs-spaced">
        <o-button
          label="Launch notification (default)"
          size="medium"
          @click="simple"
        />
        </div>
      </section>
    </template>
    </CardComp >
</template>

<script>

import CardComp from './CardComp.vue'
import { useProgrammatic } from '@oruga-ui/oruga-next'


    export default {
      components: {
        CardComp,
      },
      methods: {
        simple() {
          this.oruga.notification.open({
            message:'Something happened',
            closable: true,
            //duration: 5000,
            indefinite: true,
            contentClass: "note",
            })
        },
      },
      setup () {
        const { oruga } = useProgrammatic()
        return { oruga }
      }
    }
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