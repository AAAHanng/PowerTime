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