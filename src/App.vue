<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'

  export default {
    components: {
      'main-nav': Nav,
      'main-footer': Footer
    }
  }
</script>

<style lang="sass">
  #app
    // Import the two typefaces I'm using
    @import url(https://fonts.googleapis.com/css?family=Cormorant)
    @import url(https://fonts.googleapis.com/css?family=Mukta+Vaani)
</style>
