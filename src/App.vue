<template>
  <div id="app">
    <main>
      <!-- nav -->
      <section id="topnav">
        <div class="topnav__wrapper">
          <a href="#home">
            <figure class="topnav__logo-wrapper">
              <img src="@/assets/imgs/jlogo.svg" alt="javi-logo">
            </figure>
          </a>
          <a href="#" @click.prevent="toggleSideNav()">
            <figure class="topnav__hamburger flex-center">
              <font-awesome-icon :icon="['fas', 'bars']"/>
            </figure>
          </a>
          <nav id="side-nav" class="side-nav flex flex-center" :class="sideNavClass" @click="removeSideNav()">
            <div class="side-nav__wrapper flex flex-center flex-column">
              <a href="#home">
                <button class="btn btn--light-grey btn--wide">Home</button>
              </a>
              <a href="#skills">
                <button class="btn btn--light-grey btn--wide">Skills</button>
              </a>
              <a href="#projects">
                <button class="btn btn--light-grey btn--wide">Projects</button>
              </a>
              <a href="mailto:javr.llerenas@gmail.com">
                <button class="btn btn--light-grey btn--wide">Contact</button>
              </a>
              <a href="/Javier Llerenas Resume.pdf">
                <button class="btn btn--light-grey btn--wide">Resume</button>
              </a>
            </div>
          </nav>
        </div>
      </section>

      <!-- home -->
      <div class="remove-sidenav" @click="removeSideNav()">
      <section id="home" class="home">
        <div class="home__wrapper">
          <div class="figure-wrapper">
            <div class="icon-wave-wrapper">
              <i class="icon-wave">👋</i>
            </div>
            <figure class="home__figure">
              <img class="home__profile" src="@/assets/imgs/profile-circle.png" alt>
            </figure>
            <div class="social-icons">
              <a href="https://www.github.com/javillerenas" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
              </a>
              <a href="https://www.linkedin.com/in/javillerenas" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
              </a>
              <a href="https://www.twitter.com/javibalvin" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              </a>
            </div>
          </div>
          <figure class="home__name">
            <img src="@/assets/imgs/name.svg" alt="Javier Llerenas">
          </figure>
          <div class="home__text">
            <p>
              I am an energetic ⚡
              <span class="is-orange">Computer Scientist</span>
              <br>who loves
              <span class="is-red">good design</span> 🎨
              <br>and creating
              <span class="is-primary">beautiful web apps</span>.
            </p>
            <p class="hide-xxs">
              Located in Las Vegas, NV.
              <br>I specialize in
              <span class="is-green">Serverless Front End + Design</span>.
            </p>
          </div>
          <div class="home__buttons">
            <a href="mailto:javr.llerenas@gmail.com">
              <button class="btn btn--red btn--wide">Contact me!</button>
            </a>
            <a href="/Javier Llerenas Resume.pdf" target="_blank">
              <button class="btn btn--blue btn--wide">Resume</button>
            </a>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section id="skills" class="skills hero">
        <div class="section-container">
          <div class="section__background bg--skewed bg-blue flex flex-center flex-column">
            <h1 class="title title--white">Skills</h1>
            <div class="skills__cards">
              <!-- frontend -->
              <div class="skills__frontend bg--content">
                <div class="card bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/icons/front.png" alt>
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
                      <img src="@/assets/imgs/icons/back.png" alt>
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
                      <img src="@/assets/imgs/icons/design.png" alt>
                    </figure>
                    <h3 class="card__title">Design</h3>
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
                      <img src="@/assets/imgs/icons/langs.png" alt>
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
      <section id="projects" class="projects hero">
        <div class="section-container">
          <div class="section__background bg--skewed bg-orange flex flex-center flex-column">
            <h1 class="title title--white">Projects</h1>
            <div class="project__cards">
              <div class="project bg--content">
                <div class="card card--shadow bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/projects/portfolio.png" alt>
                    </figure>
                    <h3 class="card__title">Personal Portfolio</h3>
                    <p class="card__description">My personal webapge to showcase my skills</p>
                  </div>
                  <div class="card__body">
                    <div class="project__pills">
                      <p class="pill bg-green is-white">vue</p>
                      <p class="pill bg-red is-white">adobeXD</p>
                      <p class="pill bg-orange">aws</p>
                    </div>
                    <button class="btn btn--blue">
                      <a href="http://www.github.com/javillerenas/portfolio" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div class="project bg--content">
                <div class="card card--shadow bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/projects/upvote.png" alt>
                    </figure>
                    <h3 class="card__title">UpVote!</h3>
                    <p class="card__description">My personal webapge to showcase my skills</p>
                  </div>
                  <div class="card__body">
                    <div class="project__pills">
                      <p class="pill bg-green is-white">vue</p>
                      <p class="pill bg-green is-white">bulma</p>
                    </div>
                    <a href="https://github.com/javillerenas/UpVote" target="_blank">
                      <button class="btn btn--blue">
                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project bg--content">
                <div class="card card--shadow bg-white flex-center flex-column">
                  <div class="card__header flex-center flex-column">
                    <figure class="card__icon">
                      <img src="@/assets/imgs/projects/carpricepredictor.png" alt>
                    </figure>
                    <h3 class="card__title">Car Price Predictor</h3>
                    <p class="card__description">My personal webapge to showcase my skills</p>
                  </div>
                  <div class="card__body">
                    <div class="project__pills">
                      <p class="pill bg-green is-white">vue</p>
                      <p class="pill bg-red is-white">adobeXD</p>
                      <p class="pill bg-orange">aws</p>
                    </div>
                    <a
                      href="https://www.github.com/javillerenas/car-price-predictor"
                      target="_blank"
                    >
                      <button class="btn btn--blue">
                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <!-- -->
            </div>
          </div>
        </div>
      </section>

      <!-- contact -->
      <section id="contact" class="contact">
        <section class="section-container flex flex-center">
          <div class="card bg-white card--shadow">
            <div class="card__header">
              <h1 class="card__title">Let's Work Together! 👍</h1>
              <p class="card__description">
                I am a very passionate 🔥, energetic ⚡, and
                friendly 😄 person.
                <span
                  class="hide-xs"
                >
                  My strengths are in full-stack web
                  development but also enjoy design projects.
                </span>
              </p>
              <button class="btn btn--red btn--wide">Contact Me</button>
            </div>
          </div>
        </section>
      </section>

      <!-- footer -->
      <footer id="footer" class="footer">
        <div class="footer__main">
          <div class="footer__container flex-center">
            <div class="footer__logo flex-center flex-column">
              <a href="#home">
                <figure>
                  <img src="@/assets/imgs/jlogo.svg" alt="javier llerenas">
                </figure>
              </a>
              <h3>Javier</h3>
            </div>
            <div class="footer__nav">
              <nav class="flex-center flex-column">
                <a href="#home">home</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
              </nav>
            </div>
            <div class="footer__follow">
              <p>Follow me on:</p>
              <div class="footer__brand-nav">
                <a href="https://www.github.com/javillerenas" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                </a>
                <a href="https://www.linkedin.com/in/javillerenas" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
                </a>
                <a href="https://www.twitter.com/javibalvin" target="_blank">
                  <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>
            built with
            <span class="is-red">❤</span> and ☕ | open-sourced on
          </p>
          <font-awesome-icon class="footer-icon" :icon="['fab', 'github']"></font-awesome-icon>
        </div>
      </footer>
      <!-- end main -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  showSideNav = false;

  get sideNavClass() {
    return this.showSideNav ? "side-nav--show" : "side-nav--hidden";
  }

  toggleSideNav () {
    this.showSideNav = !this.showSideNav;
    console.log(this.showSideNav);
  }
  removeSideNav() {
    if (this.showSideNav) {
      this.showSideNav = !this.showSideNav;
    }
  }
}
</script>

