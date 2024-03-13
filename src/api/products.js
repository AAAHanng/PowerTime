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
