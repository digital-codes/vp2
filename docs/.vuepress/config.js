import { defineUserConfig } from 'vuepress'

import { path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
//import { palettePlugin } from '@vuepress/plugin-palette'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { localTheme } from './theme'
//import { defaultTheme } from '@vuepress/theme-default'

import footnote from "markdown-it-footnote"

import { viteBundler } from '@vuepress/bundler-vite'
// import { visualizer } from "rollup-plugin-visualizer";


import { sitemapPlugin } from "@vuepress/plugin-sitemap";


/*
CommonJS modules can always be imported via the default export, for example using:
import pkg from 'markdown-it-footnote';
const { footnote } = pkg;
*/


export default defineUserConfig({
  dest: "./dist",
  temp: "./temp",
  cache: "./cache",
  lang: 'de-DE',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // fonts, if not loaded via scss/css
    // don't load from external gogle due to GDPR "abmahngefahr"
    /*
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@200;400;600&display=swap" rel="stylesheet"> 
    or 
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Palanquin:wght@200;400;600&display=swap');
    </style> 
    or use font faces in index.scss

    CSS rules to specify families
    font-family: 'Palanquin', sans-serif;
    */
    /*
    ["link", {rel:"preconnect",href:"https://fonts.googleapis.com"}],
    ["link", {rel:"preconnect",href:"https://fonts.gstatic.com"}],
    ["link", {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Palanquin:wght@200;400;600&display=swap"}],
    */
    // devtools
    //["script", { src: "http://localhost:8098" }],
    // ...other tags
    // accessibility
    //["script", { src: "/js/tota11y.min.js"}],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE',
      title: 'Hello, VuePress!',
      description: 'OK Lab Karlsruhe Website',
      selectLanguageName: 'German',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress US',
      description: 'Vue-powered Static Site Generator',
      selectLanguageName: 'English',
    },
  },

  //theme: defaultTheme(),
  /* */
  theme: localTheme({
    // default theme config
    logo: "images/img.png",
    logoDark: "images/img.png",
    locales: {
      '/': {
        selectLanguageName: 'German',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'News', link: '/news' },
          //{ text: 'UI', children: [
          //  { text: 'Simple', link: '/simple' },
          //  { text: 'Oruga', link: '/oruga' }
          //  ]
          //},
        ],
        sidebar: false,
        notFound: ["Nix gefunden ..."],
        backToHome: "Heim",
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'About', link: '/about' },
        ],
        notFound: ["Sorry, we didn't find the page ..."],
        backToHome: "Back",
      },
    },
    /* theme plugins:  zoom config here doesn't work*/
    themePlugins: {
      // options here ...
      mediumZoom: false
    }
  }),
  /* */
  extendsMarkdown: (md) => {
    md.use(footnote)
  },
  plugins: [
    [
      registerComponentsPlugin({
        components: {
          FaIcon: path.resolve(__dirname, './components/FaIcon.vue'),
          LoaDing: path.resolve(__dirname, './components/LoaDing.vue'),
          CarouSel: path.resolve(__dirname, './components/CarouSel.vue'),
          CarouSel2: path.resolve(__dirname, './components/CarouSel2.vue'),
          OrugaDatePick: path.resolve(__dirname, './components/OrugaDatePick.vue'),
          OrugaNotify: path.resolve(__dirname, './components/OrugaNotify.vue'),
          OrugaUpload: path.resolve(__dirname, './components/OrugaUpload.vue'),
          OrugaDrop: path.resolve(__dirname, './components/OrugaDrop.vue'),
          DownLoad: path.resolve(__dirname, './components/DownLoad.vue'),
          //
          CardComp: path.resolve(__dirname, './components/CardComp.vue'),
          MdCard: path.resolve(__dirname, './components/MdCard.vue'),
          SimpleTable: path.resolve(__dirname, './components/SimpleTable.vue'),
          FlexContainer: path.resolve(__dirname, './components/FlexContainer.vue'),
          BikeDeck: path.resolve(__dirname, './components/DeckChart.vue'),
          CharT1S: path.resolve(__dirname, './components/CharT1Simple.vue'),
          CharT5S: path.resolve(__dirname, './components/CharT5Simple2.vue'),
          CharT6S: path.resolve(__dirname, './components/CharT6Simple.vue'),
          CharT7S: path.resolve(__dirname, './components/CharT7Simple.vue'),
          GeoMapS: path.resolve(__dirname, './components/GeoMapSimple.vue'),
          VideoCardS: path.resolve(__dirname, './components/VideoCardSimple.vue'),
          //
          NewsItem: path.resolve(__dirname, './components/NewsItem.vue'),
          //
          VueDatePick: path.resolve(__dirname, './components/VueDatePick.vue'),
          //
          ImageCompare: path.resolve(__dirname, './components/ImageCompare.vue'),
          // Formkit
          FormTest: path.resolve(__dirname, './components/FormTest.vue'),
          // JsFomrs
          JsForm: path.resolve(__dirname, './components/JsForm.vue'),
        },
      }),
    ],
    /*
    [
      palettePlugin({
        // options
      }),
    ],
    */
    [
      mediumZoomPlugin({
        selector: 'img.zoomable',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      })
    ],
    /* */
    [
      sitemapPlugin({
        // your options
        hostname: "vp2.akugel.de",
      }),
    ]
    /* */
  ],
  // bundler options ...
  // SSR now work with vite default settings
  bundler: viteBundler(
    {
      viteOptions: {
        css: {
          preprocessorOptions: {
            scss: {
              api: 'modern-compiler', // or "modern", "legacy"
            },
          },
        },
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './')
          }
        },
        /*
             plugins: [visualizer()],
             build: {
               chunkSizeWarningLimit: 1200,
               reportCompressedSize: true,
               minify: true,
             },
        */
      },
    }
  ),
})

