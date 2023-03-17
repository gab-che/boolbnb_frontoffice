<template>
  <div class="text-center">
    <div class="d-inline-flex flex-column">
      <!-- Autocomplete -->

      <div class="address mb-3">
        <div class="row">
          <div class="col-12">
            <label class="text-warning fs-1 fw-normal" for=""
              >Dicci dove vuoi andare, noi ti ci portiamo</label
            >
          </div>
          <div class="offset-md-3 col-md-6 col-12 offset-sm-1 col-sm-10">
            <input
              type="text"
              step="0.5"
              autocomplete="off"
              :class="
                'mx-auto w-100 d-block mt-2 ' +
                (isWrong ? 'error ' : 'search ') +
                (searchField.length > 2 ? 'searching' : 'search')
              "
              name="address"
              v-model="searchField"
              @keyup="refreshSearch"
            />
            <div
              :class="'error text-danger ' + (isWrong ? 'd-block' : 'd-none')"
            >
              C'è qualche problema con il tuo indirizzo, assicurati che non
              abbia caratteri speciali e che tu abbia selezionato l'indirizzo
              cliccandolo dal menù a tendina.
            </div>
            <div class="addressList" v-if="searchField.length > 2">
              <router-link
                :value="i"
                v-for="(item, i) in searchData"
                :to="{
                  name: 'Search',
                  query: { city: item.address.freeformAddress },
                }"
                class="list-group-item list-group-item-action"
                @click="choosenAddress(i)"
              >
                {{ item.address.freeformAddress }}
              </router-link>
            </div>
          </div>
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
      searchField: "",
      searchData: [],
      isWrong: false,
    };
  },
  methods: {
    sendplace() {
      fetchNearestApartments();
      this.$router.push("/ricerca-avanzata");
    },
    choosenAddress(i) {
      const rawDiv = document.querySelector(".addressList");
      const tagA = document.querySelectorAll(".addressList > a");
      this.searchField = tagA[i].textContent;
      rawDiv.classList.add("d-none");
    },
    async refreshSearch() {
      const validate = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (validate.test(this.searchField)) {
        this.isWrong = true;
      } else if (this.searchField.length === 0) {
        this.isWrong = false;
      } else {
        this.isWrong = false;
        if (this.searchField) {
          encodeURIComponent(this.searchField);

          await axios
            .get(
              `https://api.tomtom.com/search/2/search/${this.searchField}.json?lat=41.9028&lon=12.4964&language=it-IT&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=all`,
              {
                params: {
                  key: "C1SeMZqi2HmD2jfTGWrbkAAknINrhUJ3",
                },
              }
            )
            .then((resp) => {
              this.searchData = resp.data.results;
              this.error = false;
              this.searchData.length = 3;
            })
            .catch(() => {
              this.error = true;
            });
        }
      }
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
  border-radius: 12px;
  border-bottom: 0;
}

.search:focus-visible {
  outline: 2px solid rgb(47, 34, 11);
  outline-offset: 2px;
}
.searching,
.searching:focus-visible {
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 0;
  outline-offset: 0;
}

.addressList {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #fff;
  outline-offset: 2px;
  border: 2px solid rgb(208, 190, 25);
}
.error {
  border-radius: 12px;
  display: block;
}
.error:focus {
  border: 2px solid rgb(201, 38, 38);
  outline: 2px solid rgb(201, 38, 38);
}
</style>
