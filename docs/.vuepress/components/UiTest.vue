
<template>

  <div>
  <CIcon icon="cilList" size="sm"/>
  <CIcon icon="cilShieldAlt" size="lg"/>
  <CIcon icon="cilCalendar" size="xxl"/>
  </div>

  <CContainer>
  <CCallout color="primary">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
  </CCallout>

 <CCallout color="info">
  <CContainer >
    <CRow>
      <CCol xs="1">
      <CAvatar size="lg" src="/images/avatars/1.jpg"/>
      </CCol>
      <CCol style="background-color:lightgray;">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
      </CCol>
    </CRow>
  </CContainer>
  </CCallout>

  <CFormSelect 
    @change="selected"
    size="lg" aria-label="Single select example">
    <option>Open single select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>

  <!-- multiple does not collapse ! -->
  <CFormSelect 
    @change="selected"
    multiple
    size="lg" aria-label="Multiple select example">
    <option>Open multiple select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>



  <CAccordion>
  <CAccordionItem :item-key="1">
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="2">
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="3">
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>

  </CContainer>

  <CContainer>
    <CFormRange label="Example range" :min="0" :max="5" :step="0.5" value="3" id="customRange3"/> 

<CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>
<CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>


<CInputGroup class="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</CInputGroup>

<CInputGroup class="mb-3">
  <CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
</CInputGroup>
<CFormLabel for="basic-url">Your vanity URL</CFormLabel>
<CInputGroup class="mb-3">
  <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
  <CFormInput id="basic-url" aria-describedby="basic-addon3"/>
</CInputGroup>
<CInputGroup class="mb-3">
  <CInputGroupText>$</CInputGroupText>
  <CFormInput aria-label="Amount (to the nearest dollar)"/>
  <CInputGroupText>.00</CInputGroupText>
</CInputGroup>
<CInputGroup class="mb-3">
  <CFormInput placeholder="Username" aria-label="Username"/>
  <CInputGroupText>@</CInputGroupText>
  <CFormInput placeholder="Server" aria-label="Server"/>
</CInputGroup>

  </CContainer>



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
          <CButton @click="createToast">Toast</CButton>
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
      <small>7 min ago</small>
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
  <CCol>
  <!-- widgete also works here, but value prop is inappropriate -->
  <CCard >
   <CCardBody>
   <CCardTitle>Bar chart</CCardTitle>
  <CChart
    type="pie"
    :data="{
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10],
        },
      ],
    }"
  />
  </CCardBody>
  </CCard >
  </CCol>
  <CCol>
    <CWidgetStatsE title="title" value="1,123">
      <CChart
        type="bar"
        style="height: 200px"
        :data="{
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
          datasets: [
            {
               label: 'Dataset 1',
              backgroundColor: '#321fdb',
              borderColor: 'transparent',
              borderWidth: 1,
              data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
            },
            {
               label: 'Dataset 2',
              backgroundColor: '#821f4b',
              borderColor: 'transparent',
              borderWidth: 1,
              data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
            },
          ],
        }"
        :options="{
           indexAxis: 'y', // vertical vs horizontal (y index) bar
            elements: {
      bar: {
        borderWidth: 2,
      }
    },
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              display: true,
              stacked:true
            },
            y: {
              display: true,
              stacked:true
            },
          },
        }"
      />
    </CWidgetStatsE>
  </CCol>
</CRow>
</CContainer>

  <CCard  >
   <CCardBody>
   <CCardTitle>World Map</CCardTitle>
  <CChart  v-if="mapLoaded"
      type = 'choropleth'
      :data = "{
        labels: countries.map((d) => d.properties.name),
        datasets: [
          {
            label: 'Countries',
            data: countries.map((d) => ({
              feature: d,
              value: Math.random(),
            })),
          },
        ],
      }"
      :options = "{
        showOutline: true,
        showGraticule: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xy: {
            projection: 'equalEarth',
          },
        },
      }"

  />
  <Loading v-else message="Loading Map Shapes" />

  </CCardBody>
  </CCard >

  <!-- APache echarts wordcloud is much better than this one .. don't use anymore

  <CCard>
   <CCardBody>
   <CCardTitle>Word cloud</CCardTitle>
  <CChart
    type = 'wordCloud'
    :data =  "{
        labels: ['Hello', 'world', 'normally', 'you', 'want', 'more', 'words', 'than', 'this'],
        datasets: [
          {
            label: 'DS',
            //data: [90, 80, 70, 60, 50, 40, 30, 20, 10],
            data:   [30, 25, 20, 18, 17, 15, 10,  5,  5],
          },
        ]
     }"
    :options = "{
      title: {
              display: false,
              text: 'Chart.js Word Cloud',
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }"
  />
  </CCardBody>
  </CCard >
  -->

</template>
<script>

// https://coreui.io/vue/docs/components/button.html

import { CButton } from '@coreui/vue'
import { CContainer, CCol, CRow } from '@coreui/vue'
import { CCard,CCardImage,CCardBody,CCardTitle ,CCardText} from '@coreui/vue'
import { CToast,CToaster,CToastHeader,CToastBody } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
import { CWidgetStatsB,CWidgetStatsE } from '@coreui/vue'
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
// chart stuff
import '../public/css/charts.css'
import "../public/css/coreui-chartjs.css"

import { CCallout } from '@coreui/vue'
import { CAvatar } from '@coreui/vue'
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader } from '@coreui/vue'
import '../public/css/callout.css'
import '../public/css/avatar.css'
import '../public/css/accordion.css'


import { CFormRange,CFormCheck,CFormInput, CInputGroupText, CFormLabel, CInputGroup, CFormSelect } from '@coreui/vue'
import '../public/css/range.css'
import '../public/css/check.css'
import '../public/css/ingroup.css'
import '../public/css/select.css'
import '../public/css/forms.css'
import '../public/css/validation.css'

//import '../public/css/coreui.css'



// geo: works
// we can be more specific
//import * as ChartGeo from 'chartjs-chart-geo'
import { ChoroplethChart, ChoroplethController, topojson }  from 'chartjs-chart-geo'

// wordcloud. Use echarts instead
//import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';


import { ref } from "vue"

import axios from 'axios'

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
        CChart, CWidgetStatsB,CWidgetStatsE,
        ChoroplethChart, ChoroplethController,
        CCallout,CAvatar,
        CAccordion, CAccordionItem,CAccordionBody, CAccordionHeader,
        CFormRange,CFormCheck, CFormInput,CInputGroup,CInputGroupText, 
        CFormLabel,CFormSelect,
        //CIcon,
      },
      methods: {
        createToast() {
          this.toasts.push({
            title: 'new toast',
            content: 'Lorem ipsum dolor cet emit'
          })
        },
        selected(e){
          console.log("options",e.target.selectedOptions)
        },
      },
      setup() {
        const dummy = [{properties: {name:"abc"}}]
        const countries = ref(dummy)
        const mapLoaded = ref(false)
        return { axios, countries, mapLoaded, }
      },
      async beforeMount() {
        // initialize map in before mount
        console.log("Before  mount")
        // load map data
        const url = 'https://unpkg.com/world-atlas/countries-50m.json'
        const r = await axios.get(url)
        const data = r.data
        if (r.status != 200) {
          console.log("Axios failed:",r.status)
        } else {
          console.log("Axios OK")
          //this.countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
          this.countries = topojson.feature(data, data.objects.countries).features;
        }
        // update loaded  state: chart will be mounted via v-if
        this.mapLoaded = true
        console.log("Loaded",this.mapLoaded)
      },

    }
</script>


