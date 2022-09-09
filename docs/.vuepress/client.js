import { defineClientConfig } from '@vuepress/client'

// example. so far unused
// import something from somthing

// oruga datetimepicker
import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
//import './public/css/oruga-date.css'

import '@oruga-ui/oruga-next/dist/oruga-full.min.css'

//import './public/css/oruga-date.css'


import {  Button } from '@oruga-ui/oruga-next'
import {  Loading } from '@oruga-ui/oruga-next'
import {  Carousel } from '@oruga-ui/oruga-next'
import {  Icon } from '@oruga-ui/oruga-next'
import {  Notification } from '@oruga-ui/oruga-next'


import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/NotFound.vue'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// most icons needed for oruga ...
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faUser,
  faTimes,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUserSecret,
  faCalendarDays as faSolidCal,
} from "@fortawesome/free-solid-svg-icons";

import { faCalendarDays as faRegularCal} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faUser,
  faTimes,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUserSecret,
  faSolidCal,
  faRegularCal,
  faFontAwesome,
)
// import orugo to modify icons
import Oruga from "@oruga-ui/oruga-next";


export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,

  }
  ,
  enhance({ app, router, siteData }) {
    //app.use(somthing, {someOptions})
    // ...

    // fontawesome. this name must also be used for oruga
    app.component('font-awesome-icon', FontAwesomeIcon)

    /* */
    // oruga
    app.use(Oruga, {
      iconComponent: "font-awesome-icon",
      iconPack: "fas"
    })
    /* */
    app.use( Datetimepicker)
    app.use( Notification)
    app.use( Field)
    app.use( Input)
    app.use( Loading)
    app.use( Button)
    app.use( Carousel)
    app.use( Icon)

  },
  setup() {},
  rootComponents: [],
})

