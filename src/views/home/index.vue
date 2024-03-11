<template>
<!--  我的-->
  <div class="main">
    <div class="el-col">数据分析
    </div>
    <div class="el-col">展示订单</div>
    <div class="el-col">设置员工</div>
    <div class="el-col">设置门店信息</div>
  </div>

</template>

<script setup>


</script>

<style scoped lang="scss">
.main {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-color-primary-grey-3);
  min-width: 30%;
  margin: 1rem;
}

</style>