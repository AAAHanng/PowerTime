<template>
  <el-col :span="24" class="main">
    <order-card id="card"></order-card>
  </el-col>

</template>

<script>
import orderCard from '@/views/components/orderCard.vue'
export default {
    name: "index",
  components:{
      orderCard
  },
}
</script>

<style scoped>
.main{
  min-height: 100vh;
}
#card{
  width: 80%;
  margin: 1rem;
}
</style>