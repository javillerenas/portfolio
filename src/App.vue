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
              I am an energetic
              <span class="is-orange">Computer Scientist</span>
              who loves
              <span class="is-red">good design</span>
              and creating
              <span class="is-primary">beautiful web apps</span>.
            </p>
            <p>
              Located in Las Vegas, NV.
              I specialize in
              <span
                class="is-green"
              >Serverless Front End + Design</span>.
            </p>
          </div>
          <div class="home__buttons">
            <button class="btn btn--red">Contact me!</button>
            <button class="btn btn--blue">Resume</button>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section id="skills" class="skills hero">
        <div class="section-container">
          <h1 class="title title--blue">Skills</h1>
          <div class="section__background bg--skewed bg-blue flex flex-center">
            <div class="skills__cards">
              <!-- frontend -->
              <div class="skills__frontend bg--content">
                <div class="card bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/jlogo.svg" alt>
                    </figure>
                    <h3 class="card__title">Frontend Dev</h3>
                    <p
                      class="card__description"
                    >I love creating cool web apps and bringing designs to life</p>
                  </div>
                  <div class="card__body flex-center">
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/vue.png" alt>
                        </figure>
                      </div>
                      <p>Vue</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/vuex.png" alt>
                        </figure>
                      </div>
                      <p>
                        Vue
                        <strong>x</strong>
                      </p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <font-awesome-icon :icon="['fab', 'less']"></font-awesome-icon>
                      </div>
                      <p>less</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/js.svg" alt>
                        </figure>
                      </div>
                      <p>javascript</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/html.svg" alt>
                        </figure>
                      </div>
                      <p>html</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/css.svg" alt>
                        </figure>
                      </div>
                      <p>css</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- backend -->
              <div class="skills__backend">
                <div class="card bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/jlogo.svg" alt>
                    </figure>
                    <h3 class="card__title">Backend Dev</h3>
                    <p
                      class="card__description"
                    >I enjoy deploying my apps and playing with aws services</p>
                  </div>
                  <div class="card__body flex-center">
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/aws-lambda.svg" alt>
                        </figure>
                      </div>
                      <p>lambda</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/aws-ec2.svg" alt>
                        </figure>
                      </div>
                      <p>ec2</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/aws-cloudfront.svg" alt>
                        </figure>
                      </div>
                      <p>CloudFront</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/elasticsearch.svg" alt>
                        </figure>
                      </div>
                      <p class="text--sm">elasticsearch</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/flask.svg" alt>
                        </figure>
                      </div>
                      <p>flask</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/symfony.svg" alt>
                        </figure>
                      </div>
                      <p>symfony</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- design -->
              <div class="skills__design">
                <div class="card bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/jlogo.svg" alt>
                    </figure>
                    <h3 class="card__title">Frontend Dev</h3>
                    <p class="card__description">
                      As a creative person, I seriously
                      <span class="is-red">❤</span> designing UIs and prototyping apps
                    </p>
                  </div>
                  <div class="card__body flex-center">
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/adobexd.svg" alt>
                        </figure>
                      </div>
                      <p>Adobe XD</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/sketch.svg" alt>
                        </figure>
                      </div>
                      <p>Sketch</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- languages -->
              <div class="skills_languages">
                <div class="card bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/jlogo.svg" alt>
                    </figure>
                    <h3 class="card__title">Languages</h3>
                    <p class="card__description">
                      As a
                      <span class="is-green">Comp. Sci.</span> student, I have learn plenty languages
                      <br>
                      <span
                        class="is-primary"
                        style="font-size: 1.2rem;"
                      >#parseltongue #talkdirtytome</span>
                    </p>
                  </div>
                  <div class="card__body flex-center">
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/python.svg" alt>
                        </figure>
                      </div>
                      <p>Python</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/js.svg" alt>
                        </figure>
                      </div>
                      <p>javascript</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/c++.svg" alt>
                        </figure>
                      </div>
                      <p>C++</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/java.svg" alt>
                        </figure>
                      </div>
                      <p>java</p>
                    </div>
                    <div class="card__icon">
                      <div class="card">
                        <figure>
                          <img src="@/assets/imgs/icons/code/ruby.svg" alt>
                        </figure>
                      </div>
                      <p>ruby</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  min-height: 100vh;
}

@topnav-height: 6rem;
// ---
#topnav {
  z-index: 2;
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

// ---
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

.section-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

// ---
.skills {
  border: 1px solid orange;

  h1 {
    margin: 2.5rem;
  }

  .section__background {
    position: relative;

    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      width: 100%;
      height: 102%;
      top: 0;
      left: 0;
      background-color: @cold-blue;
      transform-origin: top left;
      transform: skewY(-3deg);
    }
  }

  .skills__cards {
    margin: 4rem 0 0;
    width: 80%;

    > div {
      margin-bottom: 2rem;

      .card__title {
        color: black;
      }

      .card__body {
        .card__icon {
          text-align: center;
          margin: 0 0.5rem 1rem;

          .card {
            border: 2px solid @grey;
            font-size: 4rem;
            padding: 0;
            width: 7rem;
            height: 7rem;
            display: flex;
            align-items: center;
            justify-content: center;

            figure {
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 70%;
              }
            }
          }
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
