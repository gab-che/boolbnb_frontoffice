<script>
import { store } from "../store";
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
      services: [],
      nearestApartments: [],
    };
  },
  methods: {
    async fetchServices() {
      await axios
        .get(store.backendservices, {})
        .then((resp) => {
          this.services = resp.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async fetchNearestApartments(userInput) {
      await axios
        .get(store.backendApartments, {
          params: {
            //input da passare con v-model
            city: userInput,
          },
        })
        .then((resp) => {
          debugger;
          this.nearestApartments = resp.data;
        });
    },
  },
  mounted() {
    this.fetchServices();
    this.fetchNearestApartments("milan");
  },
};
</script>

<template>
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
    <li v-for="hotel in apartment">{{ hotel.title }}</li>
  </ul>
  <div v-if="nearestApartments.length === 0">
    <h3 class="banner banner-warning">Non hai risultati</h3>
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
