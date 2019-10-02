<template>
  <div class="hero-card">
    <div class="hero-card__content">
      <img src="@/assets/imgs/name.svg" alt="Name">
      <div class="hero-card__text">
        <p>Full stack <span class="bg-red black">Web Developer</span> and <span class="bg-green black">UI Designer</span> that <br>loves creating beautiful web apps.</p>
        <p>Creator of <a class="bg-blue black" href="#">CodeGems.io</a></p>
        <p>Currently a Cloud Developer <a class="bg-orange black" href="https://aws.amazon.com">@aws</a>.</p>
      </div>
      <p class="follow-me blue">Follow Me:</p>
      <div class="hero-card__social">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'dev']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'medium']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'dribbble-square']" />
        </a>
      </div>
    </div>

    <div class="hero-card__image">
      <img src="@/assets/imgs/javi.png" alt="image of javier llerenas">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class HeroCard extends Vue {}
</script>

<style lang="less">
@import '../assets/styles/styles.less';

.hero-card {
  background-color: @black;
  display: flex;
  justify-content: space-around;
  padding: 6rem 8rem;
  // width: 80vw;
  max-width: 1200px;
  display: flex;
  border-top-right-radius: @card-border;
  border-top-left-radius: @card-border;
  
  /* for multicolor border */
  position: relative;
  background-clip: padding-box; 

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    border-radius: inherit;
    margin-bottom: -12px; /* !importanté */
    background: @multicolor-gradient;
  }

  &__content {
    position: relative;
    top: -10px;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    img {
      margin-bottom: 1rem;
      width: 30vw;
      height: auto;
      max-width: 800px;
      min-width: 200px;
    }

    .hero-card__text {
      p {
        font-size: calc(1.5rem + 0.5vw);
        margin: 1rem 0;

        @media (max-width: 1046px) {
          br {
            display: none;
          }
        }
      }
    }

    .follow-me {
      margin-top: 1rem;
      text-decoration: underline;
      font-weight: 800;
    }
    .hero-card__social {
      display: flex;

      svg {
        color: @white;
        font-size: 4rem;
        padding-right: 1rem;
      }
    }
  }

  &__image {

    img {
      width: 20vw;
      height: auto;
      max-width: 400px;
      min-width: 150px;
    }
  }
}


/* phone */
@media @xs {
  .hero-card {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    &__image {
      img {
        // height: 20vh;
        @media (max-height: 780px) {
          min-width: 125px;
        }
      }
    }

    &__content {
      margin: 2rem 0 0;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
