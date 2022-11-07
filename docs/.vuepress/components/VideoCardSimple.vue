
<template>
    <CardComp >
    <template #header>
        Card title
    </template>

    <template #default>
          <div
            aria-label="Video with poster image"
            aria-description="Some strange video as example"
          >
              <video style="width:100%;resize:both;"
                controls preload='none'
                poster="https://media.w3.org/2010/05/sintel/poster.png"
              >
                <source id='mp4'
                  src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                  type='video/mp4'>
                <source id='webm'
                  src="https://media.w3.org/2010/05/sintel/trailer.webm"
                  type='video/webm'>
                <source id='ogv'
                  src="https://media.w3.org/2010/05/sintel/trailer.ogv"
                  type='video/ogg'>
                <p>Your user agent does not support the HTML5 Video element.</p>
              </video>
              </div>
    </template>

    <template #footer>
            Some quick example text to build on the card title and make up the bulk of the card's content.
    </template>

    </CardComp >


</template>


<script>

import CardComp from './CardComp.vue'


    export default {
      data:() => ({
        active: 0,
        toasts: []
      }),
      components: {
        CardComp,
      },
    }
  </script>


