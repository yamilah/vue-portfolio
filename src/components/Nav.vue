<template>
  <div class="sticky">
    <nav>
      <router-link to="/">
        <img src="../assets/personal-logo.svg">
      </router-link>
      <ul>
        <li>
          <router-link to="/">Work</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>Resume</li>
      </ul>
    </nav>
  </div>
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

  .sticky
    position: fixed
    z-index: 2
    width: 100%
    background-color: white

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

    a, a:hover, a:focus
      color: black
      text-decoration: none
      outline: none

    img
      width: 30px
      margin-right: 50px

    li
      border-bottom: 1px solid rgba(0,0,0,0)

    li:not(:first-child)
      margin-left: 30px

    li:hover, ul .router-link-active
      border-bottom: 1px solid black

</style>
