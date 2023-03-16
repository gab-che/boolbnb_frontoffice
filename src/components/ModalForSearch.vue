<template>
  <div v-if="currentRouteName === 'Search'">
    <button type="button" class="btn btn-primary" @click="showModal = true">
      Ricerca avanzata
    </button>
  </div>
  <div class="my-backdrop" v-if="showModal" @click="showModal = false">
    <div class="my-modal">
      <h2 class="border border-3">Il modale</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-backdrop {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.my-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
}
</style>

<script>
import { remove } from "@vue/shared";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    remove() {
      this.modalShow = "d-none";
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
