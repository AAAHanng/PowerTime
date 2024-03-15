<template>
<!--分页器-->
  <el-pagination background layout="prev, pager, next" :total="this.total" />
</template>

<script>
export default {
  name: "pagination",
  props: {
    total: Number,

  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>