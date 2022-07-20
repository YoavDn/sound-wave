import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'
import library from '../views/library.vue'
import station from '../views/station.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
  ]
})

export default router
