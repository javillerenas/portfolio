<template>
  <div id="app">
    <!-- nav -->
    <secition id="topnav"></secition>

    <main>
      <!-- hero -->
      <section class="hero">
        <h1 class="title">hello</h1>
      </section>

      <!-- skills -->
      <section class="kills"></section>

      <!-- projects -->
      <section class="projects"></section>

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

.section {
  width: 100vw;
}
</style>
