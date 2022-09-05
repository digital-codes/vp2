//const { defaultTheme } = require('vuepress')
//const { defaultTheme } = require('@vuepress/theme-default')

// beta.51: require replaced by import

//const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

//const { palettePlugin } = require('@vuepress/plugin-palette')
import  { palettePlugin } from '@vuepress/plugin-palette'

//const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

//const { path } = require ('@vuepress/utils')
import { path } from  '@vuepress/utils'
//const { defineUserConfig } = require('vuepress')

//const { localTheme } = require('./theme')
import  { localTheme } from './theme'

//const { webpackBundler } = require('@vuepress/bundler-webpack')
import  { webpackBundler } from '@vuepress/bundler-webpack'

import { viteBundler } from '@vuepress/bundler-vite'

/*
CommonJS modules can always be imported via the default export, for example using:
import pkg from 'markdown-it-footnote';
const { footnote } = pkg;

*/
import footnote from "markdown-it-footnote"
const fn  = footnote

module.exports = {
	dest: "./dist",
	temp:"./temp",
	cache:"./cache",
  lang: 'de-DE',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  head: [
		['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		// devtools
		//["script", { src: "http://localhost:8098" }],
		// ...other tags
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
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
            selectLanguageName: 'English',
        },
    },

    theme: localTheme({
      // default theme config
      locales: {
        '/': {
            selectLanguageName: 'German',
            navbar: [
                { text: 'Home', link: '/' },
                { text: 'About', link: '/about/' },
                ],
            sidebar: false,
            notFound : ["Nix gefunden ..."],
            backToHome: "Heim",
        },
        '/en/': {
            selectLanguageName: 'English',
            navbar: [
                { text: 'About', link: '/about/' },
                ],
                notFound : ["Sorry, we didn't find the page ..."],
                backToHome: "Back",
            },
    },
  }),  
  plugins: [
		[
  		registerComponentsPlugin({
              components: {
                CharT1: path.resolve(__dirname, './components/CharT1.vue'),
                CharT5: path.resolve(__dirname, './components/CharT5.vue'),
                CharT6: path.resolve(__dirname, './components/CharT6.vue'),
                CharT7: path.resolve(__dirname, './components/CharT7.vue'),
                UiTest: path.resolve(__dirname, './components/UiTest.vue'),
                VideoCard: path.resolve(__dirname, './components/VideoCard.vue'),
                GeoMap: path.resolve(__dirname, './components/GeoMap.vue'),
                LoaDing: path.resolve(__dirname, './components/LoaDing.vue'),
                CarouSel: path.resolve(__dirname, './components/CarouSel.vue'),
                OrugaDatePick: path.resolve(__dirname, './components/OrugaDatePick.vue'),
                CoreTable: path.resolve(__dirname, './components/CoreTable.vue'),
                DownLoad: path.resolve(__dirname, './components/DownLoad.vue'),
              },
		}),
		],
    [
      palettePlugin({
        // options
      }),
    ],
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
  ],
  extendsMarkdown: (md) => {
    md.use(footnote) //require("markdown-it-footnote"));
  },
  // bundler options ...
  /*
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  */
 // SSR now work with vite default settings
 /*
  bundler: viteBundler({
    viteOptions: {
      type: "module",
    },
    vuePluginOptions: {},
  }),
  */
}
