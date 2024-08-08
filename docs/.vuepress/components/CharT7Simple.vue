
<script setup>

import 'echarts-wordcloud';
import VChart from 'vue-echarts';
// echart stuff for vue-echarts
import { CanvasRenderer } from 'echarts/renderers';
//import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
} from 'echarts/components';

import { use } from 'echarts/core';

use([
    CanvasRenderer,
    //PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
]);

//import { VueEcharts } from 'vue3-echarts';
//import axios from 'axios'

import { ref } from 'vue';
import { onBeforeMount } from 'vue'

import DownLoad from './DownLoad.vue'
import CardComp from './CardComp.vue'

const chartData = [
    {
        name: 'Sam S Club',
        value: 10000,
        textStyle: {
            color: 'black'
        },
        emphasis: {
            textStyle: {
                color: 'red'
            }
        }
    },
    {
        name: 'Macys',
        value: 6181
    },
    {
        name: 'Amy Schumer',
        value: 4386
    },
    {
        name: 'Jurassic326234 World',
        value: 4055
    },
    {
        name: 'Charter Communications',
        value: 2467
    },
    {
        name: 'Chick Fil A',
        value: 2244
    },
    {
        name: 'Planet Fitness',
        value: 1898
    },
    {
        name: 'Pitch Perfect',
        value: 1484
    },
    {
        name: 'Express',
        value: 1112
    },
    {
        name: 'Home',
        value: 965
    },
    {
        name: 'Johnny Depp',
        value: 847
    },
    {
        name: 'Lena Dunham',
        value: 582
    },
    {
        name: 'Lewis Hamilton',
        value: 555
    },
    {
        name: 'KXAN',
        value: 550
    },
    {
        name: 'Mary Ellen Mark',
        value: 462
    },
    {
        name: 'Farrah Abraham',
        value: 366
    },
    {
        name: 'Rita Ora',
        value: 360
    },
    {
        name: 'Serena Williams',
        value: 282
    },
    {
        name: 'NCAA baseball tournament',
        value: 273
    },
    {
        name: 'Point Break',
        value: 265
    }
];

const option = ref({
    aria: {
        enabled: true,
        show: true,
        decal: {
            show: true
        },
    },
    textStyle: {
        fontFamily: "Palanquin",
    },
    title: {
        text: "Wordcloud 123456",
        left: "center",
    },
    tooltip: {},
    series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
            color: function () {
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
        },
        emphasis: {
            textStyle: {
                shadowBlur: 10,
                shadowColor: '#333',
            }
        },
        data: 
            chartData
        
    }]
}
)


const chart = ref(null)
const theme = ref("light")

const dataLoaded = ref(false)
const downData = ref([])

const setDav = () => {
    console.log("setDav done")
    dataLoaded.value = true
}

// initialize data, just for demonstration ...
onBeforeMount(() => {
    downData.value = [
        { "a": 1, "b": 2, "c": 3 },
        { "a": 4, "b": 5, "c": 8 }
    ]
    setTimeout(setDav, 1000)
    }
)

</script>

<template>
    <CardComp>
        <template #header>
            Card title
        </template>

        <template #default>
            <v-chart class="chart" :option="option" aria-role="meter" ref="theChart" :theme="theme" autoresize />
        </template>

        <template #footer v-if="dataLoaded">
            <p>Download Options</p>
            <DownLoad :download-data="downData" file-type="csv" file-name="Down" button-text="Download As CSV" />
            <DownLoad :download-data="downData" file-type="json" file-name="Down" button-text="Download As JSON" />
        </template>

    </CardComp>
</template>

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

.color-2 {
    background: #ccc;
}
</style>
