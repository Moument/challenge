import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/shop/CategoryView.vue'
import ProductListView from '@/views/shop/ProductListView.vue'
import ProductDetailView from '@/views/shop/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:type',
      name: 'type',
      component: CategoryView
    },
    {
      path: '/:type/:category',
      name: 'category',
      component: ProductListView
    },
    {
      path: '/:type/:category/:name',
      name: 'single-product',
      component: ProductDetailView
    }
  ]
})

export default router
