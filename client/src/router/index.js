import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'
import library from '../views/library.vue'
import station from '../views/station.vue'
import login from '../views/login-signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/library',
      name: 'library',
      component: library
    },
    {
      path: '/station/:id?',
      name: 'station',
      component: station
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

export default router
