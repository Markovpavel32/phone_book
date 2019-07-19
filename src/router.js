import Vue from 'vue'
import Router from 'vue-router'
import Root from './components/Root'
import UserPage from './components/UserPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/user/:id',
      name: 'user_page',
      component: UserPage
    }
  ]
})
