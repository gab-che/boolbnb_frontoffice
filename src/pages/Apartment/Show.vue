<script>
import { store, fetchSingleApartment } from '../../store';
import TheHeader from "../../components/TheHeader.vue";
export default{
    name: "ApartmentShow",
    components: {TheHeader},
    data(){
        
        return{
            store,
            
        }
    },

    mounted(){
        fetchSingleApartment(this.$route.params.id);
    }


}
</script>

<template>
    <TheHeader></TheHeader>
    <div class="container">
        
    </div>
</template>

<style lang="scss" scoped>

</style>