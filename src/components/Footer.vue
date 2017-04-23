<template>
  <footer>
    <p>Yamilah Atallah © 2017</p>
  </footer>
</template>

<script>
</script>

<style lang="sass" scoped>
  //Shorthand for font styling
  =typeface($style: normal, $variant: normal, $weight: 400, $line-height: 14px, $family: "Cormorant")
    font: $style $variant $weight $line-height $family

  footer
    padding: 30px
    +typeface($family: "Mukta Vaani")
</style>
