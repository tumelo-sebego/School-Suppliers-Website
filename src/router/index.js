import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/schools/:name',
      name: 'school-catalog',
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/price-list',
      name: 'price-list',
      component: () => import('../views/PriceListView.vue')
    }
  ]
})

export default router
