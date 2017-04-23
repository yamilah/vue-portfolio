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
  //Shorthand for font styling
  =typeface($style: normal, $variant: normal, $weight: 400, $line-height: 14px, $family: "Cormorant")
    font: $style $variant $weight $line-height $family

  main
    display: flex
    justify-content: center
    align-items: center
    p
      +typeface($weight: 300)
      font-size: 30px
      font-variant-ligatures: discretionary-ligatures
</style>
