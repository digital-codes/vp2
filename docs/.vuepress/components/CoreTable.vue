<template>
  <CCard>
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
        <!-- -->
        <div v-if="dataLoaded" class="ctable">
        <CTable responsive="lg">
        <CTableHead v-if="stickyHeader">
            <CTableRow>
              <CTableHeaderCell v-for="(item, index) in hdrs" scope="col" :class="getHdrClass(index)">{{ item }}</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow  v-for="(row) in rows" >
            <template v-for="(item, index) in row"> 
              <template v-if="isIdxPos(index)">
                <CTableHeaderCell v-if="stickyIndex" scope="row" :class="getIdxClass()"> {{ item }} </CTableHeaderCell>
                <CTableDataCell v-else > {{ item }}</CTableDataCell>
              </template>
              <template v-else>
                <CTableDataCell> {{ item }}</CTableDataCell>
              </template>
            </template>
            </CTableRow>
        </CTableBody>
        </CTable>
        </div>
        
      <CCardText>Some quick example 
        text to build on the card title and make up the bulk of the card's content.
      </CCardText>
      <CCardSubtitle v-if="dataLoaded">
        <!-- make sure to have this disabled until data loaded else "Blob" will fail during SSR -->
        <DownLoad :download-data="rows"
            file-type="csv"
            file-name="Down"
            button-text="Download As CSV"/>
        <DownLoad :download-data="rows"
            file-type="json"
            file-name="Down"
            button-text="Download As JSON"/>
      </CCardSubtitle>
    </CCardBody>
  </CCard>
</template>


<script>

import { CCard,CCardBody,CCardTitle, CCardSubtitle, CCardText} from '@coreui/vue'
import '../public/css/colors.css'
import '../public/css/positions.css'
import '../public/css/card.css'
import '../public/css/modals.css'
import '../public/css/container.css'

import { CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/vue'

import axios from 'axios'
import { ref } from "vue"

import DownLoad from './DownLoad.vue'


 export default {
    components: {
      CCard,CCardBody,CCardTitle ,CCardSubtitle, CCardText, 
      CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell,
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
