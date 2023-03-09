<script>
import { store, fetchAllApartments } from '../../store';
export default{
    name: "ApartmentIndex",
    data(){
        return{
            apartments: store.allApartments,
        }
    },
    mounted(){
        fetchAllApartments();
    }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>