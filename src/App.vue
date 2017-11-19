<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import Normalize from 'normalize.css/normalize.css'

// eslint-disable-next-line
import SimpleLineIcons from 'simple-line-icons/css/simple-line-icons.css'

export default {
  name: 'app'
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,900')

  #app
    font-family: 'Poppins', sans-serif
</style>