<style lang="less">
@import "./assets/styles/styles.less";

#app {
  margin: 0 auto;
  // max-width: 1200px;
  box-sizing: content-box;
  box-shadow: 0px 0px 50px @grey-darker;

  @media (min-width: 1200px) {
    // border-left: 2px solid @grey-darker;
    // border-right: 2px solid @grey-darker;
    // border-bottom: 2px solid @grey-darker;
  }
}

main {
  background-color: @background-light;
}

.hero {
  width: 100%;
}

@topnav-height: 6rem;
// ---
#topnav {
  box-sizing: content-box;
  z-index: 2;
  width: 100%;
  // max-width: 1200px;
  height: @topnav-height;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: @blue-secondary;
  background-image: linear-gradient(180deg, #00bdfe 25%, #007afe 100%);
  border-bottom: 1px solid @grey-darker;

  @media (min-width: 1200px) {
    border-top: 1px solid @grey-darker;
  }

  .topnav__wrapper {
    width: 90%;
    max-width: 75rem;
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

      @media (min-width: 700px) {
        display: none;
      }
    }
  }

  .side-nav {
    position: absolute;
    top: 0;
    right: 0;
    background: @cold-blue;
    height: 100vh;
    transition: transform 0.3s ease;

    @media (max-width: 425px) {
      width: 75vw;
    }
    @media (min-width: 426px) {
      width: 50vw;
    }
    @media (min-width: 550px) {
      width: 30vw;
    }

    &#side-nav {
      @media (min-width: 700px) {
        transform: translateX(0);
        position: relative;
        height: 100%;
        width: 60%;
        background: none;

        .side-nav__wrapper {
          flex-direction: row;

          a {
            width: auto;

            button {
              height: 3.5rem;
              box-shadow: none;
              font-size: 1.6rem;

              &:hover {
                box-shadow: @white-shadow;
              }
            }
          }
        }
      }
    }

    &--hidden {
      @media (max-width: 425px) {
        transform: translateX(75vw);
      }
      @media (min-width: 426px) {
        transform: translateX(50vw);
      }
      @media (min-width: 550px) {
        transform: translateX(30vw);
      }
    }

    &__wrapper {
      height: 40%;
      min-height: 35rem;
      width: 100%;
      justify-content: space-around;

      a {
        width: 60%;

        button {
          width: 100%;
          box-shadow: @white-shadow;
          color: @dark-blue;
          background: white;
          border: none;
        }
      }
    }
  }
}

