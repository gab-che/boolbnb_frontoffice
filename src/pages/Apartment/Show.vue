<script>
import { store, fetchSingleApartment } from '../../store';
export default{
    name: "ApartmentShow",
    data(){
        return{
            apartment: store.singleApartment,
            
        }
    },

    mounted(){
        fetchSingleApartment(this.$route.params.id);
    }


}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>