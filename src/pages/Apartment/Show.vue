<script>
import { store, fetchSingleApartment } from '../../store';
import TheHeader from "../../components/TheHeader.vue";
import Map from "../../components/Map.vue";
export default{
    name: "ApartmentShow",
    components: {TheHeader, Map},
    data(){
        
        return{
            store,
            latitude:store.singleApartment.latitude,
            backendURL: "http://127.0.0.1:8000/storage/"
        }
    },

    created(){
        fetchSingleApartment(this.$route.params.id);
    }


}
</script>

<template>
    <TheHeader></TheHeader>
    <div class="container mb-5 pb-5">
        <h1 class="p-5 text-center">{{ store.singleApartment.title }}</h1>

   
        <div class="row jumbo pb-5">
            <div class="col-6">
                <h3>{{ store.singleApartment.address }}</h3>
                <hr class="giallo">
                <p class="lead">
                    Il posto ha {{ store.singleApartment.n_rooms }} stanze, {{ store.singleApartment.n_beds }} posti letto e {{ store.singleApartment.n_bathrooms }} bagni.
                </p>
                <div class="testo">
                    <p>
                        {{ store.singleApartment.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae cumque blanditiis porro quo provident odit, culpa itaque animi vel sequi ex illo consequatur. Voluptatibus praesentium quidem optio facere cupiditate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, praesentium? Iusto earum repudiandae eum eos maxime libero asperiores illum minima sed, beatae soluta amet eius fugit quas ullam neque aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, dolorum excepturi consectetur soluta deleniti porro officia vitae, quo quidem accusamus impedit earum. Hic soluta sapiente corrupti neque unde tenetur consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus corporis quasi magni, molestias, esse quia provident culpa nulla quidem deserunt quisquam optio voluptatum voluptates similique dolorum quaerat qui temporibus natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum, quasi, vero soluta illo accusamus tempora earum commodi voluptatum, quam esse porro corporis perferendis reiciendis culpa architecto nesciunt ipsam nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae. A laborum rerum mollitia, ipsam cum libero voluptas? Sint ut nihil illo incidunt vitae unde minus! Saepe culpa sapiente quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus officia, itaque consequuntur mollitia delectus qui dignissimos quas ea laboriosam illo aliquid amet perferendis rem sit quam voluptates debitis! Similique.
                    </p>
                    
                </div>
            </div>
            
            <div class="col-6">
                <div class="mb-5">
                    <img class="w-100" :src="backendURL+store.singleApartment.img_cover" alt="Foto del posto">
                </div>
                <div >
                    <ul class="list-group">
                        <li class="list-group-item service-title d-flex align-items-center"><h6>Servizi</h6></li>
                        <li v-for="service in store.singleApartment.services" class="list-group-item d-flex align-items-center">
                            <i :class="service.icon"></i>
                            <span class="service-name">{{ service.name }}</span>
                        </li>                    
                    </ul>
                </div>
            </div>
        </div>


        <Map v-if="store.singleApartment" :appartment="[this.$route.params.id, this.store.singleApartment.address, this.store.singleApartment.latitude, store.singleApartment.longitude]"></Map>
        
    </div>
</template>

<style lang="scss" scoped>
.jumbo{
    border-bottom: 1px solid darkgray;
}

i{
  font-size: 1.2rem;
  color: #ffc107;  
}

.service-name{
    font-size: .6rem;
    margin-left: 2rem;
}

.service-title{
    background-color: #ffc107;

    h6{
        margin:0;
    }
}

.giallo{
    color: #ffc107;
}

</style>