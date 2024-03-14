import request from '@/utils/request.js'

export function getAll(params) {
  return request({
    method: 'GET',
    url: '/products',
    params
  })
}

export function getOne(id) {
  return request({
    method: 'GET',
    url: `/products/${id}`
  })
}

export function update(id, data) {
  return request({
    method: 'PUT',
    url: `/products/${id}`,
    data
  })
}

export function getCode(data) {
  return request({
    method: 'post',
    url: '/store-manage',
    params: {
      email: data
    }
  })
}
export function  Login(data){
  return request({
    method:'post',
    url:'/store-manage/login',
    headers:{
      isToken:false
    },
    params:{
      ...data
    }
  })
}

export function getInfo(){
  return request({
    method:'get',
    url:'/store-manage/user-info'
  })
}
