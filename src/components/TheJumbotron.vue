<script>
import SimpleSearch from "./SimpleSearch.vue";

import Carousel from "./Carousel.vue";
export default {
  components: { Carousel, SimpleSearch },
};
</script>
<template>
  <div class="container-fluid jumbo">
    <div class="container pt-5 text-center">
      <h1>Prenota una vacanza con</h1>
      <img src="../../logo_nobg.png" alt="" />
    </div>
    <SimpleSearch></SimpleSearch>
    <!-- <Carousel></Carousel> -->
  </div>
</template>
<style lang="scss" scoped>
img {
  display: inline-block;
}
.jumbo {
  background-image: url("../../bg.jpg");
  background-position-x: center;
  background-position-y: center;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-size: cover;
  height: calc(100vh - 72px);
}
</style>
