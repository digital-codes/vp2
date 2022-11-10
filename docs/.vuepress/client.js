import { defineClientConfig } from '@vuepress/client'

// example. so far unused
// import something from somthing

// additonal fonts
import './public/css/fonts.css'

/*
// oruga datetimepicker
import {  Datetimepicker, Field, Input,  } from '@oruga-ui/oruga-next'
//import './public/css/oruga-date.css'

import '@oruga-ui/oruga-next/dist/oruga-full.min.css'

//import './public/css/oruga-date.css'
*/

import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/NotFound.vue'


// fontawesome
// see also https://fontawesome.com/docs/web/use-with/vue/style
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
  faGear,
  faSpinner,
  faRotate,
  faArrowsRotate,
  faCalendarDays as faSolidCal,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { faCalendarDays as faRegularCal} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome, faGithub, faTwitter, faLinkedin, faLinux  } from '@fortawesome/free-brands-svg-icons'


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
  faGear,
  faSpinner,
  faRotate,
  faArrowsRotate,
  faFontAwesome,
  faGithub,
  faTwitter,
  faLinkedin,
  faLinux,
  faUpload,
)

// import oruga, will not work otherwise.
// icons can be configured later
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

    // oruga
    app.use(Oruga)

  },
  setup() {},
  rootComponents: [],
})

