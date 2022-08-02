
<template>

  <div>
  <CIcon icon="cilList" size="sm"/>
  <CIcon icon="cilShieldAlt" size="lg"/>
  <CIcon icon="cilCalendar" size="xxl"/>
  </div>


  <CContainer>
  <CRow class="row row-cols-1 row-cols-md-3 g-2 ">
    <CCol >
    <CButton 
      color="primary" 
      :active="active == 0"
      @click="active = 0"
      >Primary
    </CButton>
    </CCol>
    <CCol >
    <CButton color="secondary" disabled>Secondary</CButton>
    </CCol>
    <CCol >
    <CButton color="success">Success</CButton>
    </CCol>
  </CRow>
</CContainer>


  <CContainer>
  <CRow class="row row-cols-1 row-cols-md-2 g-2 ">
    <CCol >
      <div class="p-3 border bg-light">Custom column padding 2</div>
    </CCol>
    <CCol >
      <div class="p-3 border bg-light">Custom column padding 2</div>
    </CCol>
    <CCol >
      <div class="p-3 border bg-light">Custom column padding 2</div>
    </CCol>
    <CCol >
      <div class="p-3 border bg-light">Custom column padding 2</div>
    </CCol>
  </CRow>
</CContainer>

   
    <CContainer>
  <CRow class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-lg-3">
    <CCol>
      <CCard >
        <CCardImage orientation="top" src="/images/img.png" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol>
      <CCard >
        <CCardImage orientation="top" src="/images/img.png" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol>
      <CCard >
        <CCardImage orientation="top" src="/images/img.png" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
          <CButton  color="secondary"  @click="createToast">Toast</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</CContainer>
    End container 4

  <CToaster placement="top-end">
    <CToast v-for="(toast, index) in toasts"
      :autohide="false"
      >
      <CToastHeader closeButton>
      <span class="me-auto fw-bold">{{toast.title}}</span>
      <small>Created: 7 min ago</small>
      </CToastHeader>
      <CToastBody>
        {{ toast.content }}
      </CToastBody>  
    </CToast>
  </CToaster>

    <CContainer>
  <CRow class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-lg-3">
  <CCol>
    <CWidgetStatsB
      class="mb-3"
      :progress="{ color: 'success', value: 75}"
    >
      <template #text>Widget helper text</template>
      <template #title>Widget title</template>
      <template #value>89.9%</template>
    </CWidgetStatsB>
  </CCol>
</CRow>
</CContainer>



</template>
<script>

// https://coreui.io/vue/docs/components/button.html

import { CButton } from '@coreui/vue'
import { CContainer, CCol, CRow } from '@coreui/vue'
import { CCard,CCardImage,CCardBody,CCardTitle ,CCardText} from '@coreui/vue'
import { CToast,CToaster,CToastHeader,CToastBody } from '@coreui/vue'
import { CWidgetStatsB } from '@coreui/vue'
// or
//import CButton from '@coreui/vue/src/components/button/CButton'

//import '@coreui/coreui/dist/css/coreui.min.css'
//import '@coreui/coreui/dist/css/coreui-grid.min.css'
//import '@coreui/coreui/dist/css/coreui-utilities.min.css'
//import '../public/css/coreui.css'
import '../public/css/colors.css'
import '../public/css/positions.css'
import '../public/css/button.css'
import '../public/css/card.css'
import '../public/css/modals.css'
import '../public/css/container.css'



import { ref } from "vue"


// icons
/* importing here alone gives error. Provide in enhance.app file instead
import { CIcon } from '@coreui/icons-vue';
import { cilList, cilShieldAlt, cilCalendar } from '@coreui/icons';
*/
//import '../public/css/cicons.css'

export default {
      // provide injected icons
      //inject: ['icons'],
      data:() => ({
        active: 0,
        toasts: []
      }),
      components: {
        CButton,
        CContainer, CCol, CRow,
        CCard,CCardImage,CCardBody,CCardTitle ,CCardText,
        CToast,CToaster,CToastHeader,CToastBody,
        CWidgetStatsB,
        //CIcon,
      },
      methods: {
        createToast() {
          this.toasts.push({
            title: 'new toast',
            content: 'Lorem ipsum dolor cet emit'
          })
        }
      },
      setup() {
        return { }
      },

    }
</script>


