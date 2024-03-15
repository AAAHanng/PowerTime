import { Login } from '@/api/order.js'
import { setToken } from '@/utils/token.js'

const state = {
  token:''
}
const mutations={
  SET_TOKEN (state, value) {
    state.token = value
  }
}
const actions = {
  login(context,data){
    return new Promise((resolve, reject) => {
      Login(data).then(res=>{
        setToken(res.data.data)
        context.commit('SET_TOKEN', res.data.token)
        resolve()
      }).catch((err)=>{
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
