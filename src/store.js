import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  backendApartments: "http://localhost:8000/api/apartments/",
  backendMessages: "http://localhost:8000/api/messages/",
  backendVisuals: "http://localhost:8000/api/visuals/",
  backendservices: "http://localhost:8000/api/services/",

  allApartments: [],
  nearestApartments: [],
  advancedApartments: [],
  sponsoredApartments: [],
  singleApartment: {},
  allServices: [],

  currentPage: 1,
  totalPages: 1,

  // simpleSearch: '',
  advancedSearch: {
    city: "Roma",
    radius: 50,
    beds: 3,
    rooms: 2,
    sqrMeters: 50,
    services: [1, 2, 4],
  },
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
    if (store.singleApartment.img_cover.includes("cover_img")) {
      store.singleApartment["imgLink"] = true;
    } else {
      store.singleApartment["imgLink"] = false;
    }
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
export async function fetchNearestApartments(userInput) {
  await axios
    .get(store.backendApartments, {
      params: {
        //input da passare con v-model
        city: userInput,
      },
    })
    .then((resp) => {
      store.nearestApartments = resp.data;
    });
}

export function fetchAdvancedSearchApartments() {
  axios
    .get(store.backendApartments, {
      params: {
        place: store.advancedSearch.city,
        radius: store.advancedSearch.radius * 1000,
        beds: store.advancedSearch.beds,
        rooms: store.advancedSearch.rooms,
        sqrMeters: store.advancedSearch.sqrMeters,
        services: JSON.stringify(store.advancedSearch.services),
        //advancedSearch: JSON.stringify(store.advancedSearch)
      },
    })
    .then((resp) => {
      console.log(resp.data);
      store.advancedApartments = resp.data;
    });
}
export async function fetchServices() {
  await axios
    .get(store.backendservices, {})
    .then((resp) => {
      store.allServices = resp.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
