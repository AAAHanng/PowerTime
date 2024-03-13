import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use((config) => config, (error) =>
// 对请求错误做些什么
  Promise.reject(error))

// 添加响应拦截器
request.interceptors.response.use((response) => response, (error) => Promise.reject(error))

export default request
