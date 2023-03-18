<template>
  <div class="container-fluid">
    <div
      id="carouselExampleCaptions"
      class="carousel slide h-100 shadow"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          v-for="(apartment, i) in store.sponsoredApartments"
          :key="i"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          :data-bs-slide-to="i"
          :class="i === currentIndex ? 'active' : ''"
          :aria-current="i === currentIndex ? 'true' : 'false'"
          :aria-label="`'slide ' ${i + 1} `"
          @click="currentIndex = i"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(apartment, i) in store.sponsoredApartments"
          :key="i"
          :class="'carousel-item ' + (i === 0 ? 'active' : '')"
        >
          <router-link
            :to="{ path: 'appartamenti/:id' + apartment.id }"
            class="text-white text-decoration-none"
          >
            <div class="img-container shadow">
              <img
                :src="store.backendStorage + apartment.img_cover"
                class=""
                alt="..."
              />
              <div class="banner">Dai un'occhiata!</div>
            </div>
          </router-link>
          <div class="carousel-caption">
            <h5>{{ apartment.title }}</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import path from "path";
import { store, fetchSponsoredApartments } from "../store";

export default {
  data() {
    return {
      store,
      currentIndex: 0,
    };
  },

  mounted() {
    fetchSponsoredApartments();
  },

  methods: {},
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel {
  backdrop-filter: blur(6px);
  padding: 24px 0;
  border-radius: 8px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 63%,
    rgba(255, 255, 255, 0.43469887955182074) 100%
  );
  transition: all 0.5s ease;
  .carousel-caption {
    width: fit-content;
    margin: auto;
    padding: 2px 8px;
    border: 1px solid rgb(53, 34, 12);
    border-radius: 12px;
    backdrop-filter: blur(2px);
    background-color: rgb(53, 34, 12, 0.6);
    h5 {
      margin: 0;
      color: rgb(244, 194, 30);
    }
  }
}
@media screen and (min-width: 1240px) {
  .carousel {
    margin-top: 96px;
  }
}
.img-container {
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  border-radius: 12px;
  position: relative;
  transition: all 0.5s ease;

  @media screen and (min-width: 720px) {
    .banner {
      top: 48px;
      right: -96px;
      padding: 2px 96px;
      transform: rotate(45deg);
      width: fit-content;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 719.9px) {
    .banner {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100%;
      padding: 2px;
    }
  }
  .banner {
    text-align: center;
    position: absolute;
    background-color: rgb(244, 194, 30);
    color: rgb(53, 34, 12);
    border: 2px dashed rgb(53, 34, 12);
    font-weight: 600;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    transition: all 0.5s ease;
  }
}
</style>
