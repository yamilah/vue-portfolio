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
    @import url(https://fonts.googleapis.com/css?family=Mukta+Vaani:200,300,400,500,600,700,800)
    @import url(https://fonts.googleapis.com/css?family=Cormorant:300,300i,400,400i,500,500i,600,600i,700,700i)

    // Apply these to push footer to bottom
    display: flex
    min-height: 100vh
    flex-direction: column

  // Make footer sticky to bottom
  main
    flex: 1

</style>
