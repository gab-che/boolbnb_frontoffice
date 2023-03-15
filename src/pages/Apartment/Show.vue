<script>
import { store, fetchSingleApartment } from '../../store';
import TheHeader from "../../components/TheHeader.vue";
import Map from "../../components/Map.vue";
export default {
    name: "ApartmentShow",
    components: { TheHeader, Map },
    data() {

        return {
            store,
            latitude: store.singleApartment.latitude,
            backendURL: "http://127.0.0.1:8000/storage/",
            imgLink: null
        }
    },

    created() {
        fetchSingleApartment(this.$route.params.id);
        
    }, 



}
</script>

<template>
    <TheHeader></TheHeader>
    <div class="container mb-5 pb-5">
        <h1 class="p-5 text-center">{{ store.singleApartment.title }}</h1>


        <div class="row pb-5">
            <div class="col-6">
                <h3>{{ store.singleApartment.address }}</h3>
                <hr class="giallo">
                <p class="lead">
                    Il posto ha {{ store.singleApartment.n_rooms }} stanze, {{ store.singleApartment.n_beds }} posti letto e
                    {{ store.singleApartment.n_bathrooms }} bagni. ({{ store.singleApartment.square_meters }} mq)
                </p>
                <div class="testo m-4">
                    <h4 class="giallo">Descrizione</h4>
                    <p>
                        {{ store.singleApartment.description }} 
                    </p>
                </div>
                
                <ul class="list-group w-100">
                    <li class="list-group-item service-title d-flex align-items-center">
                        <h6>Servizi</h6>
                    </li>
                    <li v-for="service in store.singleApartment.services"
                        class="list-group-item d-flex align-items-center">
                        <i :class="service.icon"></i>
                        <span class="service-name">{{ service.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="col-6">
                <div class="mb-3 d-flex justify-content-center">
                    <img v-if="store.singleApartment.imgLink" class="w-100" :src="backendURL + store.singleApartment.img_cover" alt="Foto del posto">
                    <img v-else :src="store.singleApartment.img_cover" alt="Foto del posto">
                </div>
                <div class="d-block">
                    <ul class="list-group w-75 container">
                        <li class="list-group-item service-title d-flex align-items-center">
                            <h6>Messaggistica</h6>
                        </li>
                        <li class="list-group-item">
                            <span>Sei interessato all'appartamento?</span>
                            <br>
                            <br>
                            <span>Mettiti subito in contatto con il proprietario</span>
                            <button class="btn btn-warning m-2">Messaggio</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr>

        <div class="pt-5">
            <Map v-if="store.singleApartment.latitude"
                :appartment="[this.$route.params.id, this.store.singleApartment.address, this.store.singleApartment.latitude, store.singleApartment.longitude]">
            </Map>
        </div>
 


        

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
    font-size: .6rem;
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
</style>