<template>

  <CCallout color="info">

    <CSpinner/>

    {{ message }}


  </CCallout>


</template>

<script>
import { CCallout } from '@coreui/vue'
import { CSpinner } from '@coreui/vue'

import '../public/css/colors.css'
import '../public/css/callout.css'
import '../public/css/spinner.css'

export default {
    props: ["message"],
    components: {
    CCallout,CSpinner
    },
}

</script>
