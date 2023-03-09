<script>
export default {};
</script>
<template>
  <nav class="navbar navbar-light shadow">
    <div class="container">
      <div class="logo-container"><img src="../assets/vue.svg" alt="" /></div>
      <div class="link-container">
        <ul class="d-flex justify-content-beetween">
          <router-link :to="{ name: 'apartments.index' }" class="nav-link">Index</router-link>
          <li><a href=""></a>link</li>
          <li><a href=""></a>link</li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin-block-start: 0.5em;
  padding-inline-start: 0px;
}
</style>
