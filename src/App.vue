<template>
  <div id="app">
    <div class="WIP-button">
      <img class="WIP-image" src="@/assets/imgs/repair.svg">
      <p class="WIP-text">Under Construction</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
}
</script>

<style lang="less">
@import "./assets/styles/styles.less";

#app {
  margin: 0 auto;
  box-sizing: content-box;
  background-color: #F2F2F2;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    // border-left: 2px solid @grey-darker;
    // border-right: 2px solid @grey-darker;
    // border-bottom: 2px solid @grey-darker;
  }
}

.WIP-button {
  border: 1px solid rgba(112, 112, 112, 0.3);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  width: 50vw;
  max-width: 1000px;
  max-height: 500px;
  font-size: 3rem;
  // position: relative;

  padding: 5vh 10vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  display: flex;
  align-items: center;

  @media @tablet {
    width: 70vw;
  }
  @media @phone {
    width: 80vw;
  }

    .WIP-image {
      width: 30%;
      height: auto;
    }

    .WIP-text {
      margin: 0 0 0 5%;
      font-size: 6vw;

      @media @tablet {
        font-size: 4vw;
      }
      @media @desktop {
        font-size: 3vw;
      }
      @media @xl-desktop {
        font-size: 3vw;
      }
    }
}



</style>
