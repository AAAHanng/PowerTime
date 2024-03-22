<template>
  <!--订单卡片-->
  <el-card v-for="item in Order" :key="item.orderID">
    <div class="card-header">
      <span>订单号：{{ Order[0].orderID }}</span>
      <span>创建时间：{{ Order[0].createTime }}</span>
      <span>用户：{{ Order[0].Name }}</span>
      <span>总金额：{{ totalAmount }}</span>
      <el-button type="primary" @click="dialogVisible = true"
      >查看详情
      </el-button>
    </div>
    <el-table
        :data="Order"
        @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="goodsName" width="300">
        <template #default="scope">
          <div class="goods">
            <img src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' alt="未上传图片" class="goodsImg">
            <el-text class="goodsName">{{ scope.row.goodsName }}</el-text>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="quantity" width="250"/>
      <el-table-column prop="orderStatus" width="250"/>
      <el-table-column prop="goodsTotalAmount" width="250"/>
      <el-table-column prop="appraise"/>
      <el-table-column>
      </el-table-column>
    </el-table>
  </el-card>

  <el-dialog
      v-model="dialogVisible"
      title="订单详情"
      :before-close="handleClose"
  >

    <!--查看订单详情-->
    <el-row>
      <el-col>
        <el-scrollbar height="400px">

        <el-descriptions
            direction="vertical"
            :column="4"
            border
            v-for="(item,index) of Order"
            :key="index"
            class="lookDetail"
        >
          <el-descriptions-item label="订单编号">{{ item.orderID }}</el-descriptions-item>
          <el-descriptions-item label="创建时间">{{ item.createTime }}</el-descriptions-item>
          <el-descriptions-item label="商品名称">{{ item.goodsName }}</el-descriptions-item>
          <el-descriptions-item label="数量">{{ item.quantity }}</el-descriptions-item>
          <el-descriptions-item label="总金额">{{ item.goodsTotalAmount }}</el-descriptions-item>
          <el-descriptions-item label="收货人姓名">{{ item.Name }}</el-descriptions-item>
          <el-descriptions-item label="收货人电话">{{ item.phone }}</el-descriptions-item>
          <el-descriptions-item label="收货地址">{{ item.address }}</el-descriptions-item>
          <el-descriptions-item label="买家留言">{{ item.storeInfo }}</el-descriptions-item>
          <el-descriptions-item label="支付状态">{{ item.orderPay }}</el-descriptions-item>
          <el-descriptions-item label="订单状态">{{ item.orderStatus }}</el-descriptions-item>
          <el-descriptions-item label="是否评价">{{ item.appraise }}</el-descriptions-item>
        </el-descriptions>
        </el-scrollbar>
      </el-col>

    </el-row>


    <template #footer>
      <div class="dialog-footer">
<!--        <el-button @click="dialogVisible = false"></el-button>-->
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const Order = [{
  orderID: '123456',
  createTime: '2024-01-15',
  goodsName: 'xxxxxxxxxxxxxxxx',
  quantity: '2',
  goodsTotalAmount: 12.4,
  Name: 'zero',
  phone: '12345678910',
  address: '电子科技大学成都学院蓝区3栋101',
  storeInfo: '请尽快',
  orderPay: '已支付',
  orderStatus: '配送中',
  appraise: '已评价'
}, {
  orderID: '123456',
  createTime: '2024-01-15',
  goodsName: 'xxxxxxxxxxxxxxxx',
  quantity: '2',
  goodsTotalAmount: 12.4,
  Name: 'zero',
  phone: '12345678910',
  address: '电子科技大学成都学院蓝区3栋101',
  storeInfo: '请尽快',
  orderPay: '已支付',
  orderStatus: '配送中',
  appraise: '已评价'
}]

let dialogVisible = ref(false)
// const props = defineProps(['order'])
let totalAmount = ref(0)
onBeforeMount(() => {

  for (let i = 0; i < Order.length; i++) {
    totalAmount.value += +Order[i].goodsTotalAmount
  }

  // 现在，totalAmount 包含 order 数组中 actualCollection 值的总和。
  console.log('总金额：', totalAmount)
})

const handleEdit = () => {

}

const multipleTableRef = ref()
const multipleSelection = ref([])
const toggleSelection = function (rows) {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line
      // @ts-expect-error
      multipleTableRef.value.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value.clearSelection()
  }
}
const handleSelectionChange = function (val) {
  multipleSelection.value = val
}


</script>

<style scoped lang="scss">
.el-card {
  min-height: 0 !important;
  margin: 0.5rem 0;
}


.card-header {
  display: flex;
  justify-content: space-between;
}

.goods {
  display: flex;
  align-items: center;
}

.goodsImg {
  width: 50px;
  height: 50px;
}

.goodsName {
  margin-left: 0.5rem;
  width: 8em;
  align-self: center;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.lookDetail{
  margin-bottom: 2rem;
}
</style>