// ---
#home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('./assets/imgs/shapes2x.png');

  .home__wrapper {
    margin-top: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 3rem;

    @media (min-width: 1100px) {
      margin-bottom: 5rem;
    }

    .figure-wrapper {
      position: relative;
      margin: 0 auto;
      width: max-content;

      .icon-wave-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        font-size: 7rem;
        left: -55%;

        @media (max-width: 600px) {
          font-size: 5rem;
          left: -40%;
        }
        @media (min-width: 800px) {
          font-size: 6rem;
          left: -45%;
        }
        @media (max-width: 400px) {
          display: none;
        }
      }

      .social-icons {
        position: absolute;
        top: 0;
        height: 100%;
        right: -30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 4rem;

        > * {
          color: @grey;
        }

        > *:nth-child(2) {
          position: relative;
          right: -40%;
        }

        @media (max-width: 400px) {
          display: none;
        }
      }
    }
    .home__figure {
      pointer-events: none;
      text-align: center;

      .home__profile {
        width: calc(15rem + 10vw);
        max-width: 21rem;
        border-radius: 50%;
        box-shadow: @dark-shadow;
        margin-bottom: 1vh;

        @media (min-width: 800px) {
          max-width: 25rem;
        }
      }
    }

    .home__name {
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: calc(15rem + 10vw);

        @media (min-width: 700px) {
          max-width: 230px;
        }
      }
    }

    .home__text {
      text-align: center;

      p {
        margin-top: 0.5rem;
        font-size: calc(1.5rem + 0.3vw);
      }

      @media (max-width: 400px) {
        margin-top: 0;
        line-height: 2.2rem;
      }

      .hide-xxs {
        @media (max-width: 337px) {
          display: none;
        }
      }
    }

    .home__buttons {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      button {
        height: 5rem;
        transition: all 0.2s ease;

        &:hover {
          width: 19rem;
          height: 6rem;
          font-size: 2.2rem;
        }

        &:first-child {
          margin-bottom: 1.5rem;

          @media (max-width: 400px) {
            margin-bottom: 1rem;
          }
          @media (max-height: 667px) {
            display: none;
          }
        }

        &:last-child {
          @media (max-height: 700px) {
            display: none;
          }
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
#skills {
  .title {
    margin: 2.5rem;
    text-shadow: 5px 5px 30px darken(@cold-blue, 40%);
  }
  .section__background {
    position: relative;
    z-index: 0;
    width: 100%;

    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      width: 100%;
      height: 140%;
      top: 0;
      left: 0;
      background-color: @cold-blue;
      transform-origin: top left;
      transform: skewY(-3deg);
    }
  }

  .skills__cards {
    margin: 2rem 0 0;
    width: 90%;
    max-width: 100rem;

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    > div {
      margin-bottom: 2rem;

      > .card {
        box-shadow: @dark-shadow;
      }

      @media (min-width: 800px) {
        width: 45%;
      }

      .card__header {
        figure {
          width: 6rem;
          img {
            width: 100%;
          }
        }
      }

      .card__title {
        color: black;
      }

      .card__body {
        max-width: 300px;

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

// ---
#projects {
  margin-top: 10rem;

  .title {
    margin: 2.5rem;
    text-shadow: 5px 5px 30px darken(@cool-orange, 60%);
  }

  .section__background {
    width: 100%;
    position: relative;
    z-index: 0;

    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      width: 100%;
      height: 102%;
      top: 0;
      left: 0;
      background-color: @cool-orange;
      transform-origin: top right;
      transform: skewY(3deg);
    }
  }

  .project__cards {
    margin: 2rem 0 0;
    width: 90%;
    max-width: 100rem;

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .project {
      @media (min-width: 800px) {
        width: 45%;
      }

      .card__header {
        margin-bottom: 1rem;
      }
      figure {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        img {
          max-width: 70%;
          max-height: 300px;
        }
      }
    }
    > div {
      margin-bottom: 2rem;

      .card__title {
        color: black;
      }

      .card__body {
        width: 90%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        .project__pills {
          flex: 3;
          display: flex;
          justify-content: center;
        }

        p {
          display: inline-block;
          margin: 0.3rem;
        }

        button {
          box-shadow: unset;

          a {
            color: white;
          }

          &:hover {
            box-shadow: @blue-shadow;
          }

          > * {
            font-size: 3rem;
          }
          width: 6rem;
          height: 6rem;
          padding: 0;
        }
      }
    }
  }
}

#contact {
    background: url('./assets/imgs/shapes2x.png');

  .section-container {
    width: 90%;
    height: 45vh;
    max-height: 45rem;
    margin: 2rem auto 0;

    .card {
      max-width: 60rem;
    }

    .card__title {
      border-bottom: 0.5rem @blue-secondary solid;
    }

    .card__description {
      line-height: 1.3;
    }

    button.btn {
      margin-top: 2rem;

      height: 5rem;
      transition: all 0.2s ease;

      &:hover {
        width: 19rem;
        height: 6rem;
        font-size: 2.2rem;
      }
    }
  }
}

#footer {
  .footer__main {
    padding: 2.5rem;
    color: white;
    background-color: @blue-secondary;
    background-image: @blue-gradient;

    .footer__container {
      display: flex;
      justify-content: space-around;
      max-width: 100rem;
      margin: auto;

      .footer__logo {
        h3 {
          font-size: 1.4rem;
          margin-top: 0.1rem;
        }
      }

      .footer__nav {
        nav > a {
          color: white;
          font-size: 1.5rem;
          line-height: 2;
          text-decoration: none;
        }
      }

      .footer__follow {
        p {
          margin: 0 0 1rem;
        }
        .footer__brand-nav {
          color: @grey;
          display: flex;
          justify-content: space-around;
          font-size: 2.5rem;

          > * {
            color: @grey-darker;
          }
        }
      }
    }
  }
  .footer__bottom {
    text-align: center;

    p {
      display: inline-block;
      margin-right: 0.5rem;
    }
    .footer-icon {
      font-size: 2rem;
    }
  }
}
</style>
