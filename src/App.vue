<template>
  <div id="app">
    <!-- nav -->
    <section id="topnav">
      <div class="topnav__wrapper">
        <figure class="topnav__logo-wrapper">
          <img src="@/assets/imgs/jlogo.svg" alt="javi-logo">
        </figure>
        <figure class="topnav__hamburger">
          <font-awesome-icon icon="bars"/>
        </figure>
      </div>
    </section>

    <main>
      <!-- home -->
      <section class="home">
        <h1 class="title">hello</h1>
      </section>

      <!-- skills -->
      <section class="kills hero"></section>

      <!-- projects -->
      <section class="projects hero"></section>

      <!-- contact -->
      <section class="contact"></section>

      <!-- footer -->
      <footer class="footer"></footer>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "./assets/styles/styles.less";

.hero {
  width: 100vw;
  height: 100vh;
}

// topnav
#topnav {
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: @blue-secondary;
  background-image: linear-gradient(180deg, #00bdfe 25%, #007afe 100%);

  .topnav__wrapper {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
