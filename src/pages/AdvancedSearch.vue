<script>
import { store, fetchNearestApartments, fetchServices, fetchAdvancedSearchApartments } from "../store";
import axios from "axios";
// import ModalForSearch from "../components/ModalForSearch.Vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "Search",
  data() {
    return {
      store,
      loader: true,
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
    fetchAdvancedSearchApartments() {
      axios
        .get(store.backendApartments, {
          params: {
            place: this.$route.query.city,
            radius: store.advancedSearch.radius * 1000,
            beds: store.advancedSearch.beds,
            rooms: store.advancedSearch.rooms,
            sqrMeters: store.advancedSearch.sqrMeters,
            services: JSON.stringify(store.advancedSearch.services),
          },
        })
        .then((resp) => {
          console.log(resp.data);
          store.advancedApartments = resp.data;
        });
    }
  },
  computed: {},
  created() {
    fetchNearestApartments(this.$route.query.city);
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
  beforeUnmount() {
    this.saveStorage();
  },
};
</script>

<template>
  <transition name="fade" appear>
    <div v-if="loader" class="loader">
      <div class="whole-page-overlay d-block" id="whole_page_loader">
        <div class="img-container w-100 h-100">
          <div class="cover"></div>
          <img class="center-loader w-100 h-100 img-fluid"
            src="https://cdn.dribbble.com/users/729829/screenshots/3499449/media/fb22fc6c15045b2a7e5bb6329965e574.gif" />
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade" appear>
    <div v-if="!loader">
      <TheHeader></TheHeader>

      <div class="container">
        <div class="apartment g-3 py-5 row justify-content-center">
          <router-link v-if="store.advancedApartments.length != 0"
            :to="{ name: 'apartments.show', params: { id: apartment.id } }"
            v-for="(apartment, i) in store.advancedApartments"
            class="col-lg-3 col-md-4 col-sm-6 col-8 d-flex justify-content-center text-decoration-none">
            <div class="card-container d-flex flex-grow-1 flex-column">
              <div class="img-container h-50 w-100">
                <img class="w-100 h-100" :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />
              </div>

              <div class="d-flex justify-content-center flex-grow-1 align-items-center">
                <h5 class="p-1 mb-0 pb-0">{{ apartment.title }}</h5>
              </div>

              <!-- <h6></h6> -->

              <p class="p-2" v-if="apartment.description">{{ apartment.description.substring(0, 100) }} <span
                  class="fw-bold">...</span>
              </p>
            </div>
          </router-link>

          <router-link v-else-if="store.nearestApartments.length != 0"
            :to="{ name: 'apartments.show', params: { id: apartment.id } }"
            v-for="(apartment, i) in store.nearestApartments"
            class="col-lg-3 col-md-4 col-sm-6 col-8 d-flex justify-content-center text-decoration-none">
            <div class="card-container  d-flex flex-column">
              <div class="img-container h-50 w-100">
                <img class="w-100 h-100" :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />
              </div>

              <div class="d-flex justify-content-center flex-grow-1 align-items-center">
                <h5 class="p-1 mb-0 pb-0">{{ apartment.title }}</h5>
              </div>

              <!-- <h6></h6> -->

              <p v-if="apartment.description" class="p-2">{{ apartment.description.substring(0, 100) }} <span
                  class="fw-bold">...</span></p>
            </div>
          </router-link>

          <div v-else class="error">
            <h3>Non ci sono risultati</h3>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.img-container {
  width: 300px;
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
