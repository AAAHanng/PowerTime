import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { getToken } from '@/utils/token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: { isAuth: true, title: '主页', showNav: true }
      //   在登陆的路由中我加入了一个meta属性，由于其他组件未定义此showNav，$route.meta.showNav的值为"undefined"即为false,
      //   因此只需在登陆中加入此属性并设置为true即可。这样在登陆页面时，导航栏不被显示。
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
})

// 拦截器
/* router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    let parm = new URLSearchParams();
    let token = window.sessionStorage.getItem('token');
    parm.append("token", token);
    axios({
      url: 'http://localhost:8080/user/checkToken',
      method: 'post',
      data: parm
    }).then(response => {
      if (response.data.code===400) { //如何token解析失败，跳转到登录页面
        next('/login');
      } else {
        next()
      }
    })
  } else {
    next()
  }
}); */

export default router
