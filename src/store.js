import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  backendApartments: "http://localhost:8000/api/apartments/",
  backendMessages: "http://localhost:8000/api/messages/",
  backendVisuals: "http://localhost:8000/api/visuals/",
  backendservices: "http://localhost:8000/api/services/",
  backendStorage: "http://localhost:8000/storage/",

  allApartments: [],
  nearestApartments: [],
  advancedApartments: [],
  sponsoredApartments: [],
  singleApartment: {},
  allServices: [],

  currentPage: 1,
  totalPages: 1,

  simpleSearch: "",
  advancedSearch: {
    radius: 20,
    beds: 1,
    rooms: 1,
    sqrMeters: 30,
    services: [

    ],
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
export async function fetchNearestApartments(cityToSearch) {
  store.nearestApartments = [];
  store.advancedApartments=[];
  await axios
    .get(store.backendApartments, {
      params: {
        city: cityToSearch,
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
      store.nearestApartments = finalList;
    });
}

export async function fetchServices() {
  await axios
    .get(store.backendservices, {})
    .then((resp) => {
      store.allServices = resp.data;
      localStorage.setItem("services", resp.data);
    })
    .catch((e) => {
      console.log(e);
    });
}
