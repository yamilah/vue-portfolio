<template>
  <main class="container">
    <p>
      Interested in working with me? Email me! You can also find more details about my professional history on LinkedIn. Feel free to also browse my GitHub, where all my code is freely available.
    </p>
  </main>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  .container
    @extend .main-margin

  main
    display: flex
    justify-content: center
    align-items: center
    p
      +typeface()
      text-align: center
      font-size: 30px
      font-variant-ligatures: discretionary-ligatures

</style>
