<template>
  <!--首页-->
  <div class="main">
    <!--    待处理-->
    <el-row class="pending">
      <el-col :span="16" class="orderStatistics">
        <el-row>
          <el-text class="pendingText" >待处理订单</el-text>
        </el-row>
        <el-row class="pendingCharts">
          <el-col :span="5" class="pendingChart" v-for="(item, index) of orderStatistics" :key="index">
            <Pie :centerX="110" :centerY="80" :lineWidth="16" :radius="60" :data="item"
                 :cWidth="100" :cHeight="100" :totalOrder="totalOrder"></Pie>
            {{ item }}
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="8" class="pendingDisable">
        <el-row>
          <el-text class="pendingText">待处理反馈</el-text>
        </el-row>
        <el-row class="pendingFeedbacks">
          <el-col :span="12" class="pendingFeedback">
            <el-text class="count">{{ badReviews }}</el-text>
            <el-text class="feedbackType">未回复差评</el-text>
          </el-col>
          <el-col :span="12" class="pendingFeedback">
            <el-text class="count">{{ appraise }}</el-text>
            <el-text class="feedbackType">未回复评价</el-text>
          </el-col>
        </el-row>
        <el-text type="danger">功能暂未开放</el-text>
      </el-col>
    </el-row>
    <!--    营业额-->
    <el-row class="turnover">
      <el-col :span="16" class="turnoverChart">
        <area-chart :turnoverData="this.turnoverData"></area-chart>
      </el-col>
      <el-col :span="8" class="turnoverToday">

        <el-row class="turnoverBox">
          <el-row>
            <el-text class="turnoverText">今日营业额</el-text>
            <el-text class="count">￥{{ turnover }}</el-text>
          </el-row>

          <el-row>
            <el-text class="turnoverText">今日订单</el-text>
            <el-text class="count">{{ orders }}份</el-text>
          </el-row>

        </el-row>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import Pie from '@/components/pie.vue'
import AreaChart from '@/components/areaChart.vue'
import { ref } from 'vue'
import { getInfo, getOrderStatistics } from '@/api/order.js'
import { GetChartStatistics, GetTodayStatistics } from '@/api/home.js'

export default {
  name: 'index',
  components: {
    Pie,
    AreaChart
  },
  data() {
    return {
      badReviews: '0',
      appraise: '0',
      turnover: ref(0),
      orders: ref(0),
      id: '1',
      dataLoaded: false,
      chartsData: [
        {
          data: 10,
          chartText: '待付款'
        },
        {
          data: 12,
          chartText: '交易成功'
        },
        {
          data: 16,
          chartText: '已退货'
        },
        {
          data: 55,
          chartText: '申请退款中'
        },
        {
          data: 36,
          chartText: '申请退款失败'
        },
        {
          data: 34,
          chartText: '制作中'
        },
        {
          data: 89,
          chartText: '配送中'
        }

      ],
      // 待处理订单
      orderStatistics: {
        /*
        * 申请退款中
        * 配送中
        *申请退款失败
        *待付款
        *制作中
        *已退货
        * 交易成功
        * */
        'applyRefund': 0,
        'distribution': 0,
        'loseRefund': 0,
        'pendingPayment': 0,
        'production': 0,
        'returned': 0,
        'successfulPayment': 0
      },
      orderStatisticsText:[],
      totalOrder: ref(0),
      turnoverData: ref([])
    }
  },
  mounted() {
    // getInfo()
    this.GetTodayStatistics()
    this.getOrderStatistics()
  },
  created() {
    this.GetChartStatistics()
  },

  methods: {
    // 获取进入营业额数据
    GetTodayStatistics() {
      this.$api.home.GetTodayStatistics({
        storeId: '2'
      }).then(response => {
        this.orders = response.data.data.orders
        this.turnover = response.data.data.turnover
      })
    },
    // 获取营业额折现统计图数据
    GetChartStatistics() {
      this.$api.home.GetChartStatistics({
        storeId: '2'
      }).then(response => {
        this.turnoverData = response.data.data
        // console.log(this.turnoverData)
      })
    },
    // 获取待处理订单数据
    getOrderStatistics() {
      this.$api.order.getOrderStatistics({
        storeId: '2'
      }).then(response => {
        console.log('getOrderStatistics', response.data.data)
      })
    }

  },

  beforeMount() {
    for (let i = 0; i < this.chartsData.length; i++) {
      this.totalOrder += this.chartsData[i].data
    }

  }


}
</script>

<style scoped lang="scss">


.main {
  width: 80%;
  padding: 2rem 0;
}

.pending {
  margin: 0 1rem;

  .el-col {
    padding: 0 1rem;
  }
  .orderStatistics{
    background-color: rgba(250, 120, 32, 0.2);
    box-shadow: #bdbdbd 0 3px 5px;
    border-radius: 10px;
  }

  .pendingDisable {
    background-color: rgba(250, 120, 32, 0.2);
    box-shadow: #bdbdbd 5px 3px 5px;
    border-radius: 10px;
  }

  .pendingText {
    margin: 1rem;
    font-size: 36px;
    color: #333;

  }

  .pendingCharts {
    padding-bottom: 1rem;

  }

  .pendingChart {
    height: auto;
    text-align: center;


  }

  .pendingFeedbacks {
    display: flex;
    justify-content: center;

  }

  .pendingFeedback {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    .count {
      font-size: 72px;
    }

    .feedbackType {
      font-size: 16px;
    }

  }
}

.turnover {
  margin: 1rem;

  .turnoverChart {

  }


  .turnoverBox {
    display: flex;
    flex-direction: column;
    background-color: rgba(250, 120, 32, 0.2);
    box-shadow: #bdbdbd 5px 3px 5px;
    min-height: 20vh;
    border-radius: 10px;

    .el-text {
      color: black;
    }


    .count {
      font-size: 36px;
    }

    .turnoverText {
      font-size: 24px;
      margin: 0 2rem;
    }
  }
}

</style>
