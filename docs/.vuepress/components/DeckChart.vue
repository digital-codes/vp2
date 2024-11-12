<template>
    <CardComp >
    <template #header>
        Bike Chart
    </template>

    <template #default>
        <div class="chart" ref="deck" >
            <canvas class="cv" ref="cv">
            </canvas>
        </div>
    </template>

    <!-- 
    <template #footer>
        Dynamic card using deck.gl and OSM tiles, &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
    </template>
    -->
    <template #footer>
        Dynamic card using deck.gl and OSM tiles, 
      &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>|
      &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>|
      &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>

    </template>

    </CardComp >

</template>

<script>
import CardComp from './CardComp.vue'

import { ref } from 'vue';

import { defineComponent } from 'vue'

import { Deck } from '@deck.gl/core';
import { TripsLayer } from '@deck.gl/geo-layers';
//import { ScatterplotLayer } from '@deck.gl/layers';
//import { PolygonLayer } from '@deck.gl/layers';
import { BitmapLayer } from '@deck.gl/layers';
import { TileLayer } from '@deck.gl/geo-layers';
import { TextLayer } from '@deck.gl/layers';

import { MapView } from '@deck.gl/core';


const C_INITIAL_VIEW_STATE = {
  longitude: 8.4013, // -122.4,
  latitude: 49.0045, // 37.74,
  zoom: 12,
  minZoom: 0,
  maxZoom: 19,
  pitch: 0, // (Number, optional) - pitch angle in degrees. Default 0 (top-down). was 30
  bearing: 0 //  (Number, optional) - bearing angle in degrees. Default 0 (north).
};


const C_LABEL_VIEW_STATE = {
  longitude: C_INITIAL_VIEW_STATE.longitude, // - .1, // -122.4,
  latitude: C_INITIAL_VIEW_STATE.latitude, // + .01, // 37.74,
  zoom: 11,
  minZoom: 11,
  maxZoom: 11,
  pitch: 0, // (Number, optional) - pitch angle in degrees. Default 0 (top-down). was 30
  bearing: 0 //  (Number, optional) - bearing angle in degrees. Default 0 (north).
};



