<template>
  <div id="app">
    <div class="hero">
      <HeroCard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroCard from "./components/HeroCard.vue";
import ProjectCard from "./components/ProjectCard.vue";

@Component({
  components: {
    HeroCard,
    ProjectCard
  }
})
export default class App extends Vue {}

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style lang="less">
@import "./assets/styles/main.less";

body {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-card {
      position: relative;
      top: -5rem;

      @media @xs {
        top: 0;
      }
    }
  }

}
</style>
