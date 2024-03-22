<template>
  <!--  订单-->
  <div class="main">
    <el-row :gutter="20" class="searchArea" justify="space-between">
      <el-col :span="5">
        <el-input
            v-model="orderID"
            style="max-width: 600px"
            placeholder="请输入订单号"
        >
          <template #prepend>订单号：</template>
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-input
            v-model="goodsName"
            style="max-width: 600px"
            placeholder="请输入商品名称"
        >
          <template #prepend>商品名称：</template>
        </el-input>
      </el-col>

      <el-col :span="5">
        订单状态
        <el-select v-model="statusSelect" placeholder="全部状态" @change="statusSelect">
          <el-option
              v-for="item in orderStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="5">
        评价
        <el-select v-model="appraiseSelect" placeholder="全部状态" @change="appraiseSelect">
          <el-option
              v-for="item in appraiseStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="12" class="marginTop">
        下单时间：
        <el-date-picker
            v-model="selectedTime"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
        />
      </el-col>
      <el-col :span="6">
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
        :small="small"
        :disabled="disabled"
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
      orderID: ref(''),
      goodsName: ref(''),
      selectedTime: ref(''), // 搜索的下单时间段
      statusSelect: ref(''),
      orderStatus: [
        {
          value: 'nonPayment',
          label: '未付款'
        },
        {
          value: 'Paid',
          label: '已付款'
        }
      ],
      appraiseSelect: ref(''),
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
      currentPage: ref(5),
      pageSize: ref(100),
      small: ref(false),
      background: ref(false),
      dialogVisible: ref(false)


    }
  },
  methods: {
    search() {

    },

    handleSizeChange(val) {
      console.log(`${val} items per page`)
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
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