export default defineComponent({
      components: {
        CardComp,
    },
    data ()  {
        return { }
    },
    methods: {
        async mkLabel(lbl = "Jahr ...") {
            const txt = lbl.toString()
            const labels = await new TextLayer({
                // using the id has led to a type error on rc7 with vue3.4
                // id: 'TextLayer',
                data: [
                {
                    name: txt,
                    coordinates: [this.LABEL_VIEW_STATE.longitude, this.LABEL_VIEW_STATE.latitude]
                },
                ],
                pickable: false,
                getPosition: d => d.coordinates,
                getText: d => d.name,
                getSize: 24,
                getAngle: 0,
                getTextAnchor: 'middle',
                getAlignmentBaseline: 'center',
                background: true,
                getBackgroundColor: d => [255,255,255,200],
            })
            return labels
        },
        async mkTrips(tm = 500) {
            const trips = await new TripsLayer({
                id: 'TripsLayer',
                data: this.tripData, //'/data/lanes.json', // trips2.json', // sf-trips.json',

                /* props from TripsLayer class */

                currentTime: tm,
                //fadeTrail: false, // default: true
                // modify timetamps
                //getTimestamps: d => d.waypoints.map(p => p.timestamp - 1554772579000),
                getTimestamps: d => d.waypoints.map(p => p.timestamp),
                //getColor: [253, 128, 93],
                // can use color from trip, don't neet color per point
                getColor: d => d.color, // d.waypoints.map(p => p.color),
                trailLength: 600,

                /* props inherited from PathLayer class */

                // billboard: false,
                capRounded: true,
                getPath: d => d.waypoints.map(p => p.coordinates),
                // getWidth: 1,
                jointRounded: true,
                // miterLimit: 4,
                // rounded: true,
                // widthMaxPixels: Number.MAX_SAFE_INTEGER,
                widthMinPixels: 8,
                opacity: 0.8,
            });
            return trips
        },
        layerFilter({ layer, viewport }) {
            if (viewport.id === 'label' && layer.id === 'TripsLayer') {
                // Exclude layer on view
                return false;
            }
            if (viewport.id === 'label' && layer.id === 'TileLayer') {
                return false;
            }
            if (viewport.id === 'map' && layer.id === 'TextLayer') {
                return false;
            }
            //console.log("Filter:",layer,viewport)
            return true;
        },
        async animate() {
            if (this.tm < (this.stopYear - this.startYear + 1) * 52) {
                this.tm += this.speed / 10 // speed is int, scale here
                //console.log("Current:",tm)
                const trips = await this.mkTrips(this.tm)
                // time is in weeks, first year is 2012
                const year = Math.floor(this.startYear + this.tm / 52)
                const labels = await this.mkLabel(year)
                //deckgl.setProps({layers: [tiles, trips, scatter, bmap, bg]});
                await this.deckgl.setProps({ layers: [this.tiles, trips, labels] });
                setTimeout(this.animate, 100)
            } else {
                this.tm = this.startWeek
                console.log("Restart from ", this.tm)
                setTimeout(this.animate, 100)
            }
        }


    },
    async beforeMount() {
        try {
            const response = await fetch("/data/lanes.json")
            if (!response.ok) {
                alert("Fetch failed: ", response.status)
                return
            } else {
                const data = await response.json()
                console.log("Data: ",data)
                this.tripData = data
                this.startYear = data[0].year
                this.startWeek = data[0].week
                this.stopYear = data[data.length - 1].year
                console.log("Start/stop:", this.startYear, this.stopYear)
            }
        } catch (e) {
            alert("Error " + e.message)
            return
        }
        console.log("Fetch completed")

        this.tiles = await new TileLayer({
        // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
        id: 'TileLayer',
        //data: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        data: 'https://tiles-eu.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}@2x.png',

        zoom: this.INITIAL_VIEW_STATE.zoom,
        minZoom: this.INITIAL_VIEW_STATE.minZoom,
        maxZoom: this.INITIAL_VIEW_STATE.maxZoom,
        tileSize: 256,

        /*
        one tile for center plus adjacent rows and columns
        e.g. 512*256 => 6 tiles: 1 center plus 5 surroundings 
        */

        renderSubLayers: props => {
            const {
            bbox: { west, south, east, north }
            } = props.tile;

            return new BitmapLayer(props, {
                data: null,
            image: props.data,
            bounds: [west, south, east, north]
            });
        }
        })
        console.log("Tiles",this.tiles)

        this.deckgl = await new Deck({
            // The container to append the auto-created canvas to.
            parent: this.deck, // document.getElementById("#deck"), //document.body,
            canvas: this.cv, // document.getElementById("#cv"), // unset
            //width: 100%, //"1280px",
            //height: "400px", //"720px",
            initialViewState: this.INITIAL_VIEW_STATE,
            controller: { dragRotate: false }, //true,
            layerFilter: this.layerFilter,
            layers: [this.tiles],
            views: [
                new MapView({
                id: "map",
                initialViewState: this.INITIAL_VIEW_STATE,
                controller: { dragRotate: false },
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
                }),
                new MapView({
                id: "label",
                x: 0,
                y: 0,
                width: "100px",
                height: "30px",
                initialViewState: this.LABEL_VIEW_STATE,
                controller: false,
                }),
            ]
        })
        console.log("Deck: ", this.deckgl)

        setTimeout(this.animate, 1000) // start animation

    },
    setup() {
        const deck = ref(null)
        const cv = ref(null)
        const tiles = ref(null)
        const tripData = ref([])
        const startYear = ref(0)
        const stopYear = ref(0)
        const startWeek = ref(0)
        const tm = ref(0)
        const speed = ref(50)
        const INITIAL_VIEW_STATE = ref(C_INITIAL_VIEW_STATE)
        const LABEL_VIEW_STATE = ref(C_LABEL_VIEW_STATE)
        const deckgl = ref(null)

        return { cv, deckgl, deck, tiles, tripData, 
        startYear, stopYear, startWeek, tm, speed, 
        INITIAL_VIEW_STATE,LABEL_VIEW_STATE,
        }
    },
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chart {
    position:relative;
    width: 100%;
    height: 400px;
}

.cv {
    /* default settings for w and h, needed? */
    width: 100%;
    height: 100%;
    /**/
    border: 1px solid slategray;
    overflow: hidden;
    /* transform, if required 
    transform: scale(.5);
    */
    transform-origin: left top 0px;
}



@media (max-width: 575.98px) {
.chart {
    height:250px;
    }
}


</style>
