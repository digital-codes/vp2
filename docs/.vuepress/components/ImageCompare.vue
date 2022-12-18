<template>
    <ImgComparisonSlider class="coloured-slider">
      <!-- eslint-disable -->
      <img
        slot="first"
        style="width: 100%"
        :src="img1"
      />
      <img
        slot="second"
        style="width: 100%"
        :src="img2"
      />
      <!-- 
      <FaIcon slot="handle" icon="linux" type="brands" size="4x" ></FaIcon>
      -->
      <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
            <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#000" vector-effect="non-scaling-stroke"></path>
      </svg>
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </template>

<script>
// install from local dir from git like so:
// npm i --save ../img-comparison-slider/
// npm i --save ../img-comparison-slider/packages/vue

import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ImageCompare',
  components: {
    ImgComparisonSlider,
  },
  props: ["img1","img2"],
};
</script>

<style scoped>
  .coloured-slider {
    --divider-color: rgba(0, 0, 0, 0.7);
    --default-handle-color: rgba(0, 0, 0, 0.9);
    --divider-width: 3px;
  }


</style>