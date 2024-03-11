<template>
  <div>
    <my-header></my-header>
    <el-container style="width: 100%;">
      <SideBar style="min-width: 200px"/>
      <slot></slot> <!-- 这里插入子组件 -->
    </el-container>
    <myFooter/>
  </div>
</template>

<script>
import myFooter from "@/components/footer.vue";
import myHeader from "@/components/header.vue";
import SideBar from "@/components/sideBar.vue";

export default {
  components: {
    myHeader,
    SideBar,
    myFooter
  }
}
</script>
<style scoped lang="scss">

.el-container{
  min-height: 100vh;
}
</style>