<template>
  <!--首页-->
  <div class="main">
    <!--    待处理-->
    <el-row class="pending" >
      <el-col :span="16">
        <el-row>
          <el-text class="pendingText">待处理订单</el-text>
        </el-row>
        <el-row class="pendingCharts">
          <el-col :span="5" class="pendingChart" v-for="(item, index) of chartsData" :key="index">
            <Pie :centerX="110" :centerY="80" :lineWidth="16" :radius="60" :data="item.data"
                 :cWidth="100" :cHeight="100" :totalOrder="totalOrder"></Pie>
            {{ item.chartText }}
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
        <el-text type="warning">功能暂未开放</el-text>
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
          </el-row>
          <el-text class="count">￥{{ turnoverToday }}</el-text>
          <el-row>
            <el-text class="turnoverText">今日订单</el-text>
          </el-row>
          <el-text class="count">{{ orderToday }}</el-text>
        </el-row>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import Pie from '@/components/pie.vue'
import AreaChart from '@/components/areaChart.vue'
import { ref } from 'vue'

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
      turnoverToday: '1345',
      orderToday: '334',
      id: '1',
      chartsData: [
        {
          data: 10,
          chartText: '待付款'
        },
        {
          data: 12,
          chartText: '交易完毕'
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
      totalOrder: ref(0),
      turnoverData:[5230,6489,7725,9341,13480,6563,5230,6489,7725,9341,13480,6563]
    }
  },
  methods: {},
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
  .pendingDisable{
    background-color: grey;
  }

  .pendingText {
    margin: 1rem;
    font-size: 36px;

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
    background-color: lightgrey;
    justify-content: space-between;

    padding: 3rem;
    border-radius: 20px;
    .el-text{
      color: black;
    }


    .count {
      font-size: 36px;
    }

    .turnoverText {
      font-size: 24px;
    }
  }
}

</style>