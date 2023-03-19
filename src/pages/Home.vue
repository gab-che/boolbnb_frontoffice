<script>
import { store } from "../store";
import Carousel from "../components/Carousel.vue";
import TheHeader from "../components/TheHeader.vue";
import TheJumbotron from "../components/TheJumbotron.vue";
export default {
  components: { Carousel, TheHeader, TheJumbotron },
  name: "Home",
  data() {
    return {
      store,
      loader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
};
</script>

<template>
  <div>
    <div v-if="loader" class="loader">
      <div class="whole-page-overlay d-block" id="whole_page_loader">
        <div class="img-container w-100 h-100">
          <div class="cover"></div>
          <img
            class="center-loader w-100 h-100 img-fluid"
            src="https://cdn.dribbble.com/users/729829/screenshots/3499449/media/fb22fc6c15045b2a7e5bb6329965e574.gif"
          />
        </div>
      </div>
    </div>
    <div v-if="!loader">
      <TheHeader></TheHeader>
      <TheJumbotron></TheJumbotron>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
