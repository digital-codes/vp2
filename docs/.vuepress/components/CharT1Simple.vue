<template>
    <CardComp>
        <template #header>
            Card title
        </template>

        <template #default>
            <v-chart class="chart" :option="option" aria-role="meter" ref="theChart" :theme="theme" autoresize />
        </template>

        <template #footer>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </template>

    </CardComp>

</template>

<script setup>
import CardComp from './CardComp.vue'

import VChart from 'vue-echarts';
// echart stuff for vue-echarts
import { CanvasRenderer } from 'echarts/renderers';
//import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import {GaugeChart} from 'echarts/charts';
import { use } from 'echarts/core';

use([
    CanvasRenderer,
    //PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GaugeChart,
]);


import { ref } from 'vue';

const option = ref({
    aria: {
        enabled: true,
        show: true
    },
    textStyle: {
        fontFamily: "Palanquin",
    },
    title: {
        text: "Gauge 1360",
        left: "center",
    },
    series: [
        {
            type: 'gauge',
            progress: {
                show: true,
                width: 18
            },
            axisLine: {
                lineStyle: {
                    width: 18
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 25,
                color: '#999',
                fontSize: 20
            },
            anchor: {
                show: true,
                showAbove: true,
                size: 25,
                itemStyle: {
                    borderWidth: 10
                }
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                fontSize: 80,
                offsetCenter: [0, '70%']
            },
            data: [
                {
                    value: 70
                }
            ]
        }
    ]
}
)
const theChart = ref(null)
const theme = ref("light")

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
