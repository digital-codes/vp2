<template>
<CCard >
    <CCardBody>
        <!-- automatic cycling throws error on leaving page 
        -- hmmm, disabling  intervall doesn't help ...
        -->
        <CCarousel :interval=false controls>
        <CCarouselItem>
            <img class="d-block w-100" src="/images/slide1.png" alt="slide 1"/>
        </CCarouselItem>
        <CCarouselItem>
            <img class="d-block w-100" src="/images/slide2.png" alt="slide 2"/>
        </CCarouselItem>
        <CCarouselItem>
            <img class="d-block w-100" src="/images/slide3.png" alt="slide 3"/>
        </CCarouselItem>
        </CCarousel>

    </CCardBody>
</CCard>

</template>

<script>


import { CCarousel,CCarouselItem, CCard,CCardBody} from '@coreui/vue'

import '../public/css/colors.css'
import '../public/css/card.css'
import '../public/css/button.css'
import '../public/css/positions.css'
import '../public/css/carousel.css'



export default {
      components: {
        CCarousel,CCarouselItem,CCard,CCardBody,
      },
    }
  </script>

<style>
.carousel-control-next-icon, .carousel-control-prev-icon {
    background-color: rgba(0,0,0,.4);
}
</style>
