import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    backendApartments: 'http://localhost:8000/api/apartments/',
    backendMessages: 'http://localhost:8000/api/messages/',
    backendVisuals: 'http://localhost:8000/api/visuals/',

    allApartments: [],
    sponsoredApartments: [],
    singleApartment: {},
});

export function fetchAllApartments() {
    axios.get(store.backendApartments)
        .then((resp) => {
            store.allApartments = resp.data;
        })
};

export function fetchSingleApartment(id) {
    axios.get(store.backendApartments + id)
        .then((resp) => {
            store.singleApartment = resp.data;
        })
}