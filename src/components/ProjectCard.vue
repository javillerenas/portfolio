<template>
  <div class="project-card">
    <div class="image">
      <img src="@/assets/imgs/projects/upvote.png" alt="UpVote! a hacker-news insipred app">
    </div>
    <div class="project-card__content">
        <h2 class="title2">UpVote!</h2>
        <p><span class="red">UpVote!</span> is a web application inspired by hacker news. It allows to vote on posts by other users.</p>
        <p>It was made with <span class="green">Vue.js</span> and <span class="green">Bulma.css</span></p>
        <p>Currently hosted in <span class="blue">GitHub.com</span></p>
        <div class="social-buttons">
          <a href="#">
            <button class="btn btn--green">View Live 🚀</button>
          </a>
          <a href="#">
            <button class="btn btn--grey">
              Source Code <font-awesome-icon :icon="['fab', 'github']" />
            </button>
          </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class ProjectCard extends Vue {}
</script>

<style lang="less">
@import '../assets/styles/styles.less';

.project-card {
  background-color: @black;
  display: flex;
  justify-content: space-around;
  padding: 6rem 8rem;
  // width: 80vw;
  max-width: 1200px;
  display: flex;

  @media @sm {
    padding: 5rem 2rem;
  }
  @media @xs {
    padding: 2rem;
    flex-direction: column;
    align-items: center;
  }

  /* image */
  div.image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
      height: auto;
      -webkit-filter: drop-shadow(5px 5px 5px #777);
      filter: drop-shadow(0px 0px 20px #777);

      @media @sm {
        width: 50%;
      }
    }
  }

  /* text */
  &__content {
    .title2 {
      color: @white;
      font-size: 5rem;
    }

    p {
      font-size: calc(1.5rem + 0.5vw);
      margin: 1rem 0;
    }

    .social-buttons {
      padding-top: 1rem;
      display: flex;
      justify-content: center;

      button {
        font-size: calc(1.3rem + 0.5vw);
        margin: 1rem;
        border-radius: 20px;
        border: 0;
        color: @black;
        height: 80%;
        padding: 0 2rem;
      }
    }
  }

}
</style>
