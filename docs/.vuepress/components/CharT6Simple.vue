<template>
    <CardComp>
        <template #header>
            Card title
        </template>

        <template #default>
            <v-chart v-if="mapLoaded" class="chart" :option="option" autoresize aria-role="chart" ref="theChart"
                :theme="theme"  />
            <LoaDing v-else size="xl" icon="spinner">
            </LoaDing>
        </template>

        <!--
    <template #footer v-if="dataLoaded">
        Download Options
        <DownLoad :download-data="rows"
            file-type="csv"
            file-name="Down"
            button-text="Download As CSV"/>
        <DownLoad :download-data="rows"
            file-type="json"
            file-name="Down"
            button-text="Download As JSON"/>
    </template>
-->
        <template #footer>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </template>

    </CardComp>


</template>

<script setup>
import axios from 'axios'

import VChart from 'vue-echarts';
import LoaDing from './LoaDing.vue'

// echart stuff for vue-echarts
import { CanvasRenderer } from 'echarts/renderers';
//import { PieChart } from 'echarts/charts';
import {
    GeoComponent,
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    VisualMapComponent,
} from 'echarts/components';
import { MapChart } from 'echarts/charts'
import { use, registerMap } from 'echarts/core';

use([
    CanvasRenderer,
    //PieChart,
    GeoComponent,
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    VisualMapComponent,
    MapChart,
]);



import { ref, onBeforeMount, onUnmounted } from 'vue';

import CardComp from './CardComp.vue'

/*
with a custom map it is better to load shapes and data asynchronously
this needs the "v-if" construct, which in turn needs a default initialisation
and the dynamic update features.
Note: the "ref" in v-if is only valid after the condition has become true (stuff has been loaded)
so we  need to place the dynamic update in berforeMounted to show the initial map

Later on, we can do further updates, example here with fakeUpdate()

*/

const option = ref({
    aria: {
        enabled: true,
        show: true,
        decal: {
            show: false,
            decals: {
                size: .5,
                symbol: 'diamond',
                //symbol: ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none']
            }
        },
    },
    textStyle: {
        fontFamily: "Palanquin",
    },
    title: {
        text: 'World map 136',
        subtext: 'Data 1360 from www.census.gov',
        sublink: 'http://www.census.gov/popest/data/datasets.html',
        left: 'center',

    },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
            const value = (params.value + '').split('.');
            const valueStr = value[0].replace(
                /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
                '$1,'
            );
            return params.seriesName + '<br/>' + params.name + ': ' + valueStr;
        }
    },
    visualMap: {
        left: 'left',
        top: "center",
        min: 1,
        max: 1000,
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        },
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            name: 'Country map',
            type: 'map',
            roam: true,
            map: 'Countries',
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [],
        }
    ]
}
)

const theChart = ref(null)
const theme = ref("light")

const fakeTimer = ref(null)


const mapLoaded = ref(false)

onBeforeMount(async () => {
    // initialize map in before mount
    console.log("Before  mount")
    // load map data
    let url = "data/country-data.json"
    let r = await axios.get(url)
    const data = r.data
    // update series[0] data
    option.value.series[0].data = data
    // console.log("New options:", this.options)
    // load map
    url = "data/countries.json"
    r = await axios.get(url)
    const geo = r.data
    console.log(geo)
    // register the  map 
    await registerMap('Countries', { geoJSON: geo })
    // update loaded  state: chart will be mounted via v-if
    // immediate or delayed update ...
    mapLoaded.value = true
    /*
    fakeTimer.value = setTimeout(() => {
        mapLoaded.value = true
        fakeTimer.value = null
    }, 10000);
    */
    console.log("Loaded")
})


onUnmounted(() => {
    // clear fake update timer
    console.log("Unmounted")
    if (fakeTimer.value !== null) 
        clearInterval(fakeTimer.value)
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
    height: 100%;
}

.chart {
    height: 400px;
}

@media (max-width: 575.98px) {
    .chart {
        height: 250px;
    }
}
</style>
