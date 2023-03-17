<template>
  <div class="text-center">
    <div class="d-inline-flex flex-column">
      <!-- Autocomplete -->

      <div class="address mb-3">
        <!-- <label class="text-warning" for="">Dicci dove vuoi andare, noi ti ci portiamo</label>
        <input type="text" name="" class="search" @keyup.enter="sendplace" v-model="store.simpleSearch" /> -->
        <label class="form-label">Indirizzo *</label>
        <input type="text" step="0.5" autocomplete="off" class="form-control mx-auto rounded-5" name="address"
          v-model="searchField" @keyup="refreshSearch">
        <div class="error d-none text-danger">
          C'è qualche problema con il tuo indirizzo, assicurati che non abbia caratteri
          speciali e
          che
          tu
          abbia selezionato l'indirizzo cliccandolo dal menù a tendina.
        </div>
        <div class="list-group addressList">
          <router-link :value='i' v-for='(item, i) in searchData' :to="{
            name: 'Search', query: { city: item.address.freeformAddress }
          }" class="list-group-item list-group-item-action" @click='choosenAddress(i)'>

            {{ item.address.freeformAddress }}
          </router-link>
        </div>
      </div>




    </div>
  </div>
</template>
<script>
import { store, fetchNearestApartments } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      searchField: '',
      searchData: [],
    };
  },
  methods: {
    sendplace() {
      fetchNearestApartments();
      this.$router.push("/ricerca-avanzata");
    },
    choosenAddress(i) {
      const rawDiv = document.querySelector('.addressList')
      const tagA = document.querySelectorAll('.addressList > a');
      this.searchField = tagA[i].textContent;
      rawDiv.classList.add('d-none')


    },
    async refreshSearch() {
      if (this.searchField) {
        encodeURIComponent(this.searchField);


        await axios.get(`https://api.tomtom.com/search/2/search/${this.searchField}.json?lat=41.9028&lon=12.4964&language=it-IT&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=all`, {
          params: {
            "key": 'C1SeMZqi2HmD2jfTGWrbkAAknINrhUJ3'
          },


        })
          .then((resp) => {
            this.searchData = resp.data.results;
            this.error = false
          })
          .catch(() => {
            this.error = true
          })
      };
    },
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid rgb(208, 190, 25);
  border-radius: 4px;
}

.search:focus-visible {
  outline: 2px solid rgb(47, 34, 11);
  outline-offset: 2px;
}
</style>
