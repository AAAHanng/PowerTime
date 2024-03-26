import request from '@/utils/request.js'

export function GetTodayStatistics(data) {
  return request({
    method: 'GET',
    url: '/order/today-statistics',
    params: {
      ...data
    }
  })
}

export function GetChartStatistics(data) {
  return request({
    method:'GET',
    url:'/order/chart-statistics',
    params:{
      ...data
    }
  })
}
export function GetOrderList(data) {
  return request({
    method:'GET',
    url:'/order/list',
    params:{
      ...data
    }
  })
}
export function getOrderStatistics(data) {
  return request({
    method:'GET',
    url: '/order/order-statistics',
    params:{
      ...data
    }
  })
}
// 待处理订单接口
export function OrderSearch(data) {
  return request({
    method:'GET',
    url:'/order/order-search',
    params:{
      ...data
    }
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
