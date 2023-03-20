<script>
import SimpleSearch from "./SimpleSearch.vue";

import Carousel from "./Carousel.vue";
export default {
  components: { Carousel, SimpleSearch },
};
</script>
<template>
  <Transition name="fade" appear>
    <div class="container-fluid jumbo">
      <div class="container pt-2 text-center">
        <img src="../../logo_nobg.png" alt="" />
      </div>
      <SimpleSearch></SimpleSearch>
      <div class="carousel-container">
        <Carousel></Carousel>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
h1 {
  color: rgb(244, 194, 30);
}
img {
  display: inline-block;
  width: 168px;
}
.carousel-container {
  height: 50%;
  margin: 0 auto;
}
@media screen and (min-width: 950px) {
  .carousel-container {
    height: 450px;
  }
}
@media screen and (min-width: 1200px) {
  .carousel-container {
    width: 1180px;
  }
}
.jumbo {
  height: calc(100vh - 72px);

  background-image: url("../../bg.jpg");
  background-position-x: center;
  background-position-y: center;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-size: cover;
}
</style>
