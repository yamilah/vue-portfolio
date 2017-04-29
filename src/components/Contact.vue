<template>
  <main class="container">
    <p>
      Interested in working with me? Email me! You can also find more details about my professional history on LinkedIn. Feel free to also browse my GitHub, where all my code is freely available.
    </p>
    <Social></Social>
  </main>
</template>

<script>
  import Social from '@/components/Social'

  export default {
    components: {
      Social
    }
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  .container
    @extend .main-margin

  main
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    p
      +typeface()
      text-align: center
      font-size: 30px
      font-variant-ligatures: discretionary-ligatures

      padding-bottom: 30px

  .icons
    display: flex

    li
      padding-left: 30px
      // font-size: 30px

</style>
