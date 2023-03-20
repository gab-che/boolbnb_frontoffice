<script>
import { store, fetchSingleApartment } from "../../store";
import TheHeader from "../../components/TheHeader.vue";
import Map from "../../components/Map.vue";
export default {
  name: "ApartmentShow",
  components: { TheHeader, Map },
  data() {
    return {
      store,
      loader: true,
      latitude: store.singleApartment.latitude,
      backendURL: "http://127.0.0.1:8000/storage/",
      imgLink: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },

  created() {
    fetchSingleApartment(this.$route.params.id);
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <div v-if="loader" class="loader">
    <div class="whole-page-overlay d-block" id="whole_page_loader">
      <div class="img-container w-100 h-100">
        <div class="cover"></div>
        <img class="center-loader w-100 h-100 img-fluid"
          src="https://cdn.dribbble.com/users/729829/screenshots/3499449/media/fb22fc6c15045b2a7e5bb6329965e574.gif" />
      </div>
    </div>
  </div>
  <div v-if="!loader" class="loader">
    <transition name="fade" appear>
      <div v-if="this.store.singleApartment.title" class="container mb-5 pb-5">
        <h1 class="p-5 text-center">{{ store.singleApartment.title }}</h1>


        <div class="row g-4 pb-5">
          <div class="col-12 col-md-6">
            <h3>{{ store.singleApartment.address }}</h3>
            <hr class="giallo" />
            <p class="lead">
              Il posto ha {{ store.singleApartment.n_rooms }} stanze,
              {{ store.singleApartment.n_beds }} posti letto e
              {{ store.singleApartment.n_bathrooms }} bagni. ({{
                store.singleApartment.square_meters
              }}
              mq)
            </p>
            <div v-if="store.singleApartment.description" class="testo m-4">
              <h4 class="giallo">Descrizione</h4>
              <p>
                {{ store.singleApartment.description }}
              </p>
            </div>

            <ul class="list-group w-100">
              <li class="list-group-item service-title d-flex align-items-center">
                <h6>Servizi</h6>
              </li>
              <li v-for="service in store.singleApartment.services" class="list-group-item d-flex align-items-center">
                <i :class="service.icon"></i>
                <span class="service-name">{{ service.name }}</span>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex justify-content-center">
              <img v-if="store.singleApartment.imgLink" class="w-100" :src="backendURL + store.singleApartment.img_cover"
                alt="Foto del posto" />
              <img v-else :src="store.singleApartment.img_cover" alt="Foto del posto" />
            </div>
            <div class="d-block">
              <ul class="list-group w-75 container">
                <li class="list-group-item service-title d-flex align-items-center">
                  <h6>Messaggistica</h6>
                </li>
                <li class="list-group-item">
                  <span>Sei interessato all'appartamento?</span>
                  <br />
                  <br />
                  <span>Mettiti subito in contatto con il proprietario</span>
                  <router-link class="btn btn-warning m-2 message-link" :to="{ name: 'message' }">Messaggio</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div class="pt-5">
          <Map v-if="store.singleApartment.latitude"
            :appartment="[this.$route.params.id, this.store.singleApartment.address, this.store.singleApartment.latitude, store.singleApartment.longitude]">
          </Map>
        </div>

      </div>
      <div v-else class="container">
        <div class="row py-4">
          <div class="col-8 col-md-4 m-auto d-flex justify-content-center">
            <div>
              <img src="http://127.0.0.1:8000/not-existing.webp" alt="no trespassing citizen kane" class="img-fluid">
            </div>

          </div>
        </div>
        <h2 class="text-center">L'appartamento non esiste</h2>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.jumbo {
  border-bottom: 1px solid darkgray;
}

i {
  font-size: 1.2rem;
  color: #ffc107;
}

.service-name {
  font-size: 0.6rem;
  margin-left: 2rem;
}

.service-title {
  background-color: #ffc107;

  h6 {
    margin: 0;
  }
}

.giallo {
  color: #ffc107;
}

.message-link {
  text-decoration: none;
  color: black;
}

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


@media only screen and (max-width: 576px) {
  .cover {
    height: 30%;
  }

}
</style>
