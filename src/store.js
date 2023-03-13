import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  backendApartments: "http://localhost:8000/api/apartments/",
  backendMessages: "http://localhost:8000/api/messages/",
  backendVisuals: "http://localhost:8000/api/visuals/",
  backendservices: "http://localhost:8000/api/services/",

  allApartments: [],
  nearestApartments: [],
  sponsoredApartments: [],
  singleApartment: {},
  allServices: [],

  currentPage: 1,
  totalPages: 1,
});

/**
 * Restituisce appartamenti paginati
 */
export function fetchAllApartments(query) {
  axios
    .get(store.backendApartments, {
      params: {
        ...query,
      },
    })
    .then((resp) => {
      store.allApartments = resp.data.data;
      store.currentPage = resp.data.current_page;
      store.totalPages = resp.data.last_page;
    });
}

export function fetchSingleApartment(id) {
  axios.get(store.backendApartments + id).then((resp) => {
    store.singleApartment = resp.data;
  });
}

export function fetchSponsoredApartments() {
  axios
    .get(store.backendApartments, {
      params: {
        sponsored: true,
      },
    })
    .then((resp) => {
      store.sponsoredApartments = resp.data;
    });
}

/**
 * Restituisce appartamenti nel raggio di 20km
 * dopo ricerca semplice (es. solo città)
 */
export function fetchNearestApartments(cityInput) {
  axios
    .get(store.backendApartments, {
      params: {
        //input da passare con v-model
        city: cityInput,
      },
    })
    .then((resp) => {
      console.log(resp.data);
      store.nearestApartments = resp.data;
    });
}

export function fetchServices() {
  axios.get(store.backendservices, {}).then((resp) => {
    store.allServices = resp.data;
  });
}
