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
