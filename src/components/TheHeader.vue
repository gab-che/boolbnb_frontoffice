<script>
import SimpleSearch from "./SimpleSearch.vue";
import ModalForSearch from "./ModalForSearch.vue";
export default {
  components: { SimpleSearch, ModalForSearch },
  data() {},
  methods: {
    sendInput() {},
  },
};
</script>
<template>
  <div class="sticky">
    <nav class="navbar navbar-expand-lg bg-my-dark p-3">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img src="../../logo_nobg-smaller.png" alt="" />
          </router-link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:8000/login">Accedi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:8000/register"
                >Registrati</a
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'AboutUs' }" class="nav-link"
                >Su di noi</router-link
              >
            </li>
          </ul>
        </div>
        <SimpleSearch></SimpleSearch>
        <ModalForSearch></ModalForSearch>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
}
.bg-my-dark {
  background-color: rgb(10, 7, 2);
}
nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
.nav-link {
  color: white;
}
img {
  width: 50px;
}

i {
  color: white;
}
</style>
