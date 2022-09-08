import { defineClientConfig } from '@vuepress/client'

// example. so far unused
// import something from somthing

// oruga datetimepicker
import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import './public/css/oruga-date.css'


// coreicons
// https://coreui.io/vue/docs/components/icon.html#cicon
import { CIcon } from '@coreui/icons-vue';
//import {  } from '@coreui/icons';
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
  cilList, 
  cilShieldAlt, 
  cibGithub,
  cibVueJs,
  cilSignalCellular3,
  cilShareAlt,
  cilSend,
  cilSearch,
  cilWifiSignal3,
  cilPeople,
  cilRss,
  cilEnvelopeClosed,
  cilAccountLogout,
  cilAt,
  cilContact,
  cilGraph,
  cilImage,
  cilLifeRing,
  cilLinkAlt,
  cilListFilter,
  cilTag,
  cilTrash,
  cilUser,
  cibCreativeCommons,
  cibCreativeCommonsBy,
  cibIonic,
  cibCoreuiC,
  cibLinux,
  cifDe,
  cifUs,
} from '@coreui/icons'

const icons = {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
  cilList, 
  cilShieldAlt, 
  cibGithub,
  cibVueJs,
  cilSignalCellular3,
  cilShareAlt,
  cilSend,
  cilSearch,
  cilWifiSignal3,
  cilPeople,
  cilSend,
  cilSearch,
  cilRss,
  cilEnvelopeClosed,
  cilAccountLogout,
  cilAt,
  cilContact,
  cilGraph,
  cilImage,
  cilLifeRing,
  cilLinkAlt,
  cilListFilter,
  cilTag,
  cilTrash,
  cilUser,
  cibCreativeCommons,
  cibCreativeCommonsBy,
  cibIonic,
  cibCoreuiC,
  cibLinux,
  cifDe,
  cifUs,
}
// coreicons styles
import './public/css/cicons.css'

//import '@coreui/coreui/dist/css/coreui.min.css'
import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/NotFound.vue'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays as faSolidCal} from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays as faRegularCal} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(faUserSecret)
library.add(faSolidCal)
library.add(faRegularCal)
library.add(faFontAwesome)





export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,

  }
  ,
  enhance({ app, router, siteData }) {
	//app.use(somthing, {someOptions})
  // ...

  // oruga
  app.use( Datetimepicker)
  app.use( Field)
  app.use( Input)

  // coreicons
  app.provide('icons', icons)
  app.component('CIcon', CIcon) 
  
  // fontawesome
  app.component('font-awesome-icon', FontAwesomeIcon)

  },
  setup() {},
  rootComponents: [],
})

