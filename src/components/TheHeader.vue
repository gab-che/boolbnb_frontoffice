<script>
export default {};
</script>
<template>
  <header>
    <nav class="navbar navbar-light shadow">
      <div class="logo-container">
        <img src="../../logo_nobg.png" alt="" />
      </div>
      <div class="search-container">
        <input type="text" name="" class="search" />
      </div>
      <div class="link-container">
        <ul class="d-flex justify-content-beetween">
          <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
          <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
          <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
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
img {
  width: 120px;
}
nav {
  background-color: rgb(0, 0, 0);
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
