<script>
import { store, fetchAllApartments } from '../../store';
export default{
    name: "ApartmentIndex",
    data(){
        return{
            store,
        }
    },
    mounted(){
        fetchAllApartments(this.$route.query);
    }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>