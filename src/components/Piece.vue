<template>
  <main v-if="piece" class="container">
    <div v-for="image in piece.gallery">
      <img :src="image.url" :class="image.classes">
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
</style>
