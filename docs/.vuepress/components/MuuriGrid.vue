<template>
    <p>Muuri</p>
  <div class="mgrid" ref="mgrid">
    <div v-for="(elem,idx) in elems" class="mitem">
        <div class="mitem-content">
            <!-- Safe zone, enter your custom markup -->
            <p>
            {{ idx }}
            </p>
            This can be anything.
            {{elem}}
            <!-- Safe zone ends -->
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
//import * as {Muuri} from "muuri";
//import * as Muuri from "muuri";
import Muuri from "muuri";
//import { ItemSm } from "vue-muuri";

const mgrid = ref()

const elems = ref (
    ["fewf","ddwe","123defwefffefgrgreggreg\naDEFWE\n12",
    "fewf","ddwe","123defwefffefgrgreggreg\naDEFWE\nxy"]
)
const mg = ref()

onMounted(() => {
    const options = {
        // Layout
        layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
        },
        visibleStyles: {
            // probably applies to items ....
            //padding: "5px",
            //margin: "5px",
            "max-width": "90px",
        },
        // -------
        layoutOnResize: 150,
        layoutOnInit: true,
        layoutDuration: 300,
        layoutEasing: 'ease',
        dragEnabled: true,
    }
    mg.value = new Muuri(mgrid.value, options)
    console.log(mg.value)
})
onUnmounted(() => {
    if (mg.value) {
        console.log("Muuri exists")
        //mg.value.delete()
    }
})

</script>

<style lang="scss">
.mgrid {
  position: relative;
  box-sizing: border-box;
}
.mitem {
  display: block;
  position: absolute;
  margin: 10px;
  //padding:10px;
  z-index: 1;
  background: #000;
  color: #fff;
}
.mitem.muuri-item-dragging {
  z-index: 3;
}
.mitem.muuri-item-releasing {
  z-index: 2;
}
.mitem.muuri-item-hidden {
  z-index: 0;
}
.mitem-content {
  position: relative;
  overflow-wrap: break-word;
  background:#400;
  padding: 10px;
  margin:5px;
  /*
  width: 100%;
  height: 100%;
  */
}

</style>
