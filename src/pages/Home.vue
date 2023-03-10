<script>
import Carousel from "../components/Carousel.vue";
import TheHeader from "../components/TheHeader.vue";
import TheJumbotron from "../components/TheJumbotron.vue";
export default {
  components: { Carousel, TheHeader, TheJumbotron },
  name: "Home",
};
</script>

<template>
  <TheHeader></TheHeader>
  <TheJumbotron></TheJumbotron>
  <!-- <Carousel></Carousel> -->
</template>

<style lang="scss" scoped></style>
