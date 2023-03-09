<script>
import { store, fetchSponsoredApartments } from '../store';
import Carousel from "../components/Carousel.vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { Carousel, TheHeader },
  name: "Home",
  data() {
    return {
      store,
    }
  },
  mounted(){
    fetchSponsoredApartments();
  }
};
</script>

<template>
  <TheHeader></TheHeader>
  <!-- <Carousel></Carousel> -->
</template>

<style lang="scss" scoped></style>
