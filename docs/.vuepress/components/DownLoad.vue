<template>
<section class="down" >
    <o-button tag="a" :download="`${fileName}.${fileType}`" :href="convertData">{{ `${fileName}.${fileType}` }}</o-button>
  </section>
</template>

<script>

// Blob (JSON processing) is Browser only!

// copyfrom https://github.com/edisdev/download-json-data/blob/develop/src/components/Download.vue
export default {
  components: {
  },
  props: {
    fileName: {
      type: String,
      required: true
    },
    downloadData: {
      type: Array,
      required: true
    },
    fileType: {
      type: String,
      required: true
    },
    dataTitles: {
      type: Array,
      default () {
        return []
      }
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    loadData () {

    }
  },
  computed: {
    convertData () {
      let contentType = ''
      let dData = ''
      let blob
      let url
      let titles
      switch (this.fileType) {
        case 'json':
          contentType = 'application/json'
          dData = JSON.stringify(this.downloadData, null, 2)
          blob = new Blob([dData], { type: contentType })
          url = window.URL.createObjectURL(blob)
          break

        case 'csv':
          //https://stackoverflow.com/questions/61927914/how-to-download-csv-file-from-json-data
          if (!this.downloadData || this.downloadData.length === 0) { 
              console.log("data was empty");
              break
          }
          let csv = [Object.keys(this.downloadData[0]).slice(0).join(",")];
          this.downloadData.forEach(
            item => csv.push(
              Object.values(item).map(val => isNaN(val) ? '"'+val+'"':val).join(",")
            )
          )
          csv=csv.join("\n");
          console.log(csv);
          url = "data:text/csv;charset=utf-8,"+escape(csv)
          break

        default:
          break
      }
      return url
    }
  }
}
</script>

<style scoped>
.down {
  margin:5px;
  display: inline-block;
}

.down a {
  text-decoration: none;

}

</style>