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

    };
  },
  methods: {
    saveStorage() {
      localStorage.setItem("services", store.allServices);
      localStorage.setItem("nearestApartments", store.nearestApartments);
    },
    loadStorage() {
      const momentanianServices = localStorage.getItem("services");
      const momentanianApartments = localStorage.getItem("nearestApartments");
      if (momentanianServices) {
        store.allServices = momentanianServices;
      }
      if (momentanianApartments) {
        store.nearestApartments = momentanianApartments;
      }
    },
  },
  computed: {},
  created() {
    fetchNearestApartments(this.$route.query.city);
  },
  mounted() {

    // fetchServices();
    // fetchNearestApartments("milan");
    // this.loadStorage();
  },
  beforeUnmount() {
    this.saveStorage();
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <div v-if="store.advancedApartments.length != 0" class="all-container">

    <ul v-if="store.advancedApartments.length != 0" class="list-unstyled" v-for="apartment in store.advancedApartments">
      <li>{{ apartment.title }}</li>
      <li>
        <div class="img-container">
          <img :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="" class="img-fluid">
        </div>
      </li>
      <li>
        <hr>
      </li>
    </ul>
  </div>
  <div v-else-if="store.nearestApartments" class="all-container">
    <ul v-if="store.nearestApartments.length != 0" class="list-unstyled" v-for="apartment in store.nearestApartments">
      <li>{{ apartment.title }}</li>
      <li>
        <div class="img-container">
          <img :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="" class="img-fluid">
        </div>
      </li>
      <li>
        <hr>
      </li>
    </ul>
  </div>
  <!-- <div v-else class="all-container">
      ciao
    </div>
    <h3 class="banner banner-warning">Non hai risultati</h3> -->
</template>

<style lang="scss" scoped>
.img-container {
  width: 300px;
  height: 300px;
}

.all-container {
  width: 100vw;
}

.services-container {
  background-color: rgb(32, 30, 30);
  font-size: 24px;

  ul {
    list-style-type: none;
    display: flex;

    li {
      flex-grow: 1;
    }
  }
}
</style>
