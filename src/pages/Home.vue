<script>
import { store, fetchSponsoredApartments } from '../store';
import Carousel from "../components/Carousel.vue";
import TheHeader from "../components/TheHeader.vue";
import TheJumbotron from "../components/TheJumbotron.vue";
export default {
  components: { Carousel, TheHeader, TheJumbotron },
  name: "Home",
  data() {
    return {
      store,
    }
  },
  mounted() {
    fetchSponsoredApartments();
  }
};
</script>

<template>
  <TheHeader></TheHeader>
  <TheJumbotron></TheJumbotron>
  <!-- <Carousel></Carousel> -->
</template>

<style lang="scss" scoped></style>
