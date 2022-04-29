<template>

  <CCallout color="info">
    {{ message }}
  </CCallout>

</template>

<script>
import { CCallout } from '@coreui/vue'

import '../public/css/colors.css'
import '../public/css/callout.css'

export default {
    props: ["message"],
    components: {
    CCallout,
    },
}

</script>
