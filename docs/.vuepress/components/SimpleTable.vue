<template>
  <CardComp>
    <template #header>
        Simple Table
    </template>

    <template #default>
        <div v-if="dataLoaded" class="ctable">
        <table responsive="lg">
        <thead v-if="stickyHeader">
            <tr>
              <td v-for="(item, index) in hdrs" scope="col" :class="getHdrClass(index)">{{ item }}</td>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(row) in rows" >
            <template v-for="(item, index) in row"> 
              <template v-if="isIdxPos(index)">
                <td v-if="stickyIndex" scope="row" :class="getIdxClass()"> {{ item }} </td>
                <td v-else > {{ item }}</td>
              </template>
              <template v-else>
                <td> {{ item }}</td>
              </template>
            </template>
            </tr>
        </tbody>
        </table>
        </div>

    </template>


    <template #footer v-if="dataLoaded">
        <!-- make sure to have this disabled until data loaded else "Blob" will fail during SSR -->
        <p>Download Options</p>
        <DownLoad :download-data="rows"
            file-type="csv"
            file-name="Down"
            button-text="Download As CSV"/>
        <DownLoad :download-data="rows"
            file-type="json"
            file-name="Down"
            button-text="Download As JSON"/>
    </template>

    </CardComp>
</template>


<script>


import CardComp from './CardComp.vue'


import axios from 'axios'
import { ref } from "vue"

import DownLoad from './DownLoad.vue'


 export default {
    components: {
      CardComp,
      DownLoad,
    },
    props: {
      stickyIndex: {
        required: true,
        default: true,
      },
      stickyHeader: {
        required: true,
        default: true,
      }
    },
    methods: {
      getHdrClass(i) {
        if (i == 0) {
          if (this.stickyIndex && this.stickyHeader) return "sticky-index"
          if (!this.stickyIndex && this.stickyHeader) return "sticky-hdr"
          if (this.stickyIndex && !this.stickyHeader) return "sticky-col"
          return ""
        } else {
          return this.stickyHeader? "sticky-hdr" : ""
        }
      },
      getIdxClass() {
        return this.stickyIndex ? "sticky-col" : ""
      },
      isIdxPos(i) {
        // Note: index may be non numerical
        //console.log("Index:",i,this.hdrs)
        return (this.stickyIndex && (i==this.hdrs[0]))
      }
    },
    data() {
      return {
      }
    },
     setup() {
       // initialize parms
        const rows = ref([])
        const hdrs = ref([])
        const dataLoaded = ref(false)
        return { dataLoaded, hdrs, rows }
    },
    async beforeMount() {
        // initialize data
        let url = "/data/table.json"
        let r = await axios.get(url)
        this.rows = r.data
        console.log("Rows:",this.rows)
        // extract keys from item 0
        this.hdrs = Object.keys(this.rows[0])
        console.log("Hdrs:",this.hdrs)
        // update loaded  state: chart will be mounted via v-if
        this.dataLoaded = true
        console.log("Loaded",this.dataLoaded)
    },
  }
</script>

<style>


.ctable {
  max-height:200px; 
  overflow-y:auto;
  position: relative;
}

table {
  border-collapse: separate;
  border-spacing: 2px;
  margin-top: 0;
  display: table;
  min-width: 100%;
}

td, th {
  vertical-align: bottom;
  text-align: left;
  border: solid 1px rgba(0,0,0,.2);
}

.sticky-hdr {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  z-index:3;
}

.sticky-col {
  position: -webkit-sticky;
  position: sticky;
  background: white;
  left:0;
  z-index: 4;
}

.sticky-index {
  z-index: 5;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left:0;
  background: yellow;
}


</style>
