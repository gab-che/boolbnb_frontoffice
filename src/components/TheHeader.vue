<script>
export default {};
</script>
<template>
  <header>
    <nav class="navbar navbar-light shadow">
      <div class="container">
        <div class="logo-container">
          <img src="../../public/logo_nobg.png" alt="" />
        </div>
        <div class="link-container">
          <ul class="d-flex justify-content-beetween">
            <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
            <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
            <li><router-link :to="{ name: 'search' }">Ricerca</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
img {
  width: 120px;
}
nav {
  background-color: rgb(0, 0, 0);
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
