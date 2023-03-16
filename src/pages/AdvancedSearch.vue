<script>
import { store, fetchNearestApartments, fetchServices } from "../store";
import axios from "axios";
// import ModalForSearch from "../components/ModalForSearch.Vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "Search",
  data() {
    return {
      store,
      services: store.allServices,
      nearestApartments: store.nearestApartments,
    };
  },
  methods: {},
  mounted() {
    fetchServices();
    fetchNearestApartments("milan");
  },
};
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="services-container">
      <ul>
        <li v-for="service in services">
          <a href="#" class="text-white text-decoration-none">
            {{ service.name }}
            <div class="ms-auto"><i :class="service.icon"></i></div>
          </a>
        </li>
      </ul>
    </div>

    <ul v-if="nearestApartments" v-for="apartment in nearestApartments">
      <li>{{ apartment.title }}</li>
    </ul>
    <div v-if="nearestApartments.length === 0">
      <h3 class="banner banner-warning">Non hai risultati</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-container {
  background-color: rgb(32, 30, 30);
  ul {
    list-style-type: none;
    display: flex;
    li {
      flex-grow: 1;
    }
  }
}
</style>
