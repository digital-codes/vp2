<template>
      <CCard >
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>

              <vue-echarts :option="option"  class="chart" ref="chart1" />

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

/* vue3-echarts submodule vue3-component-base has issue in index.js:
ERROR in ./node_modules/vue3-component-base/index.js 2:0-28
Module not found: Error: Can't resolve './reflect-metadata' in '/home/kugel/temp/vue/vuepressEx2/node_modules/vue3-component-base'
Did you mean 'reflect-metadata.js'?
BREAKING CHANGE: The request './reflect-metadata' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.

ERROR in ./node_modules/vue3-component-base/index.js 3:0-49
Module not found: Error: Can't resolve './helpers' in '/home/kugel/temp/vue/vuepressEx2/node_modules/vue3-component-base'
Did you mean 'helpers.js'?
BREAKING CHANGE: The request './helpers' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.



Solution:
ln -s  vue3-component-base/reflect-metadata.js vue3-component-base/reflect-metadata.js
ln -s  vue3-component-base/helpers.js vue3-component-base/helpers

*/

import { VueEcharts } from 'vue3-echarts';
import { ref } from 'vue';

import { defineComponent } from 'vue'

export default {
  name: 'Chart1',
      components: {
        CCard,CCardBody,CCardTitle ,CCardText,
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
