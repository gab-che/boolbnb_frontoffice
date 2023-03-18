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
      loader: true

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
    fetchNearestApartments(this.$route.query.city)
  },
  mounted() {
    setTimeout(() => {
      this.loader = false
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
  <div v-if="!loader">
    <TheHeader></TheHeader>

    <div class="container">

      <div class="apartment row justify-content-center">



        <router-link v-if="store.advancedApartments.length != 0"
          :to="{ name: 'apartments.show', params: { id: apartment.id } }" v-for="apartment, i in store.advancedApartments"
          class="col-md-4 text-decoration-none">

          <div class="card-container">

            <div class="img-container h-50 w-100">

              <img class="w-100 h-100" :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />

            </div>

            <h3>{{ apartment.title }}</h3>

            <h6></h6>

            <p v-if="apartment.description">{{ apartment.description }}</p>

            <div class="skills">

              <h6>Servizi</h6>

              <ul>

                <li v-if="apartment.services" v-for="item in apartment.services">{{ item.name }}</li>

              </ul>

            </div>

          </div>

        </router-link>





        <router-link v-else-if="store.nearestApartments.length != 0"
          :to="{ name: 'apartments.show', params: { id: apartment.id } }" v-for="apartment, i in store.nearestApartments"
          class="col-md-4 text-decoration-none">

          <div class="card-container">

            <div class="img-container h-50 w-100">

              <img class="w-100 h-100" :src="'http://localhost:8000/storage/' + apartment.img_cover" alt="user" />

            </div>

            <h3>{{ apartment.title }}</h3>

            <h6></h6>

            <p v-if="apartment.description">{{ apartment.description }}</p>

            <div class="skills">

              <h6>Servizi</h6>

              <ul>

                <li v-if="apartment.services" v-for="item in apartment.services">{{ item.name }}</li>

              </ul>

            </div>

          </div>

        </router-link>

        <div v-else class="error">

          <h3> Non ci sono risultati</h3>

        </div>





      </div>









    </div>

  </div>
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


.loader {
  .whole-page-overlay {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 100% !important;
    z-index: 1050;
    background-color: #efefef;


  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
  }

  .cover {
    align-self: end;
    height: 20%;
    position: absolute;
    background: #efefef;
    right: 0px;
    width: 100%;
  }
}
</style>
