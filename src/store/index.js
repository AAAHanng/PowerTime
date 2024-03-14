import { createStore } from 'vuex'

import user from '@/store/modules/user.js'

// 创建一个新的 store 实例
const store = createStore({
  modules:{
    user
  }
})

export default store
