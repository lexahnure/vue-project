import Vue from 'vue'
import Router from 'vue-router'
import Exercises from '../components/Exercises'
import Error from '../components/Error'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Trainings from '../components/Trainings'
import Profile from '../components/Profile'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: Trainings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    }
  ]
})

// Nav Guards
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if user logged in
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  } else {
    // Proceed to route
    next()
  }
})

export default router
