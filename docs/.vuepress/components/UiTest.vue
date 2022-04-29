
<template>

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

  <CCard >
   <CCardBody>
   <CCardTitle>World Map</CCardTitle>
  <CChart
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
  </CCardBody>
  </CCard >

  <CCard >
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

// geo: works
import * as ChartGeo from 'chartjs-chart-geo'

// wordcloud
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';


import { ref } from "vue"

import axios from 'axios'


    export default {
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
        WordCloudController, WordElement
      },
      methods: {
        createToast() {
          this.toasts.push({
            title: 'new toast',
            content: 'Lorem ipsum dolor cet emit'
          })
        }
      },
      async setup() {
        const dummy = [{properties: {name:"abc"}}]
        const countries = ref(dummy)
        const url = 'https://unpkg.com/world-atlas/countries-50m.json'
        const r = await axios.get(url)
        if (r.status != 200) {
          console.log("Axios failed:",r.status)
        } else {
          console.log("Axios OK")
          const data = r.data
          //console.log("Data:",data)
          countries.value = ChartGeo.topojson.feature(data, data.objects.countries).features;
          //console.log("Countries:",countries.value)
        }
        /*
        axios.get(url).then((r) => {
          if (r.status != 200) {
            console.log("Axios failed:",r.status)
          } else {
            console.log("Axios OK")
            const data = r.data
            //console.log("Data:",data)
            countries.value = ChartGeo.topojson.feature(data, data.objects.countries).features;
            //console.log("Countries:",countries.value)
          }
        })
        */
        
        /*
        fetch('https://unpkg.com/world-atlas/countries-50m.json')
        .then((r) => r.json())
        .then((data) => {
          console.log("Fetch OK")
          //console.log("Geo:",ChartGeo)
          countries.value = ChartGeo.topojson.feature(data, data.objects.countries).features;
          console.log("Countries:",countries.value)
        })
        */
        return { axios, countries }
      }
    }
  </script>


