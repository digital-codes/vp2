
<template>

      <CCard>
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <div class="chart">
          
          <l-map 
              :zoom="zoom"
              :center="center"
          >

            <l-geo-json :geojson="geojson" :options="geojsonOptions" />

            <l-tile-layer
              :url="url"
              :attribution="attribution"
            />

      <l-marker :lat-lng="withPopup">
        <l-popup>
            I am a popup
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
            I am a tooltip
        </l-tooltip>
      </l-marker>


          </l-map>
          <!--
          <l-map style="height:50vh">
              <l-geo-json :geojson="geojson" :options="geojsonOptions" />
          </l-map>
          -->
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

import axios from 'axios'
import { ref } from "vue"

// leaflet stuff basically works as expected. Axios loading not tested so far
// medium-zoom must be disabled on icons

import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
import { LTileLayer, LMarker, LPopup, LTooltip } from "@vue-leaflet/vue-leaflet";

// importing from leaflet breaks build SSR! replace latLng function
//import { latLng } from "leaflet";

const latLng = function (x,y) {return {lat:x,lon:y}}

    export default {
      data:() => ({
        mapIsReady : 0,
        // new
        zoom: 13,
        center: latLng(48.9984, 8.402),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        //withPopup: latLng(48.995, 8.4),
        //withTooltip: latLng(49., 8.42),
        currentZoom: 11.5,
        currentCenter: latLng(48.9984, 8.402),
      }),
      components: {
        CCard,CCardBody,CCardTitle ,CCardText,
        LMap, LGeoJson,
        LTileLayer, LMarker, LPopup, LTooltip
      },
      async setup() {
        //const axios = axios
        const mapIsReady = ref(false)
        const geojson = ref({
          type: "FeatureCollection",
          features: [
          // ...
          ],
        })
        const geojsonOptions = ref({})
        // asyn cload marker
        /*
        const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
        // And now the Leaflet circleMarker function can be used by the options:
        geojsonOptions.value.pointToLayer = (feature, latLng) =>
          circleMarker(latLng, { radius: 8 });
        mapIsReady.value = true;
        */

        const url = "data/pois.json"
        const r = await axios.get(url)
        /*
        .then((r) => {
            console.log(r)
            console.log(r.data)
            dt.value = r.data
            console.log(dt)
            })
        */
        console.log(r)
        console.log(r.data)
        const withPopup = ref(r.data.pop)
        const withTooltip = ref(r.data.tool)
        console.log(withPopup,withTooltip)

        return { axios, withPopup, withTooltip , geojson, geojsonOptions, mapIsReady }
      },
      methods: {
        zoomUpdate(zoom) {
          this.currentZoom = zoom;
        },
        centerUpdate(center) {
          this.currentCenter = center;
        },
        innerClick() {
          alert("Click!");
        }
      }
  }
  </script>

<style>
/* 
leaflet has a high z-index which covers the navbar
reduce values and check
navbar is 20, sidebar is 10. stay below!
*/
.leaflet-pane {
  z-index: 5;
}
/* control above pane */
.leaflet-bottom, .leaflet-top {
  z-index: 6;
}


</style>

<style scoped>
.chart {
    height:400px;
}

@media (max-width: 575.98px) {
.chart {
    height:250px;
    }
}

</style>