<template>
  <CCard>
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
        <!-- -->
        <div class="ctable">
        <CTable responsive="lg">
        <CTableHead>
            <CTableRow  class="sticky-row">
            <CTableHeaderCell scope="col" class="sticky-col sticky-index">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">1</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">2</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">3</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">4</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">5</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">6</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">7</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">8</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row" class="sticky-col">9</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell>
            </CTableRow>
        </CTableBody>
        </CTable>
        </div>

        <!-- works too but needs more css
        <table class="table-responsive-sm  table-bordered" style="max-height:150px;">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
        -->
        
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
    data() {
      return {
        data: [
          {
            id: 1,
            user: { first_name: 'Jesse', last_name: 'Simmons' },
            date: '2016/10/15 13:43:27',
            gender: 'Male'
          },
          {
            id: 2,
            user: { first_name: 'John', last_name: 'Jacobs' },
            date: '2016/12/15 06:00:53',
            gender: 'Male'
          },
          {
            id: 3,
            user: { first_name: 'Tina', last_name: 'Gilbert' },
            date: '2016/04/26 06:26:28',
            gender: 'Female'
          },
          {
            id: 4,
            user: { first_name: 'Clarence', last_name: 'Flores' },
            date: '2016/04/10 10:28:46',
            gender: 'Male'
          },
          {
            id: 5,
            user: { first_name: 'Anne', last_name: 'Lee' },
            date: '2016/12/06 14:38:38',
            gender: 'Female'
          },
          {
            id: 6,
            user: { first_name: 'Sara', last_name: 'Armstrong' },
            date: '2016/09/23 18:50:04',
            gender: 'Female'
          },
          {
            id: 7,
            user: { first_name: 'Anthony', last_name: 'Webb' },
            date: '2016/08/30 23:49:38',
            gender: 'Male'
          },
          {
            id: 8,
            user: { first_name: 'Andrew', last_name: 'Greene' },
            date: '2016/11/20 14:57:47',
            gender: 'Male'
          },
          {
            id: 9,
            user: { first_name: 'Russell', last_name: 'White' },
            date: '2016/07/13 09:29:49',
            gender: 'Male'
          },
          {
            id: 10,
            user: { first_name: 'Lori', last_name: 'Hunter' },
            date: '2016/12/09 01:44:05',
            gender: 'Female'
          }
        ],
        columns: [
          {
            field: 'id',
            label: 'ID',
            width: '40',
            numeric: true,
            sticky: true,
            thAttrs: () => ({ class: 'is-sticky-column-one' }),
            tdAttrs: () => ({ class: 'is-sticky-column-one' })
          },
          {
            field: 'user.first_name',
            label: 'First Name'
          },
          {
            field: 'user.last_name',
            label: 'Last Name'
          },
          {
            field: 'date',
            label: 'Date',
            position: 'centered',
          },
          {
            field: 'gender',
            label: 'Gender'
          },
          {
            field: 'id',
            label: 'Column A'
          },
          {
            field: 'id',
            label: 'Column B'
          },
          {
            field: 'id',
            label: 'Column C'
          },
          {
            field: 'id',
            label: 'Column D'
          },
          {
            field: 'id',
            label: 'Column E'
          },
          {
            field: 'id',
            label: 'Column F'
          },
          {
            field: 'id',
            label: 'Column G'
          },
          {
            field: 'id',
            label: 'Column H'
          },
          {
            field: 'id',
            label: 'Column I'
          },
          {
            field: 'id',
            label: 'Column L'
          },
          {
            field: 'id',
            label: 'Column M'
          },
          {
            field: 'id',
            label: 'Column N'
          },
          {
            field: 'id',
            label: 'Column O'
          }
        ],
        stickyHeaders: true
      }
    }
  }
</script>

<style>


.ctable {
  max-height:200px; 
  overflow-y:auto;
  position: relative;
}

.table {
  margin-top: 0;
  display: table;
}

td, th {
  vertical-align: bottom;
  text-align: left;
}

.sticky-row {
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

/*
thead {
	position: sticky;
	top: 0;
	background: white;
}
*/

</style>
