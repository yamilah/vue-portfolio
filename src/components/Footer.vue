<template>
  <footer>
    <p>Yamilah Atallah © 2017</p>
    <Social v-show="showSocial"></Social>
  </footer>
</template>

<script>
  import Social from '@/components/Social'

  export default {
    components: {
      Social
    },
    computed: {
      showSocial () {
        return this.$route.path !== '/contact'
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import ../sass/utils

  footer
    display: flex
    align-items: center
    justify-content: space-between

    padding: 30px

    +typeface($weight: 400, $family: "Mukta Vaani")

    @media (max-width: 768px)
      flex-direction: column
      align-items: normal
      align-self: center

    @media (min-width: 768px) and (max-width: 992px)
      flex-direction: column
      align-items: flex-start

      p
        margin-bottom: 5px

</style>
