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
  <div v-if="loader" class="loader">
    <div class="whole-page-overlay d-block" id="whole_page_loader">
      <div class="img-container w-100 h-100">
        <div class="cover"></div>
        <img class="center-loader w-100 h-100 img-fluid"
          src="https://cdn.dribbble.com/users/729829/screenshots/3499449/media/fb22fc6c15045b2a7e5bb6329965e574.gif" />
      </div>
    </div>
  </div>
  <transition name="fade" appear>
    <div v-if="!loader">
      <TheHeader></TheHeader>

      <div class="container">
        <div class="apartment g-3 py-5 row justify-content-center">
          <router-link v-if="store.advancedApartments.length != 0"
            :to="{ name: 'apartments.show', params: { id: apartment.id } }"
            v-for="(apartment, i) in store.advancedApartments"
            class="col-lg-3 col-md-4 col-sm-6 col-8 d-flex justify-content-center text-decoration-none">
            <div :class="apartment.promotions.length ? 'border border-2' : ''"
              class="card-container border-primary d-flex flex-grow-1 flex-column">
              <div class="img-container h-50 w-100">
                <img v-if="apartment.img_cover.includes('cover_img')" class="w-100 h-100"
                  :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />
                <img v-else class="w-100 h-100" :src="apartment.img_cover" alt="user" />
                <div v-if="apartment.promotions.length" class="banner">In evidenza</div>
              </div>

              <div class="d-flex justify-content-center flex-grow-1 align-items-center">
                <h5 class="p-1 mb-0 pb-0">{{ apartment.title }}</h5>
              </div>


              <p class="p-2" v-if="apartment.description">{{ apartment.description.substring(0, 100) }} <span
                  class="fw-bold">...</span>
              </p>
            </div>
          </router-link>

          <router-link v-else-if="store.nearestApartments.length != 0"
            :to="{ name: 'apartments.show', params: { id: apartment.id } }"
            v-for="(apartment, i) in store.nearestApartments"
            class="col-lg-3 col-md-4 col-sm-6 col-8 d-flex justify-content-center text-decoration-none">
            <div :class="apartment.promotions.length ? 'border border-2' : ''"
              class="card-container border-primary d-flex flex-column">

              <div class="img-container h-50 w-100">
                <img v-if="apartment.img_cover.includes('cover_img')" class="w-100 h-100"
                  :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />
                <img v-else class="w-100 h-100" :src="apartment.img_cover" alt="user" />
                <div v-if="apartment.promotions.length" class="banner">In evidenza</div>

              </div>

              <div class="d-flex justify-content-center flex-grow-1 align-items-center">
                <h5 class="p-1 mb-0 pb-0">{{ apartment.title }}</h5>
              </div>

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
  position: relative;
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

@media screen and (min-width: 720px) {
  .banner {
    top: 48px;
    right: -96px;
    padding: 2px 96px;
    transform: rotate(45deg);
    width: fit-content;
  }
}

@media screen and (min-width: 0px) and (max-width: 719.9px) {
  .banner {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    padding: 2px;
  }
}

.banner {
  text-align: center;
  position: absolute;
  background-color: rgb(244, 194, 30);
  color: rgb(53, 34, 12);
  border: 2px dashed rgb(53, 34, 12);
  font-weight: 600;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  transition: all 0.5s ease;
}
</style>
