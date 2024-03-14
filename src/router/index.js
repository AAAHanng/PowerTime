import { createRouter, createWebHistory } from 'vue-router'
import myLayout from '@/views/components/myLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component:myLayout,
      redirect: 'index',
      children:[
        {
          path:'index',
          component: () => import('@/views/index/index.vue'),
          name:'index'
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/order/index.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/chat',
          name: 'chat',
          component: () => import('@/views/chat/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: { isAuth: true, title: '主页', showNav: true }
    }
  ]
})


export default router
