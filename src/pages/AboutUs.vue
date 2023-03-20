<template>
  <TheHeader></TheHeader>
  <transition name="fade" appear>
    <div class="container-fluid container-md px-5 p-md-0">
      <div class="row my-5" v-for="(me, i) in us" :key="i">
        <div class="col-12 shadow-lg px-0">
          <div class="row">
            <div class="col-12 col-md-4 col-lg-3">
              <div class="img-container shadow-lg">
                <img v-bind:src="me.img" class="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9">
              <div class="row align-items-center h-100 px-2 py-4">
                <div class="col-12">
                  <h5 class="fs-2">
                    <span class="text-warning">{{ me.name }}</span>
                    {{ me.surname }}
                  </h5>
                </div>

                <div class="col-12 col-md-12">
                  <div class="button-container">
                    <button
                      @click="showLinks(me.name)"
                      class="btn btn-dark rounded-circle"
                    >
                      <div class="icon-container">
                        <i
                          class="fa-solid fa-share-nodes ratio=1 text-warning"
                        ></i>
                      </div>
                    </button>
                    <div :class="'transition-container hide d-none ' + me.name">
                      <div class="link-container">
                        <a class="text-warning" :href="me.gitLink"
                          ><div class="icon-container">
                            <i class="fa-brands fa-github"></i></div
                        ></a>
                      </div>

                      <div class="link-container">
                        <a :href="me.linkedIn" class="text-warning"
                          ><div class="icon-container">
                            <i class="fa-brands fa-linkedin"></i></div
                        ></a>
                      </div>

                      <div class="link-container">
                        <a :href="me.gmail" class="text-warning"
                          ><div class="icon-container">
                            <i class="fa-solid fa-envelope"></i></div
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
.img-container {
  overflow: hidden;
}
.button-container {
  position: relative;
  font-size: 32px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;

  .transition-container {
    margin-left: 16px;
    left: 44px;
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
  padding: 8px;
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
          img: "https://picsum.photos/600/400",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Gabriella",
          surname: "Chessa",
          img: "https://picsum.photos/600/400",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Marco",
          surname: "Agosta",
          img: "https://picsum.photos/600/400",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Luca",
          surname: "Radio",
          img: "https://picsum.photos/600/400",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Massimiliano",
          surname: "Muscolino",
          img: "https://picsum.photos/600/400",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
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
