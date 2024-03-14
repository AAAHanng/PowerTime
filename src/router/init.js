import router from '@/router/index.js'
import { getToken } from '@/utils/token.js'

const WhiteList = ['/login']
// 拦截器
router.beforeEach((to, from, next) => {
  if(getToken()){
    if(to.path === '/login'){
      next('')
    }
    next()
  }else{
    if(WhiteList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
})