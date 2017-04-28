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
        <a href="/static/resume.pdf" target="_blank">
          <li>Resume</li>
        </a>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  .sticky
    position: fixed
    z-index: 2
    width: 100%
    background-color: white

  nav
    display: flex
    align-items: center

    padding: 30px

    ul
      display: flex

    a, a:hover, a:focus
      color: black
      text-decoration: none
      outline: none

    img
      width: 30px
      margin-right: 20px

    li
      +typeface($weight: 400, $family: "Mukta Vaani")
      letter-spacing: 2px
      @extend .uppercase

      margin-left: 30px

      border-bottom: 1px solid rgba(0,0,0,0)

    li:hover, ul .router-link-active
      border-bottom: 1px solid black

</style>
