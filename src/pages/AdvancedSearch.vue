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
  <div v-if="store.nearestApartments" class="all-container">
    <TheHeader></TheHeader>
    <!-- <div class="services-container p-2">
                                              <div class="row g-2">
                                                <div
                                                class="col-lg-3 col-md-4 col-sm-8"
                                                v-for="service in store.allServices"
                                                >
                                                <a href="#" class="text-white text-decoration-none">
                                                  {{ service.name }}
                                                  <div class="ms-auto"><i :class="service.icon"></i></div>
                                                </a>
                                              </div>
                                            </div>
                                          </div> -->

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
  <div v-else>
    <h3 class="banner banner-warning">Non hai risultati</h3>
  </div>
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
