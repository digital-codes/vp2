
<template>
    <CardComp >
    <template #header>
        Card title
    </template>

    <template #default>
          <div v-if="mapLoaded" 
            class="chart"
            aria-label="Map"
            aria-description="Geographic map with popups"
          >
          
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
          <div v-else>
            <LoaDing 
                icon="spinner"
                size="xl"
            >
            </LoaDing>
          </div>

    </template>

    <template #footer>
            Some quick example text to build on the card title and make up the bulk of the card's content.
    </template>

    </CardComp >


</template>


<script>


import CardComp from './CardComp.vue'

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
        CardComp,
        LMap, LGeoJson,
        LTileLayer, LMarker, LPopup, LTooltip
      },
      setup() {
        // load data in asyn  beforeMount ..
        const mapLoaded = ref(false)
        const geojson = ref({
          type: "FeatureCollection",
          features: [
          // ...
          ],
        })
        const geojsonOptions = ref({})
        const withPopup = ref(null)
        const withTooltip = ref(null)
        return { axios, withPopup, withTooltip , geojson, geojsonOptions, mapLoaded }
      },
      async beforeMount() {
          // initialize map in before mount
          console.log("Before mount")
          // load map data
          const url = "data/pois.json"
          const r = await axios.get(url)
          this.withPopup = r.data.pop
          this.withTooltip = r.data.tool
          //
          // this.mapLoaded = true
          setTimeout(this.enableMap,2000)
          console.log("Map Loaded",this.mapLoaded)
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
        },
        enableMap() {
          console.log("Enable map")
          this.mapLoaded = true
          console.log("Map Loaded",this.mapLoaded)
        },
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

.leaflet-control-attribution a, 
.leaflet-control-attribution a:hover {
  color:unset;
  text-decoration: none;
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
