<template>
  <div id="app">
    <main-nav></main-nav>
    <!-- <router-view></router-view> -->
  </div>

</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    'main-nav': Nav
  }
}
</script>

<style lang="sass">
  #app
    // Import the two typefaces I'm using
    @import url(https://fonts.googleapis.com/css?family=Cormorant)
    @import url(https://fonts.googleapis.com/css?family=Mukta+Vaani)
</style>
