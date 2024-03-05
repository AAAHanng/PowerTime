<template>
  <el-card>
    <div class="card-header">
      <span>订单号：{{ order.orderID }}</span>
      <span>创建时间：{{ order.createTime }}</span>
      <span>{{ order.userName }}</span>
    </div>
    <el-table :data="order">
      <el-table-column prop="goodsName"/>
      <el-table-column prop="count"/>
      <el-table-column prop="tradeStatus" />
      <el-table-column prop="actualCollection" />
      <el-table-column prop="appraise"/>
    </el-table>
  </el-card>
</template>

<script setup>
let order = [{
  orderID: '123456',
  createTime: '2024-01-15',
  userName: 'zero',
  goodsName:'xxxxxxxxxx',
  count:'2',
  tradeStatus:'买家已付款',
  actualCollection:'12.4',
  appraise:'已评价'
},{
  orderID: '123456',
  createTime: '2024-01-15',
  userName: 'zero',
  goodsName:'xxxxxxxxxx',
  count:'2',
  tradeStatus:'买家已付款',
  actualCollection:'12.4',
  appraise:'已评价'
}]
</script>

<style scoped>
.el-card{
  min-height: 0 !important;
}


.card-header{
display: flex;
  justify-content: space-between;
}


</style>