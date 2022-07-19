import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'

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
  ]
})

export default router
