<template>
  <div class="text-center">
    <div class="d-inline-flex flex-column">
      <label class="text-warning" for=""
        >Dicci dove vuoi andare, noi ti ci portiamo</label
      >
      <input
        type="text"
        name=""
        class="search"
        @keyup.enter="sendplace"
        v-model="store.simpleSearch"
      />
    </div>
  </div>
</template>
<script>
import { store, fetchNearestApartments } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    sendplace() {
      fetchNearestApartments();
      this.$router.push("/ricerca-avanzata");
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
