<script></script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<style lang="scss">
@use "style/general.scss";

/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius: 100px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #888;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
