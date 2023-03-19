<template>
  <TheHeader></TheHeader>
  <transition name="fade" appear>
    <div class="container-fluid">
      <div class="row justify-content-between pt-4">
        <div class="col col-sm-4 col-lg-2" v-for="me in us">
          <div class="col-content">
            <div class="card shadow">
              <img v-bind:src="me.img" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {{ me.name }}
                  <span class="text-secondary">{{ me.surname }}</span>
                </h5>

                <div class="button-container">
                  <button
                    @click="show = !show"
                    class="btn btn-dark rounded-circle"
                  >
                    <div class="icon-container">
                      <i class="fa-solid fa-share-nodes ratio=1"></i>
                    </div>
                  </button>
                  <transition name="links">
                    <div class="transition-container" v-if="show">
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
                      <div class="link-container">
                        <a :href="me.gmail" class=""
                          ><div class="icon-container">
                            <i class="fa-solid fa-envelope"></i></div
                        ></a>
                      </div>
                    </div>
                  </transition>
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
.button-container {
  position: relative;
  font-size: 32px;
  .btn {
    font-size: 32px;
    padding: 0;
    aspect-ratio: 1 / 1;
  }
  .transition-container {
    margin-left: 16px;
    left: 44px;
    top: 6px;
    position: absolute;
    display: flex;
    align-items: center;
    .link-container {
      margin-right: 16px;
      border-radius: 50%;
      flex-grow: 1;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
.icon-container {
  padding: 8px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links-enter-active {
  animation: links-in 0.8s ease;
}
.links-leave-active {
  animation: links-out 0.8s ease;
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
      show: false,
      us: [
        {
          name: "Lucio",
          surname: "Bo",
          img: "https://picsum.photos/400/600",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Gabriella",
          surname: "Chessa",
          img: "https://picsum.photos/400/600",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Marco",
          surname: "Agosta",
          img: "https://picsum.photos/400/600",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Luca",
          surname: "Radio",
          img: "https://picsum.photos/400/600",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
        {
          name: "Massimiliano",
          surname: "Muscolino",
          img: "https://picsum.photos/400/600",
          gitLink: "#",
          linkedIn: "#",
          gmail: "#",
        },
      ],
    };
  },
  methods: {
    showLinks() {},
  },
};
</script>
