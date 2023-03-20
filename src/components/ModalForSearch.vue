<script>
import axios from "axios";
import { store, fetchNearestApartments, fetchServices } from "../store";
export default {
  data() {
    return {
      store,
      showModal: false,


    };
  },
  methods: {
    research() {
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
          const finalList = [];


          resp.data.forEach(element => {
            if (element.promotions.length && element.promotions[0].id === 3) {
              finalList.push(element)
            }
          });
          resp.data.forEach(element => {
            if (element.promotions.length && element.promotions[0].id === 2) {
              finalList.push(element)
            }
          });
          resp.data.forEach(element => {
            if (element.promotions.length && element.promotions[0].id === 1) {
              finalList.push(element)
            }
          });
          resp.data.forEach(element => {
            if (!element.promotions.length) {
              finalList.push(element);
            }
          })
          store.advancedApartments = finalList;

          store.nearestApartments = [];
          this.showModal = false
        });
    },
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
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    fetchServices();
  },
  beforeUnmount() {
    this.saveStorage();
  },
};
</script>

<template>
  <div>
    <div v-if="currentRouteName === 'Search'">
      <button type="button" class="btn btn-outline-warning" @click="showModal = true">
        Ricerca avanzata
      </button>
    </div>
    <div class="advanced-search-container">
      <div v-if="showModal" class="my-backdrop" @click="showModal = false"></div>
      <div v-if="showModal" class="my-modal" @click="showModal = true">
        <div class="my-modal-content">
          <button @click="fetchAdvancedSearchApartments" class="btn btn-secondary">invia</button>
          <div class="kilometers-input">
            <div>
              <label for="customRange1" class="form-label">N. km :
                <span v-if="store.advancedSearch.radius">{{ store.advancedSearch.radius }}</span>
                <span v-else>20</span>
              </label>
              <input type="range" step="5" min="5" max="50" class="form-range" id="customRange1" name="range"
                v-model="store.advancedSearch.radius" />
            </div>
            <div>


            </div>
          </div>
          <div
            class="mb-3 numbers-container justify-content-center w-100 row flex-md-row flex-column  align-items-center">
            <div class="col-md-4 col justify-content-between d-flex flex-column">
              <label class="form-label flex-grow-1">Numero stanze </label>
              <input type="number" step="1" min="0" max="255" v-model.lazy="store.advancedSearch.rooms"
                class="form-control mx-auto rounded-5" />
            </div>
            <div class="col-md-4 col justify-content-between d-flex flex-column">
              <label class="form-label flex-grow-1">Numero letti </label>
              <input type="number" step="1" min="0" max="255" v-model.lazy="store.advancedSearch.beds"
                class="form-control mx-auto rounded-5" />
            </div>

            <div class="col-md-4 col  justify-content-between d-flex flex-column">
              <label class="form-label flex-grow-1 flex-grow-1 ">Numero metri quadrati </label>
              <input type="number" step="0.5" min="30" max="300000" v-model.lazy="store.advancedSearch.sqrMeters"
                class="form-control mx-auto rounded-5" />
            </div>
          </div>
          <div class="services-modal-container">
            <div class="row g-2">
              <div v-for="(service, i) in store.allServices" class="col-6 col-sm-4 px-0 d-flex justify-content-start">
                <div class="m-0 form-check d-flex justify-content-center align-items-center">
                  <input class="form-check-input flex-shrink-0" type="checkbox" :id="'serviceCheckbox_' + i"
                    v-model="store.advancedSearch.services" :value="service.id" name="services[]" />
                  <label class="form-check-label text-start" :for="'serviceCheckbox_' + i">
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="icon-width">
                        <i :class="service.icon + ' text-secondary px-3'"></i>
                      </div>
                      <div class="d-none d-md-block">{{ service.name }}</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-backdrop {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(0.5);
}

.my-modal {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  position: fixed;
  z-index: 200;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, 0);
  filter: drop-shadow(8px 8px 16px rgb(74, 48, 15));

  .my-modal-content {
    background-color: #ffd579;
    border-radius: 16px;
    padding: 16px;

    .kilometers-input {
      display: flex;
      gap: 16px;

      div {
        flex-grow: 1;
      }
    }
  }
}
</style>
