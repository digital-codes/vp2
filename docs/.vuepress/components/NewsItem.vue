
<template>
  <div class="newsletter">
    <div class="date">
      <h2>{{ volume }}</h2>
      <p v-if="!dataLoaded">{{ msg }}</p>
    </div>
    <div class="newsitem" v-for="(item,index) in news" key="index">
      <MdCard
        :hdr="getLocale(item.hdr)"
        :ftr="date"
        :src="getLocale(item.text)"
        :zoom=true
        :img="item.img"
        :imgAlt="getLocale(item.alt)"
        purify=true
        ></MdCard>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { defineComponent, ref, onBeforeMount, onBeforeUnmount } from 'vue'

import { usePageData, usePageLang } from '@vuepress/client'

// fetch search params from url
// https://www.sitepoint.com/get-url-parameters-with-javascript/
// using window functions reqquire to wrap component in <ClientOnly> tags
// see https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
// need to check https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97#3-third-solution-dynamic-loading
function getId() {
  var newsId = "0";
  if (typeof window !== "undefined") { // we need this to exculde SSR
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
      newsId = parseInt(urlParams.get('id'))
    }
    return newsId;
  }
}

export default defineComponent( {
  props: ["lang"],
  methods:{
    getLocale(x) {
      if (this.lang == "de") {
        return x.de
      } else {
        return x.en
      }
    }
  },
  data () {
      return {
          dt: "", 
          vol : "",
          items: []
      }
  },
  async beforeMount() {
        // initialize data
    var baseUrl = "/news/getNews.php?id=";
    // overwrite if we are running in dev mode from localhost
    var host = location.host.split(":")[0];
    if ("localhost" == host) {
    console.log("Host: " + host);
    baseUrl = "http://localhost:9000" + baseUrl;
    // dev mode only, needs server on port 9000 in docs/.vuepress/public/
    } else {
    console.log("host:",host)
    }
    const NI = getId()
    var url = baseUrl + String(NI); //newsId
    console.log("Axios from ",url);
    try {
      let r = await axios.get(url)
      const news = r.data
      console.log("News:",news)
      if ((news == undefined) || (news.length == 0)){
        this.volume = this.lang == "en"?
          "Volume not available":
          "Diese Ausgabe ist leider nicht verfügbar."
          this.msg = this.lang == "en"?
          "URL parameters like \"?id=123\" expected":
          "URL Parameters erwartet wie \"?id=123\""
        return;
      } else {
        this.volume = this.lang == "en" ? "Volume ":"Ausgabe "
        this.volume += String(news[0].id)
        this.date = news[0].date
        this.news = news[0].items;
      }
      // ...
      this.dataLoaded = true
      console.log("Loaded",this.dataLoaded)
    } catch (error) {
      var t = {"en:":"Network error","de":"Fehler"}
      var item = {"hdr":NI,"src":"/logo.png","alt":"Image","text":t};
      var dt = new Date();
      var d = {"date":dt,"items":[item]}; // simulate json repsonse
      console.log("Fake response:",d);
      this.date = dt;
      this.items = d.items;
      console.log("id:",NI,"Date:",this.date,"Items:",this.items);
      console.log(error);
    }
  },
  setup(props) {
      const lang = ref("en")
      const pageLang = usePageLang()._value.toLowerCase()
      console.log("Page Locale:",pageLang)
      if (pageLang.startsWith("de")) {
        lang.value = "de"
      }
      console.log("Lang:",lang.value)
      const volume = ref()
      const msg = ref()
      const date = ref()
      const news = ref([])
      const dataLoaded = ref(false)
      return { dataLoaded, msg, lang, volume, date, news }
  }

})

</script>

<style scoped>

.newsitem > p {
  margin-top: 0;
}

</style>
