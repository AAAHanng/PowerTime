<template>
  <!--  订单-->
  <div class="main">
    <el-row gutter="20" class="searchArea" justify="space-between">
      <el-col :span="6">
        <el-input
            v-model="searchInfo.orderId"
            style="max-width: 600px"
            placeholder="请输入订单号"
        >
          <template #prepend>订单号：</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input
            v-model="searchInfo.name"
            style="max-width: 600px"
            placeholder="请输入商品名称"
        >
          <template #prepend>商品名称：</template>
        </el-input>
      </el-col>

      <el-col :span="6">
        订单状态
        <el-select v-model="searchInfo.status" placeholder="全部状态" @change="statusSelect">
          <el-option
              v-for="item in orderStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        评价
        <el-select v-model="searchInfo.appraise" placeholder="全部状态" @change="appraiseSelect">
          <el-option
              v-for="item in appraiseStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6" class="marginTop">
        开始时间：
        <!--        <el-date-picker-->
        <!--            v-model="selectedTime"-->
        <!--            type="daterange"-->
        <!--            start-placeholder="开始时间"-->
        <!--            end-placeholder="结束时间"-->
        <!--            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"-->
        <!--        />-->
        <el-date-picker
            v-model="searchInfo.begin"
            type="date"
            placeholder="查询开始时间"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
        />
      </el-col>
      <el-col :span="6" class="marginTop">
        结束时间：
        <el-date-picker
            v-model="searchInfo.end"
            type="date"
            placeholder="查询结束时间"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
        />
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="search" size="large" class="marginTop">搜索</el-button>
      </el-col>
    </el-row>

    <el-row align="middle" class="head">
      <el-col :span="1"></el-col>
      <el-col :span="5">订单</el-col>
      <el-col :span="4">数量</el-col>
      <el-col :span="4">交易状态</el-col>
      <el-col :span="4">实收款</el-col>
      <el-col :span="4">评价</el-col>

    </el-row>
    <order-card></order-card>

    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />


    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="500"
        :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import orderCard from '@/views/components/orderCard.vue'
import { ref } from 'vue'

export default {
  name: 'index',
  components: {
    orderCard
  },
  data() {
    return {
      // 搜索信息
      searchInfo: {
        pageNum: ref(1),
        pageSize: ref(10),
        storeID: ref('2'),
        // 评价转态
        appraise: ref(''),
        // 开始结束时间
        begin: ref(''),
        end: ref(''),
        name: ref(''),
        orderId: ref(''),
        status: ref('')
      },
      // 订单状态
      orderStatus: [
        {
          value: '0',
          label: '待付款'
        },
        {
          value: '1',
          label: '交易关闭'
        },
        {
          value: '2',
          label: '待发货'
        },
        {
          value: '3',
          label: '配送中'
        },
        {
          value: '4',
          label: '待收货'
        },
        // {
        //   value: '5',
        //   label: '待评价'
        // },
        {
          value: '6',
          label: '交易成功'
        },
        {
          value: '7',
          label: '已退款'
        },
        {
          value: '8',
          label: '申请退款中'
        },
        {
          value: '9',
          label: '申请退款失败'
        }
      ],
      // 评价状态
      appraiseStatus: [
        {
          value: 'nonAppraise',
          label: '未评价'
        },
        {
          value: 'appraised',
          label: '已评价'
        }
      ],
      // 当前页码
      currentPage: ref(5),
      // 总页码
      pageSize: ref(100),
      background: ref(false),
      dialogVisible: ref(false)


    }
  },
  methods: {
    search() {
      this.$api.order.OrderSearch(
        this.searchInfo
      )
    },

    handleSizeChange(val) {
    },
    // 页面变换触发函数
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
    },
    handleClose(){
      console.log(1)
    },
    statusSelect(){
      console.log('statusSelect')
    },
    appraiseSelect(){
      console.log('appraiseSelect')
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

}

.searchArea {
  margin-bottom: 3rem;
}

.marginTop {
  margin-top: 1rem;

}

.head {
  min-height: 0 !important;
  height: 40px;
  padding-left: 10px;
  background-color: #FBFBFB;
  box-shadow: #dadada 3px 3px 4px;
}

.el-col {


}

.el-text {

}


#card {
  width: 100%;
  margin-top: -15rem;
}
</style>
