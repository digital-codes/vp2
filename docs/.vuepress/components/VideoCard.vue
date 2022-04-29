
<template>

      <CCard >
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <div>
              <video style="width:100%;resize:both;"
                controls preload='none'
                poster="https://media.w3.org/2010/05/sintel/poster.png">
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
          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
        </CCardBody>
      </CCard>


</template>


<script>


import { CCard,CCardBody,CCardTitle ,CCardText} from '@coreui/vue'
import '../public/css/colors.css'
import '../public/css/positions.css'
import '../public/css/card.css'
import '../public/css/modals.css'
import '../public/css/container.css'


    export default {
      data:() => ({
        active: 0,
        toasts: []
      }),
      components: {
        CCard,CCardBody,CCardTitle ,CCardText,
      },
    }
  </script>


