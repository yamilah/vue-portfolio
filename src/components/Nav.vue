<template>
  <nav :class="['sticky-wrapper', navHidden ? 'mobile-close' : '']">
    <div class="menu-wrapper">
      <div @click="toggleMenu">
        <div class="icon-menu"></div>
        <div class="icon-close"></div>
      </div>
      <router-link to="/">
        <img @click="toggleMenu" src="../assets/personal-logo.svg">
      </router-link>
    </div>
    <div class="ul-wrapper">
      <ul>
        <li @click="toggleMenu">
          <router-link to="/">Work</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li @click="toggleMenu">
          <a href="/static/resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        navHidden: true
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.resizeCallback)
        this.resizeCallback()
      })
    },
    methods: {
      resizeCallback () {
        if (document.documentElement.clientWidth > 767) {
          this.navHidden = true
        }
      },
      toggleMenu () {
        this.navHidden = !this.navHidden
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  .sticky-wrapper
    position: fixed
    z-index: 2
    width: 100%
    height: 100%
    background-color: white

    @media (min-width: 768px)
      display: flex
      align-items: center

      height: 88px

  nav
    .menu-wrapper
      display: flex

      margin: 30px

      .icon-menu, .icon-close
        cursor: pointer

      .icon-menu
        display: none

      @media (min-width: 768px)
        margin: 30px 50px 30px 30px

        .icon-close, .icon-menu
          display: none

    img
      position: absolute
      left: 50%

      height: 16px

      @media (min-width: 768px)
        position: static
        left: auto

        height: 25px

    .ul-wrapper
      display: flex
      justify-content: center
      align-items: center
      height: 100%

      @media (min-width: 768px)
        justify-content: normal
        display: flex

    ul
      flex-direction: column
      text-align: center

      margin-top: -120px

      @media (min-width: 768px)
        display: flex
        flex-direction: row

        margin-top: 0px

    li
      +typeface($weight: 400, $family: "Mukta Vaani")
      letter-spacing: 2px
      text-transform: uppercase

      border-bottom: 1px solid rgba(0,0,0,0)

      margin: 30px

      @media (min-width: 768px)
        margin: 0 30px 0 0

    li:hover, ul .router-link-active
      border-bottom: 1px solid black

  @media (max-width: 767px)
    @keyframes opacity
      0%
        opacity: 0
      100%
        opacity: 1

    .ul-wrapper
      animation: opacity 1s ease

    nav.mobile-close
      height: 76px

    nav.mobile-close
      .ul-wrapper, .icon-close
        display: none

      .icon-menu
        display: block

</style>
