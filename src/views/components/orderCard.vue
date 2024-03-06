<template>

  <el-card v-for="item in order">
    <div class="card-header">
      <span>订单号：{{ order[0].orderID }}</span>
      <span>创建时间：{{ order[0].createTime }}</span>
      <span>{{ order[0].userName }}</span>
    </div>
    <el-table :data="order">
      <el-table-column prop="goodsName">
        <template #default="scope" >
          <div class="goods">
          <img src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' alt="" class="goodsImg">
          <el-text class="goodsName">{{ scope.row.goodsName }}</el-text>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="count"/>
      <el-table-column prop="tradeStatus"/>
      <el-table-column prop="actualCollection">
        <template v-slot="scope">
          {{ scope.row.actualCollection }}￥
        </template>

      </el-table-column>
      <el-table-column prop="appraise"/>
      <el-table-column>
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)"
          >查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>


</template>

<script setup>
let order = [{
  orderID: '123456',
  createTime: '2024-01-15',
  userName: 'zero',
  goodsName: 'xxxxxxxxxxxxxxxx',
  count: '2',
  tradeStatus: '买家已付款',
  actualCollection: '12.4',
  appraise: '已评价'
}, {
  orderID: '123456',
  createTime: '2024-01-15',
  userName: 'zero',
  goodsName: 'xxxxxxxxxxxxx',
  count: '2',
  tradeStatus: '买家已付款',
  actualCollection: '12.4',
  appraise: '已评价'
}]
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
.goods{
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