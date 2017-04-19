<template>
  <nav>
    <img src="../assets/personal-logo.svg">
    <ul>
      <li>Work</li>
      <li>Contact</li>
      <li>Resume</li>
    </ul>
  </nav>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

  //Shorthand for font styling
  =typeface($style: normal, $variant: normal, $weight: 400, $line-height: 14px, $family: "Cormorant")
    font: $style $variant $weight $line-height $family

  // Shorthand for aligning items with flex
  =alignment($position)
    align-items: $position

  // Set the display type
  =display($property)
    display: $property

  $nav-letterspacing: 2px

  .uppercase
    text-transform: uppercase

  nav
    +display(flex)
    +alignment(center)

    +typeface($family: "Mukta Vaani")
    letter-spacing: $nav-letterspacing
    padding: 30px
    @extend .uppercase

    ul
      +display(flex)

    img
      width: 30px
      margin-right: 50px

    li
      border-bottom: 1px solid rgba(0,0,0,0)

    li:not(:first-child)
      margin-left: 30px

    li:hover
      border-bottom: 1px solid black

</style>
