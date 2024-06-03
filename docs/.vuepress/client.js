import { defineClientConfig } from 'vuepress/client'


// additonal fonts
import './public/css/fonts.css'


// example. so far unused
// import something from somthing

// import oruga, will not work otherwise.
// icons can be configured later
import Oruga from "@oruga-ui/oruga-next";
// import Oruga theme styling
// minimal or full ...
// import '@oruga-ui/theme-oruga/dist/oruga.css'
// import '@oruga-ui/theme-oruga/dist/oruga-full.min.css'
// theme 0.3.0 changes to oruga.min.css
import '@oruga-ui/theme-oruga/dist/oruga.css'

// oruga customization  see 
// https://oruga-ui.com/documentation/themes
import "./public/css/oruga-override.css"

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
  faChevronLeft,
  faChevronRight,
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
  faChevronLeft,
  faChevronRight,
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


// if using formkit

import { plugin as formPlugin } from '@formkit/vue'
import { defaultConfig as formConfig } from '@formkit/vue'
import formCfg from './formConfig.js'
// see https://formkit.com/essentials/internationalization
// for changing formkit locales
console.log(formCfg)

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    //app.use(somthing, {someOptions})
    // ...

    // fontawesome. this name must also be used for oruga
    app.component('font-awesome-icon', FontAwesomeIcon)

    // oruga
    // also set icons here
    app.use(Oruga, {
      iconPack:"fas",
      iconComponent:"font-awesome-icon",
    })

    // formkit
    app.use(formPlugin, formConfig(formCfg))

  },
  setup() {},
  rootComponents: [],
  layouts: {
    Layout,
    NotFound,

  },
})

