<template>
  <div class="container-fluid">
    <div
      class="carousel mx-auto"
      @mouseover="transitioning = true"
      @mouseleave="transitioning = false"
    >
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card" v-for="card in cards" :key="card">
          {{ card }}
        </div>
      </div>
    </div>
    <div class="btn-container text-center">
      <button class="btn btn-primary btn-sm" @click="prev">prev</button>
      <button class="btn btn-primary btn-sm" @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.setStep();
    this.resetTranslate();
    this.defaultNext();
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    defaultNext() {
      setInterval(() => {
        if (this.transitioning) return;

        this.transitioning = true;

        this.moveLeft();

        this.afterTransition(() => {
          const card = this.cards.shift();
          this.cards.push(card);
          this.resetTranslate();
          this.transitioning = false;
        });
      }, 3000);
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                      translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                      translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
.carousel {
  margin-top: 32px;
  width: 75vw;
  overflow: hidden;
}

.inner {
  transition: transform 1s;
  white-space: nowrap;
}

.card {
  width: 320px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 240px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
