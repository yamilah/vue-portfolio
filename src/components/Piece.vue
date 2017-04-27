<template>
  <main v-if="piece" class="container-fluid">
    <div v-if="piece.header_img" class="col-lg-12 piece-header" :style="{ backgroundImage: `url(${piece.header_img})` }"></div>
    <div class="container">
      <p>{{ piece.description }}</p>
    </div>
    <div v-if="piece.gallery" v-for="image in piece.gallery">
      <div :class="image.classes" :style="{ backgroundImage: `url(${image.url})` }"></div>
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

  p
    +typeface($weight: 300)
    line-height: 41px
    font-size: 30px
    font-variant-ligatures: discretionary-ligatures
    padding: 100px

  .container-fluid
    width: 100%
    @extend .main-margin

  .piece-header
    height: 40vw
    @extend .css-image

  .piece-height
    height: 30vw
    @extend .css-image

</style>
