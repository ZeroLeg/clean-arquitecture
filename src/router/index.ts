import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import titleRouter from '@/modules/title/router/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...titleRouter
  ]
})

export default router
