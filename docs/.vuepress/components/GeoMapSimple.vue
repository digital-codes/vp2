
<template>
  <CardComp>
    <template #header>
      Card title
    </template>

    <template #default>
      <div v-if="mapLoaded" class="chart" aria-label="Map" aria-description="Geographic map with popups">

        <l-map :zoom="zoom" :center="center" :minZoom="3" :maxZoom="18" :zoomAnimation="true" ref="map">

          <l-geo-json :geojson="geojson" :options="geojsonOptions" />

          <l-tile-layer :url="url" :attribution="attribution" layer-type="base" name="OpenStreetMap" />
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
        <LoaDing icon="spinner" size="xl">
        </LoaDing>
      </div>

    </template>

    <template #footer>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </template>

  </CardComp>


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

// needed since 1.9.3 ??
import * as L from "leaflet"


// importing from leaflet breaks build SSR! replace latLng function
//import { latLng } from "leaflet";

const latLng = function (x, y) { return { lat: x, lon: y } }

/* OSM
url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
attribution:
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  */


/*
stadia maps:
https://docs.stadiamaps.com/map-styles/alidade-satellite/#__tabbed_1_2

attribution:
&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>
&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>


&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>

© CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data)


tiles:
https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
https://tiles-eu.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg
https://tiles-eu.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png

*/

/* basemap.de
raster tiles
https://sgx.geodatenzentrum.de/web_public/gdz/lizenz/deu/Nutzungsbedingungen_basemapde.pdf

url: "https://sgx.geodatenzentrum.de/wmts_basemapde/tile/1.0.0/de_basemapde_web_raster_farbe/default/GLOBAL_WEBMERCATOR/{z}/{y}/{x}.png",
attribution:
'\
&copy; <a href="https://www.bkg.bund.de" target="_blank">GeoBasis-DE/BKG (' + new Date().getFullYear() +')</a>|\
<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>\
',

*/

/*
const mapUrl = "https://sgx.geodatenzentrum.de/wmts_basemapde/tile/1.0.0/de_basemapde_web_raster_farbe/default/GLOBAL_WEBMERCATOR/{z}/{y}/{x}.png"
const mapAttr = '\
&copy; <a href="https://www.bkg.bund.de" target="_blank">GeoBasis-DE/BKG (' + new Date().getFullYear() +')</a>|\
<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>\
'
*/
// https://gdz.bkg.bund.de/index.php/default/webdienste/topplusopen-produkte/wmts-topplusopen-wmts-topplus-open.html
const mapUrl = "https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png"
// © Bundesamt für Kartographie und Geodäsie (aktuelles Jahr), Datenquellen: https://sgx.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html
const mapAttr = '\
&copy; <a href="https://www.bkg.bund.de" target="_blank">GeoBasis-DE/BKG (' + new Date().getFullYear() +')</a>| \
<a href="https://www.govdata.de/dl-de/by-2-0" target="_blank">Datenlizenz Deutschland - Namensnennung - Version 2.0</a>\
'
/* alternatives:
web_grau
https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_grau/default/WEBMERCATOR/10/343/549.png
web_light
https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_light/default/WEBMERCATOR/10/343/549.png
web_light_grau
https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_light_grau/default/WEBMERCATOR/10/343/549.png

*/



export default {
  data: () => ({
    // new
    zoom: 13,
    center: latLng(48.9984, 8.402),
      url: mapUrl,
      attribution: mapAttr,
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
    const map = ref()
    return { axios, withPopup, withTooltip, geojson, geojsonOptions, mapLoaded, map }
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
    setTimeout(this.enableMap, 2000)
    console.log("Map Loaded", this.mapLoaded)
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
      console.log("Map Loaded", this.mapLoaded)
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
.leaflet-bottom,
.leaflet-top {
  z-index: 6;
}

.leaflet-control-zoom a,
.leaflet-control-zoom a:hover {
  color: unset;
  text-decoration: none !important;
}

.leaflet-control-attribution a,
.leaflet-control-attribution a:hover {
  color: unset;
  text-decoration: underline;
}
</style>

<style scoped>
.chart {
  height: 400px;
}

@media (max-width: 575.98px) {
  .chart {
    height: 250px;
  }
}
</style>
