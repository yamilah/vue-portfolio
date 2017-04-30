<template>
  <div id="app">
    <main-nav></main-nav>
    <transition name="fade">
      <router-view class="router-container"></router-view>
    </transition>
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
    @import url(https://fonts.googleapis.com/css?family=Mukta+Vaani:400)
    @import url(https://fonts.googleapis.com/css?family=Neuton:200)

    // Apply these to push footer to bottom
    display: flex
    min-height: 100vh
    flex-direction: column

    .router-container
      flex: 1
      padding-top: 88px

      @media (max-width: 768px)
        padding-top: 76px

</style>
