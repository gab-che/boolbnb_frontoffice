<script>
import { store, fetchServices } from "../store";
import axios from "axios";
import { onMounted } from "vue";
// import ModalForSearch from "../components/ModalForSearch.Vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "AdvancedSearch",
  data() {
    return {
      store,
      services: fetchServices(),
      nearestApartments: store.nearestApartments,
    };
  },
  methods: {},
  mounted() {
    fetchServices();
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <!-- <div class="services-container">
    <ul>
      <li v-for="service in services">
        <a href="#" class="text-white text-decoration-none">
          {{ service.name }}
          <div><i :class="service.icon"></i></div>
        </a>
      </li>
    </ul>
  </div> -->
  <ul v-for="apartment in nearestApartments">
    <li>{{ apartment.title }}</li>
  </ul>
</template>

<style lang="scss" scoped>
.service-container {
  background-color: rgb(32, 30, 30);
}
</style>
