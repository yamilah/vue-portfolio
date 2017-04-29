import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Piece from '@/components/Piece'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Work',
      component: Work
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/:slug',
      name: 'Piece',
      component: Piece
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    setTimeout(() => {
      let position = { x: 0, y: 0 }
      if (savedPosition) {
        position = savedPosition
      }
      window.scrollTo(position.x, position.y)
    }, 500)
    return null
  }
})
