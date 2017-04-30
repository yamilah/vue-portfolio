<template>
  <main v-if="piece" class="container-fluid">
    <div v-if="piece.header_img" class="col-lg-12 piece-header" :style="{ backgroundImage: `url(${piece.header_img})` }"></div>
    <div class="container">
      <p>{{ piece.description }}</p>
    </div>
    <div v-if="piece.gallery" class="container">
      <div class="row">
        <div v-for="image in piece.gallery" :class="image.classes" :style="{ backgroundImage: `url(${image.url})` }"></div>
      </div>
    </div>
  </main>
</template>

<script>
  import Works from '../works.js'

  export default {
    data () {
      return {
        piece: null
      }
    },
    created () {
      this.getWork()
    },
    watch: {
      '$route': 'getWork'
    },
    methods: {
      getWork () {
        let work = Works.filter(w => w.slug === this.$route.params.slug)
        this.piece = work[0]
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  main
    margin-bottom: 30px

  p
    +typeface()
    line-height: 41px
    font-size: 30px
    text-align: center
    font-variant-ligatures: discretionary-ligatures
    padding: 100px

    &::selection
      font-weight: 200
      background-color: black
      color: white

    @media (max-width: 992px)
      padding: 130px 0 130px 0

    @media (max-width: 576px)
      padding: 70px 0 70px 0

      font-size: 20px
      line-height: 30px

  .container-fluid
    width: 100%
    @extend .main-margin

  .piece-header
    height: 40vw

    background-clip: content-box
    @extend .cover-img

    @media (max-width: 576px)
      height: 50vw


  .piece-control-sm
    @extend .piece-img

    height: 26vw

    @media (max-width: 992px)
      height: 30vw

  .piece-control
    @extend .piece-img

    height: 26vw

    @media (max-width: 992px)
      height: 50vw

      &:not(:first-child)
        margin-top: 5vw

    @media (max-width: 768px)
      height: 45vw

    @media (max-width: 576px)
      height: 60vw

  .zoom-img
    background-size: 130%

  .first-piece
    height: 40vw

  .first-piece-lg
    background-size: 105%

  @media (min-width: 992px)
    .first-piece:nth-child(1), .first-piece-lg:nth-child(1)
      margin-bottom: 30px

</style>
