<template>
  <div v-if="currentRouteName !== 'AboutUs'" class="search-container">
    <input
      type="text"
      name=""
      class="search"
      @keyup.enter="sendInput"
      v-model="input"
    />
  </div>
</template>
<script>
import { fetchNearestApartments } from "../store";

export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    sendInput() {
      fetchNearestApartments(this.input);
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
