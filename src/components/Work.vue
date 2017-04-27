<template>
  <main>
    <div class="row main-margin">
      <div class="work col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" v-for="work in works">
        <router-link :to="work.slug">
          <div class="work-img" :style="{ backgroundImage: `url(${work.img})` }"></div>
          <p>{{ work.title }}</p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
  import Works from '../works.js'

  export default {
    data () {
      return {
        works: Works
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  main
    overflow-x: hidden

  .work
    padding: 0
    background-color: black
    display: flex
    flex-direction: column

    p
      // Center this paragraph tag inside the image
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

      +typeface($weight: 200, $family: "Mukta Vaani")
      font-size: 16px
      @extend .uppercase
      letter-spacing: 2.5px
      opacity: 0
      color: white

      pointer-events: none

  .work-img
    height: 65vw
    @extend .css-image

    display: flex

    @media (min-width: 1200px)
      height: 33vw

  .work-img:hover
    opacity: 0.7
    transition: opacity 0.3s ease-in

  .work-img:hover + p
    opacity: 1
    transition: opacity 0.3s ease-in

</style>
