<script>
import { store, fetchSingleApartment } from '../store';
import TheHeader from "../components/TheHeader.vue";
import axios from "axios";
export default {
  components: { TheHeader, },
  name: "Home",
  data() {
    return {
        store,
        emailPlace : null,
        namePlace : null,
        textPlace : null,
        idPlace : this.$route.params.id
    }
  },

  created() {
        fetchSingleApartment(this.$route.params.id);
        
    },

    methods:{
        sendMessage(){
            axios
            .post("http://localhost:8000/api/messages", {   
                    email : this.emailPlace,
                    sender_name: this.namePlace,
                    message : this.textPlace,
                    apartment_id: this.idPlace
            })
            .then((resp)=>{
                this.$router.push('/appartamenti/:id')
            })
        }
    }

};
</script>

<template>
<TheHeader></TheHeader>
<div class="container">
    <h1 class="p-4 text-center">{{ store.singleApartment.title }}</h1>
        <form v-on:submit.prevent="this.sendMessage()">
            <div class="mb-3">
                <label for="exampleFormControlInput" class="form-label">Inserisci il tuo nome completo</label>
                <input v-model="this.namePlace" type="text" class="form-control" id="exampleFormControlInput" placeholder="Nome e cognome">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Lascia la tua email così che il proprietario possa ricontattarti</label>
                <input v-model="this.emailPlace" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Scrivi il tuo messaggio</label>
                <textarea v-model="this.textPlace" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-warning">Invia</button>
        </form>
</div>
</template>

<style lang="scss" scoped>

</style>