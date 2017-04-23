<template>
  <main class="container-fluid">
    <div class="row">
      <div class="work col-xs-12 col-sm-12 col-md-12 col-lg-6" v-for="work in works">
        <div class="work-img" :style="{ backgroundImage: `url(${work.img})` }">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        works: [
          {
            title: 'UXPA Poster',
            img: '/static/uxpa.jpeg',
            tags: [
              'visual design',
              'branding',
              'illustration'
            ],
            slug: 'uxpa'
          },
          {
            title: 'Another work',
            img: '/static/thing.jpeg',
            tags: [
              'fine farts',
              'visual art'
            ],
            slug: 'work'
          },
          {
            title: 'Another work',
            img: '/static/thing.jpeg',
            tags: [
              'fine farts',
              'visual art'
            ],
            slug: 'stuff'
          },
          {
            title: 'Another work',
            img: '/static/thing.jpeg',
            tags: [
              'fine farts',
              'visual art'
            ],
            slug: 'stuffs'
          },
          {
            title: 'Another work',
            img: '/static/thing.jpeg',
            tags: [
              'fine farts',
              'visual art'
            ],
            slug: 'stuffffs'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .row
    padding-top: 97px

  .work
    padding: 0

  .work-img
    height: 30vw
</style>
