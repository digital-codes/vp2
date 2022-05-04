<template>
  <CCard>
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
        <!-- -->
        <div class="ctable">
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

import { CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/vue'
//import '../public/css/tables.css'

 export default {
    components: {
      CCard,CCardBody,CCardTitle ,CCardText, 
      CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell
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
        hdrs: ["A","B","C","D","E","F","G","H","I"],
        rows: [
          {
            A: 1,
            B: '2016/10/15 13:43:27',
            C: 'Male',
            D: 1,
            E: '2016/10/15 13:43:27',
            F: 'Male',
            G: 1,
            H: '2016/10/15 13:43:27',
            I: 'Male'
          },
          {
            A: 2,
            B: '2016/12/15 06:00:53',
            C: 'Male',
            D: 1,
            E: '2016/10/15 13:43:27',
            F: 'Male',
            G: 1,
            H: '2016/10/15 13:43:27',
            I: 'Male'

          },
          {
            A: 3,
            B: '2016/04/26 06:26:28',
            C: 'Female',
            D: 1,
            E: '2016/10/15 13:43:27',
            F: 'Male',
            G: 1,
            H: '2016/10/15 13:43:27',
            I: 'Male'

          },
          {
            A: 4,
            B: '2017/04/26 06:26:28',
            C: 'Diverse',
            D: 1,
            E: '2016/10/15 13:43:27',
            F: 'Male',
            G: 1,
            H: '2016/10/15 13:43:27',
            I: 'Male'

          },
        ],
      }
    },
    async beforeMount() {

    }
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
