<template>
  <main>
    <div class="row">
      <div class="work col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" v-for="work in works">
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

<style lang="sass" scoped>
  .work
    padding: 0
    background-color: black

  .work-img
    height: 65vw
    @media (min-width: 1200px)
      height: 33vw
    &:hover
      opacity: 0.7
      transition: opacity 0.3s ease-in
</style>
