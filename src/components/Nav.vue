<template>
  <div class="sticky">
    <nav>
      <div class="icon-menu"></div>
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

    @media (max-width: 576px)
      // height: 100%
      width: 100%

  nav
    display: flex
    align-items: center

    padding: 30px

    @media (max-width: 576px)
      padding: 15px

    .icon-menu
      display: none

      @media (max-width: 576px)
        display: block

    ul
      display: flex

      @media (min-width: 576px)
        margin-left: 20px

      @media (max-width: 576px)
        display: none
        flex-direction: column

        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

    img
      width: 30px

      @media (max-width: 576px)
        position: absolute
        left: 50%
        transform: translate(-50%, -50%)

        height: 20px

      @media (min-width: 576px)
        margin-right: 20px

    li
      +typeface($weight: 400, $family: "Mukta Vaani")
      letter-spacing: 2px
      text-transform: uppercase

      border-bottom: 1px solid rgba(0,0,0,0)

      @media (min-width: 576px)
        margin-right: 30px

      @media (max-width: 576px)
        margin-bottom: 30px
        text-align: center

    li:hover, ul .router-link-active
      border-bottom: 1px solid black

</style>
