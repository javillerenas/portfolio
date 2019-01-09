<template>
  <div id="app">
    <!-- nav -->
    <section id="topnav">
      <div class="topnav__wrapper">
        <figure class="topnav__logo-wrapper">
          <img src="@/assets/imgs/jlogo.svg" alt="javi-logo">
        </figure>
        <figure class="topnav__hamburger flex-center">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </figure>
      </div>
    </section>

    <main>
      <!-- home -->
      <section id="home" class="home">
        <div class="home__wrapper">
          <figure class="home__figure">
            <img class="home__profile" src="@/assets/imgs/profile-circle.png" alt>
          </figure>
          <figure class="home__name">
            <img src="@/assets/imgs/name.svg" alt="Javier Llerenas">
          </figure>
          <div class="home__text">
            <p>
              I am an energetic <span class="is-orange">Computer Scientist</span>
              who loves <span class="is-red">good design</span>
              and creating <span class="is-primary">beautiful web apps</span>.
            </p>
            <p>
              Located in Las Vegas, NV.
              I specialize in <span class="is-green">Serverless Front End + Design</span>.
            </p>
          </div>
          <div class="home__buttons">
            <button class="btn btn-red">Contact me!</button>
            <button class="btn btn-blue">Resume</button>
          </div>
        </div>
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

@topnav-height: 6rem;
// topnav
#topnav {
  width: 100vw;
  height: @topnav-height;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: @blue-secondary;
  background-image: linear-gradient(180deg, #00bdfe 25%, #007afe 100%);

  .topnav__wrapper {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .topnav__hamburger {
      background: @dark-grey;
      color: white;
      width: 4rem;
      height: 4rem;
      border-radius: 4px;
      border: 1px solid @background-light;
      font-size: 2rem;
    }
  }
}

// home
#home {
  margin-top: @topnav-height;
  height: calc(100vh - @topnav-height);
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  .home__wrapper {
    display: flex;
    flex-direction: column;

    .home__figure {
      height: 25rem;
      text-align: center;

      .home__profile {
        max-width: calc(20rem + 10vw);
        border-radius: 50%;
        box-shadow: @dark-shadow;
      }
    }

    .home__name {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .home__text {
      text-align: center;
      margin-top: 1rem;
    }

    .home__buttons {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      > button {
        height: 5rem;
        
        &:first-child {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
