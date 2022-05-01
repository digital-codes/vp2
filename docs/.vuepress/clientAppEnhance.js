import { defineClientAppEnhance } from '@vuepress/client'

// example. so far unused
// import something from somthing

import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import './public/css/oruga-date.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
	//app.use(somthing, {someOptions})
  // ...
  // oruga
  app.use( Datetimepicker)
  app.use( Field)
  app.use( Input)
})

