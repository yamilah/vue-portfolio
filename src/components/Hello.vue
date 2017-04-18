<template>
  <div class="nav">
    <img src="/src/assets/logo.png">
    <ul>
      <li>Work</li>
      <li>Contact</li>
      <li>Resume</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url(https://fonts.googleapis.com/css?family=Cormorant);
@import url(https://fonts.googleapis.com/css?family=Mukta+Vaani);

$sansSerif: 'Mukta Vaani', sans-serif;

.nav {
  font-family: $sansSerif;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 1.5px;

  padding: 30px;

  display: flex;
}

.nav ul {
  display: flex;
}

.nav li {
  padding-left: 15px;
}
</style>
