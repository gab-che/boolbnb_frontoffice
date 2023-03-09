import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    backendApartments: 'http://localhost:8000/api/apartments/',
    backendMessages: 'http://localhost:8000/api/messages/',
    backendVisuals: 'http://localhost:8000/api/visuals/',

    allApartments: [],
    sponsoredApartments: [],
    singleApartment: {},

    currentPage: 1,
    totalPages: 1,
});

/**
 * Restituisce appartamenti paginati
 */
export function fetchAllApartments(query) {
    axios.get(store.backendApartments, {
        params: {
            ...query,
        }
    })
        .then((resp) => {
            store.allApartments = resp.data.data;
            store.currentPage = resp.data.current_page;
            store.totalPages = resp.data.last_page;
        })
};

export function fetchSingleApartment(id) {
    axios.get(store.backendApartments + id)
        .then((resp) => {
            store.singleApartment = resp.data;
        })
}

export function fetchSponsoredApartments() {
    axios.get(store.backendApartments, {
        params: {
            sponsored: true,
        }
    })
        .then((resp) => {
            store.sponsoredApartments = resp.data;
            console.log(resp.data);
        })
}