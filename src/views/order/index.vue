<template>
  <div class="main">
  <el-row :gutter="20" align="middle" class="head">
    <el-col :span="4">宝贝</el-col>
    <el-col :span="4">数量</el-col>
    <el-col :span="4">交易状态</el-col>
    <el-col :span="4">实收款</el-col>
    <el-col :span="4">评价</el-col>
    <el-col :span="4">操作</el-col>
  </el-row>
<order-card></order-card>
  </div>
</template>

<script>
import orderCard from '@/views/components/orderCard.vue'

export default {
  name: "index",
  components: {
    orderCard
  },
}
</script>

<style scoped lang="scss">
.main{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.head {
  min-height: 0 !important;
  margin-left: 10px !important;
  height: 40px;

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