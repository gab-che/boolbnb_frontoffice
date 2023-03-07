<script>
import Carousel from "../components/Carousel.vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { Carousel, TheHeader },
  name: "Home",
};
</script>

<template>
  <TheHeader></TheHeader>
  <Carousel></Carousel>
</template>

<style lang="scss" scoped></style>
