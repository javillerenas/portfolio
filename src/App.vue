<template>
  <div id="app">
    <HeroCard />
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
</script>

<style lang="less">
@import "./assets/styles/main.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  padding-top: 15vh;
  display: flex;
  justify-content: center;
}
</style>
