<template>
  <TheHeader></TheHeader>
  <transition name="fade" appear>
    <div class="container-fluid container-md px-5 p-md-0 reduce">
      <div class="row my-5" v-for="(me, i) in us" :key="i">
        <div class="col-12 shadow-lg px-0 bg-brown">
          <div class="row">
            <div class="col-12 col-md-4 col-lg-3">
              <div class="img-container shadow-lg">
                <img v-bind:src="me.img" alt="..." />
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9 overflow-hidden">
              <div class="row align-items-center h-100 px-2 py-4">
                <div class="col-12">
                  <h5 class="fs-2 rounded-3 overflow-hidden d-inline-block">
                    <span class="text-warning bg-brown px-2">{{
                      me.name
                    }}</span>
                    <span class="text-brown bg-warning px-2">{{
                      me.surname
                    }}</span>
                  </h5>
                </div>

                <div class="col-12 col-md-12">
                  <div class="button-container">
                    <button
                      @click="showLinks(me.name)"
                      class="btn btn-dark rounded-circle"
                    >
                      <div class="icon-container">
                        <i class="fa-solid fa-share-nodes ratio=1"></i>
                      </div>
                    </button>
                    <div :class="'transition-container hide d-none ' + me.name">
                      <div class="link-container">
                        <a class="" :href="me.gitLink"
                          ><div class="icon-container">
                            <i class="fa-brands fa-github"></i></div
                        ></a>
                      </div>

                      <div class="link-container">
                        <a :href="me.linkedIn" class=""
                          ><div class="icon-container">
                            <i class="fa-brands fa-linkedin"></i></div
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.bg-brown {
  background-color: rgba(45, 28, 9, 0.35);
}
.text-brown {
  color: rgba(45, 28, 9, 0.85);
}
i {
  color: rgb(244, 194, 30);
  margin: 4px;
}
.col-12.col-md-8.col-lg-9 {
  transition: all 0.5s ease;
}
.col-12.shadow-lg.px-0 {
  border-radius: 12px;
  border: 2px solid rgb(53, 34, 12);
}
.col-12 {
  transition: all 0.5s ease;
}
@media screen and (max-width: 768px) {
  .img-container {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
}
@media screen and (min-width: 768.1px) {
  .img-container {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-right: 0px;
  }
}
@media screen and (min-width: 1000px) {
  .reduce {
    width: 50%;
    margin: auto;
  }
}
.img-container {
  overflow: hidden;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }
}
.button-container {
  position: relative;
  font-size: 32px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;

  .transition-container {
    margin-left: 16px;
    left: 64px;
    top: 0px;
    position: absolute;
    align-items: center;

    .link-container {
      margin-right: 16px;
      border-radius: 50%;
      flex-grow: 1;

      a {
        text-decoration: none;
      }
    }
  }
  .btn {
    font-size: 32px;
    padding: 0;
    aspect-ratio: 1 / 1;
  }
}
.show {
  opacity: 1;
  display: flex;
  animation-name: links-in;
  animation-duration: 0.7s;
}
.hide {
  display: flex;
  opacity: 0;
  animation: links-out 0.7s ease;
}
.icon-container {
  padding: 12px;
  background-color: rgb(45, 28, 9);
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes links-in {
  0% {
    opacity: 0;
    transform: scale(0);
    transform: translateX(-60px);
  }
  25% {
    opacity: 0.25;
    transform: scale(0.25);
    transform: translateX(-30px);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.5);
    transform: translateX(-15px);
  }
  75% {
    opacity: 0.75;
    transform: scale(0.75);
    transform: translateX(-5px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform: translateX(0px);
  }
}
@keyframes links-out {
  0% {
    opacity: 1;
    transform: scale(1);
    transform: translateX(0px);
  }
  25% {
    opacity: 0.75;
    transform: scale(0.75);
    transform: translateX(-5px);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.5);
    transform: translateX(-15px);
  }
  75% {
    opacity: 0.25;
    transform: scale(0.25);
    transform: translateX(-30px);
  }
  100% {
    opacity: 0;
    transform: scale(0);
    transform: translateX(-60px);
  }
}
</style>
<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "AboutUs",
  data() {
    return {
      searchPage: true,
      show: null,
      us: [
        {
          name: "Lucio",
          surname: "Bo",
          img: "../../Lucio.jpg",
          gitLink: "https://github.com/gab-che",
          linkedIn: "https://www.linkedin.com/in/lucio-bo/",
        },
        {
          name: "Gabriella",
          surname: "Chessa",
          img: "../../Gab.jpeg",
          gitLink: "https://github.com/gab-che",
          linkedIn: "https://www.linkedin.com/in/gabriella-chessa-97555b1b1/",
        },
        {
          name: "Marco",
          surname: "Agosta",
          img: "../../Marco.jpeg",
          gitLink: "https://github.com/MarcoAgosta",
          linkedIn: "https://www.linkedin.com/in/marco-agosta-0525131a3/",
        },
        {
          name: "Luca",
          surname: "Radio",
          img: "../../Luca.jpg",
          gitLink: "https://github.com/LucaRadio",
          linkedIn:
            "https://www.linkedin.com/in/calogero-luca-radio-26a781267/",
        },
        {
          name: "Massimiliano",
          surname: "Muscolino",
          img: "../../IO.jpeg",
          gitLink: "https://github.com/Ciaowilly3",
          linkedIn:
            "https://www.linkedin.com/in/massimiliano-muscolino-331807267/",
        },
      ],
    };
  },
  methods: {
    showLinks(nome) {
      const toShow = document.querySelector("." + nome);

      toShow.classList.remove("d-none");
      toShow.classList.toggle("hide");
      toShow.classList.toggle("show");
    },
  },
};
</script>
