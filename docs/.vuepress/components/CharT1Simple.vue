<template>
    <CardComp >
    <template #header>
        Card title
    </template>

    <template #default>
        <vue-echarts :option="option"  class="chart" ref="chart1" />
    </template>

    <template #footer>
            Some quick example text to build on the card title and make up the bulk of the card's content.
    </template>

    </CardComp >

</template>

<script>
import CardComp from './CardComp.vue'

import { VueEcharts } from 'vue3-echarts';
import { ref } from 'vue';

import { defineComponent } from 'vue'

export default {
      components: {
        CardComp,
        VueEcharts,
    },
    data ()  {
        return {
        option: {
            title: {
                text: "Gauge",
                left: "center"
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
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
