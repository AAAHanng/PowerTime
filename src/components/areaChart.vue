<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      // 数据等
    }
  },
  props: {
    turnoverData: Array
  },
  updated() {
    this.initChart()
  },
  methods: {
    initChart() {
      // 获取图表容器
      const chartContainer = this.$refs.chart

      // 初始化 ECharts 实例
      const myChart = echarts.init(chartContainer)
      // 营业额数据结构转换
      const seriesData = this.turnoverData.map(item => item.money)
      // 月份转化
      function getChineseMonth(month) {
        const monthsMap = {
          '01': '1月',
          '02': '2月',
          '03': '3月',
          '04': '4月',
          '05': '5月',
          '06': '6月',
          '07': '7月',
          '08': '8月',
          '09': '9月',
          '10': '10月',
          '11': '11月',
          '12': '12月'
        }
        return monthsMap[month]
      }
      // x轴，即月份数据结构转化
      const xAxisData = this.turnoverData.map(item => getChineseMonth(item.months))
      // 设置图表配置项和数据
      const option = {
        title: {
          text: '营业额'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '数据',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            smooth: true, // 将折线改为光滑的曲线
            data: seriesData,
            label: {
              show: true,
              position: 'right',
              textStyle: {
                fontSize: 18 // 设置字体大小
              }
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option)
    }
  }
}
</script>