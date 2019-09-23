import Vue from 'vue'
import Router from 'vue-router'
import Exercises from '../components/Exercises'
import Error from '../components/Error'
import Home from '../components/Home'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: Error
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/exercises',
      component: Exercises
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
