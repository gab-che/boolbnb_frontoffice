<script>
import { store, fetchNearestApartments, fetchServices } from "../store";
export default {
  data() {
    return {
      store,
      showModal: false,
      radius: 0,
      rooms: 0,
      beds: 0,
      bathrooms: 0,
      sqrMeters: 0,
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
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    fetchServices();
    fetchNearestApartments("milan");
    this.loadStorage();
  },
  beforeUnmount() {
    this.saveStorage();
  },
};
</script>

<template>
  <div>
    <div v-if="currentRouteName === 'Search'">
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Ricerca avanzata
      </button>
    </div>
    <div v-if="showModal" class="my-backdrop" @click="showModal = false"></div>
    <div v-if="showModal" class="my-modal" @click="showModal = true">
      <form action="" class="form-group d-inline-block">
        <div class="my-modal-content">
          <div class="kilometers-input">
            <div>
              <label for="customRange1" class="form-label">Example range</label>
              <input
                type="range"
                step="5"
                min="5"
                max="50"
                class="form-range"
                id="customRange1"
                name="range"
                v-model.lazy="radius"
              />
            </div>
            <div>
              <div>n kilometri:</div>
              <div>{{ radius }}</div>
            </div>
          </div>
          <div class="numbers-container">
            <div class="row">
              <div class="col-3">
                <label class="form-label">Numero di stanze *</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="255"
                  v-model.lazy="rooms"
                  class="form-control mx-auto rounded-5"
                />
              </div>
              <div class="col-3">
                <label class="form-label">Numero di letti *</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="255"
                  v-model.lazy="beds"
                  class="form-control mx-auto rounded-5"
                />
              </div>
              <div class="col-3">
                <label class="form-label">Numero di bagni *</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="255"
                  v-model.lazy="bathrooms"
                  class="form-control mx-auto rounded-5"
                />
              </div>
              <div class="col-3">
                <label class="form-label">Numero di metri quadri *</label>
                <input
                  type="number"
                  step="0.5"
                  min="30"
                  max="300000"
                  v-model.lazy="sqrMeters"
                  class="form-control mx-auto rounded-5"
                />
              </div>
            </div>
          </div>
          <div class="services-modal-container">
            <div class="row g-2">
              <div
                v-for="(service, i) in store.allServices"
                :key="i"
                class="col-sm-12 col-md-6 col-lg-3 px-0 d-flex justify-content-start"
              >
                <div
                  class="m-0 form-check form-switch d-flex justify-content-center align-items-center"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="'serviceCheckbox_' + { i }"
                    v-model="service.id"
                    name="services[]"
                  />
                  <label
                    class="form-check-label text-start"
                    :for="'serviceCheckbox_' + { i }"
                  >
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <div class="icon-width">
                        <i :class="service.icon + ' text-secondary px-3'"></i>
                      </div>
                      <div class="">{{ service.name }}</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
  position: fixed;
  z-index: 200;
  width: fit-content;
  top: 25%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, 0);
  filter: drop-shadow(8px 8px 16px rgb(74, 48, 15));
  .my-modal-content {
    background-color: rgb(197, 175, 67);
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
