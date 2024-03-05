import {createRouter, createWebHistory} from 'vue-router'
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
        }, {
            path: '/chat',
            bane: 'chat',
            component: ()=>import('@/views/chat/index.vue')

        }

    ]
})

export default router