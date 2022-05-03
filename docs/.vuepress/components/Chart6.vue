<template>
  <!-- need class for container div to set 100% height 
  (div needed for v-if on chart) 
  -->
      <CCard >
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>

            <vue-echarts v-if="mapLoaded" 
                :option="options" class="chart" autoresize ref="chart" 
            />
            <Loading v-else />

          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
        </CCardBody>
      </CCard>


</template>

<script>

import * as echarts from 'echarts';
import { VueEcharts } from 'vue3-echarts';
import axios from 'axios'


import { ref } from 'vue';

import { CCard,CCardBody,CCardTitle ,CCardText} from '@coreui/vue'
import '../public/css/colors.css'
import '../public/css/positions.css'
import '../public/css/card.css'
import '../public/css/modals.css'
import '../public/css/container.css'

/*
with a custom map it is better to load shapes and data asynchronously
this needs the "v-if" construct, which in turn needs a default initialisation
and the dynamic update features.
Note: the "ref" in v-if is only valid after the condition has become true (stuff has been loaded)
so we  need to place the dynamic update in berforeMounted to show the initial map

Later on, we can do further updates, example here with fakeUpdate()

*/

const chartOptions  = {
    title: {
        text: 'World map',
        subtext: 'Data from www.census.gov',
        sublink: 'http://www.census.gov/popest/data/datasets.html',
        left: 'right'
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
        top:"center",
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



export default {
    components: {
        VueEcharts, 
        CCard,CCardBody,CCardTitle ,CCardText,
    },
    data ()  {
        return {
        }
    },
    methods: {
        fakeUpdate() {
            console.log("Fake update")
            if ((this.$refs.chart || "") !== ""){
                this.options.series[0].data[104].value = Math.random()*500
                this.$refs.chart.refreshOption()
                setTimeout(this.fakeUpdate, 3000)
            } else {
                console.log("Fake terminated")
            }
        },
    },
     setup() {
        // https://echarts.apache.org/en/option.html#geo.map
        /* could load everything from local constants ...
        echarts.registerMap('USA', {geoJSON: map})
        console.log("Registered")
        */
        const chart = ref(null)
        const options = ref(chartOptions)
        const mapLoaded = ref(false)
        return { chart, options, echarts, mapLoaded }
    },
    async beforeMount() {
        // initialize map in before mount
        console.log("Before  mount")
        // load map data
        let url = "data/country-data.json"
        let r = await axios.get(url)
        const data = r.data
        // update series[0] data
        this.options.series[0].data = data
        // console.log("New options:", this.options)
        // load map
        url = "data/countries.json"
        r = await axios.get(url)
        const geo = r.data
        // console.log(geo)
        // register the  map 
        await this.echarts.registerMap('Countries', {geoJSON: geo})
        // update loaded  state: chart will be mounted via v-if
        this.mapLoaded = true
        console.log("Loaded",this.mapLoaded)
    },
    mounted() {
        // start fake update after initial delay
        console.log("mounted. Starting fake update")
        setTimeout(() => {
            this.fakeUpdate()
        }, 5000);
    },
    watch: {
        // just to demonstrate dynamic updates
        /*
        mapLoaded(x)  {
            console.log("Loaded watched")
            setTimeout(() => {
                this.fakeUpdate()
            }, 5000);
        },
        */
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
    height: 100%;
}

.chart {
    height:400px;
}

@media (max-width: 575.98px) {
.chart {
    height:250px;
    }
}


</style>
