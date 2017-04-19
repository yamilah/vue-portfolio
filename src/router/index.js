import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
