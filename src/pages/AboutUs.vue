<template>
  <TheHeader></TheHeader>
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

              <div class="links-container">
                <button
                  @click="show = !show"
                  class="btn btn-dark rounded-circle ratio-1"
                >
                  <i class="fas fa-share"></i>
                </button>
                <div
                  :class="'transition-container ' + (show ? 'item' : 'd-none')"
                >
                  <a
                    class="p-3 ratio-1 bg-white rounded-circle"
                    :href="me.gitLink"
                    ><i class="fa-brands fa-github"></i
                  ></a>
                  <a
                    :href="me.linkedIn"
                    class="p-3 ratio-1 bg-white rounded-circle"
                    ><i class="fa-brands fa-linkedin"></i
                  ></a>
                  <a
                    :href="me.gmail"
                    class="p-3 ratio-1 bg-white rounded-circle"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.links-container {
  display: inline;
}

a {
  color: black;
  text-decoration: none;
}
.item {
  display: inline;
  animation: fade_in_show 0.7s;
}

@keyframes fade_in_show {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
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
