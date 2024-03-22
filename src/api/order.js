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
