import axios from 'axios'
import { getToken } from '@/utils/token.js'
import { ElMessage } from 'element-plus'


const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers.token=  getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, function (error) {

  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (res) {
  const status = res.data.code || 200
  const message = res.data.message || '未知错误'
  if (status === 401) {
    ElMessage.warning('你没有权限')
    return Promise.reject(new Error(message))
  }
  if (status === 403) {
    ElMessage.warning('验证码错误！')
    return Promise.reject(new Error(message))
  }
  if (status !== 200) {
    ElMessage.warning('错误码' + status + ' ' + message)
    return Promise.reject(new Error(message))
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default request
