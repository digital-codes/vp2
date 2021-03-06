import { defineClientAppEnhance } from '@vuepress/client'

// import something from somthing

// oruga datetimepicker
import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
import './public/css/oruga-date.css'

// oruga table
// oruga table has issues ..
//import {  Table } from '@oruga-ui/oruga-next'
//import './public/css/oruga-table.css'


// MDIcons
// https://github.com/Templarian/MaterialDesign
// https://github.com/google/material-design-icons
// => https://fonts.google.com/icons?icon.set=Material+Icons
// https://www.npmjs.com/package/vue-material-design-icons
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CalendarMonth from 'vue-material-design-icons/CalendarMonth.vue';
import './public/css/mdi-styles.css';

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



export default defineClientAppEnhance(({ app, router, siteData }) => {
	//app.use(somthing, {someOptions})
  // ...
  // oruga
  app.use( Datetimepicker)
  app.use( Field)
  app.use( Input)
  // oruga table has issues ..
  // app.use( Table)


  // MDIcons
  app.component('menu-icon', MenuIcon);
  app.component('calendar-icon', CalendarMonth);
  
  // coreicons
  app.provide('icons', icons)
  app.component('CIcon', CIcon)  
})

