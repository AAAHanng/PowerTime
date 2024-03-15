<template>
  <!--订单卡片-->
  <el-card v-for="item in order" :key="item.orderID">
    <div class="card-header">
      <span>订单号：{{ order[0].orderID }}</span>
      <span>创建时间：{{ order[0].createTime }}</span>
      <span>用户：{{ order[0].userName }}</span>
      <span>总金额：{{ totalMoney }}</span>
      <el-button type="primary" @click="dialogVisible = true"
      >查看详情
      </el-button>
    </div>
    <el-table
        :data="order"
        @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="goodsName" width="300">
        <template #default="scope">
          <div class="goods">
            <img src='' alt="" class="goodsImg">
            <el-text class="goodsName">{{ scope.row.goodsName }}</el-text>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="count"/>
      <el-table-column prop="tradeStatus"/>
      <el-table-column prop="actualCollection"/>
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
        <el-descriptions
            direction="vertical"
            :column="4"
            border
            v-for="(item,index) of Order"
            :key="index"
        >
          <el-descriptions-item label="订单编号">{{ item.orderID }}</el-descriptions-item>
          <el-descriptions-item label="商品名称">{{ item.goodsName }}</el-descriptions-item>
          <el-descriptions-item label="收货人姓名">{{ item.userName }}</el-descriptions-item>
          <el-descriptions-item label="收货人电话">{{ item.phone }}</el-descriptions-item>
          <el-descriptions-item label="收货地址">{{ item.address }}</el-descriptions-item>
          <el-descriptions-item label="买家留言">{{ item.message }}</el-descriptions-item>
          <el-descriptions-item label="数量">{{ item.count }}</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Address"
          ></el-descriptions-item>
        </el-descriptions>
      </el-col>

    </el-row>


    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
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
  userName: 'zero',
  goodsName: 'xxxxxxxxxxxxxxxx',
  count: '2',
  phone: '12345678910',
  tradeStatus: '买家已付款',
  actualCollection: 12.4,
  appraise: '已评价',
  address: '电子科技大学成都学院蓝区3栋101',
  message: '请尽快'
}, {
  orderID: '123456',
  createTime: '2024-01-15',
  userName: 'zero',
  goodsName: 'xxxxxxxxxxxxx',
  count: '2',
  tradeStatus: '买家已付款',
  actualCollection: 12.4,
  appraise: '已评价',
  address: '郫都',
  message: '请尽快'
}]
let dialogVisible = ref(false)
const props = defineProps(['order'])
let totalMoney = ref(0)
onBeforeMount(() => {

  for (let i = 0; i < Order.length; i++) {
    totalMoney.value += +Order[i].actualCollection
  }

  // 现在，totalMoney 包含 order 数组中 actualCollection 值的总和。
  console.log('总金额：', totalMoney)
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

</style>