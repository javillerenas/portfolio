<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <font-awesome-icon icon="coffee" />
    <font-awesome-icon :icon="['fab', 'github']" />
    <font-awesome-icon icon="facebook" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
</style>
