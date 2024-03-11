<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      // 数据等
    };
  },
  props:{
    turnoverData:Array
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 获取图表容器
      const chartContainer = this.$refs.chart;

      // 初始化 ECharts 实例
      const myChart = echarts.init(chartContainer);

      // 设置图表配置项和数据
      const option = {
        title: {
          text: '营业额',
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
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
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
            data: this.turnoverData,
            label: {
              show: true,
              position: 'top'
            },
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    }
  }
};
</script>