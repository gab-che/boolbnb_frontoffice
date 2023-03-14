<script>
import { fetchNearestApartments } from '../store';
export default {
  data(){
    return{
      input: '',
    }
  },
  methods:{
    sendInput(){
      fetchNearestApartments(this.input)
      this.$router.push('/ricerca-avanzata');
    }
  }
};
</script>
<template>
  <div class="bg-my-dark">
    <nav class="navbar navbar-light shadow">
      <div class="logo-container">
        <router-link :to="{ name: 'home' }">
          <img src="../../logo_nobg.png" alt="" />
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="" class="search" @keyup.enter="sendInput" v-model="input"/>
      </div>
      <div class="link-container">
        <ul class="d-flex justify-content-beetween">
          <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
          <li>
            <router-link :to="{ name: 'AboutUs' }">Su di noi</router-link>
          </li>
          <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.bg-my-dark {
  background-color: rgb(10, 7, 2);
}
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
img {
  width: 120px;
}
nav {
  padding: 0px 64px;
}
ul {
  list-style: none;
  margin-block-start: 0.5em;
  padding-inline-start: 0px;
  li {
    padding-right: 8px;
    a {
      text-decoration: none;
      color: aliceblue;
    }
  }
}
</style>
