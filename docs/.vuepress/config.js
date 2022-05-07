const { path } = require('@vuepress/utils')

// config > 2.0.0.-beta39 (e.g. 41)
const { defaultTheme } = require('@vuepress/theme-default')

const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

const { localTheme } = require('./theme')

//const { sitemap } = require("vuepress-plugin-sitemap2");

const { palettePlugin } = require('@vuepress/plugin-palette')

const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

module.exports = {
	// globals
	dest: "./dist",
	temp:"./temp",
	cache:"./cache",
    // site config
	// for pwa
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

	//theme: defaultTheme({
        theme: localTheme({
            // set config here
		logo: 'https://vuejs.org/images/logo.png',
		darkMode: false,
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
                UiTest: path.resolve(__dirname, './components/UiTest.vue'),
                VideoCard: path.resolve(__dirname, './components/VideoCard.vue'),
                GeoMap: path.resolve(__dirname, './components/GeoMap.vue'),
                Loading: path.resolve(__dirname, './components/Loading.vue'),
                Chart1: path.resolve(__dirname, './components/Chart1.vue'),
                Chart5: path.resolve(__dirname, './components/Chart5.vue'),
                Chart6: path.resolve(__dirname, './components/Chart6.vue'),
                Chart7: path.resolve(__dirname, './components/Chart7.vue'),
                Carousel: path.resolve(__dirname, './components/Carousel.vue'),
                OrugaDatePick: path.resolve(__dirname, './components/OrugaDatePick.vue'),
                OrugaTable: path.resolve(__dirname, './components/OrugaTable.vue'),
                CoreTable: path.resolve(__dirname, './components/CoreTable.vue'),
                LocalTable: path.resolve(__dirname, './components/LocalTable.vue'),
                Download: path.resolve(__dirname, './components/Download.vue'),
              },
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
		/*
		[
		sitemap({
			// see https://vuepress-theme-hope.github.io/v2/sitemap/config.html#modifytimegetter
			hostname: "https://vp2.akugel.de",
			excludeUrls: ["/404.html"],
			changefreq: "weekly",
		  }),
		]
		*/
		[
			palettePlugin({
				preset: 'sass',
				// options
			}),
		  ],
    ],
    extendsMarkdown: (md) => {
        md.use(require("markdown-it-footnote"));
    },
}
