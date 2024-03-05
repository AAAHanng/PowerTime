import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Order from '@/views/order/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },

  ]
})

export default router