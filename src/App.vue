<template>
<my-header></my-header>
  <el-container style="width: 100%;">
    <SideBar style="min-width: 200px"/>
    <RouterView style="min-height: 100vh"/>
  </el-container>

  <myFooter/>
</template>


<script >
import {RouterLink, RouterView} from 'vue-router'
import myFooter from "@/components/footer.vue";
import myHeader from "@/components/header.vue";
import SideBar from "@/components/sideBar.vue";
export default {
  components:{
    myHeader,
    myFooter,
    SideBar,

  }
}
</script>

<style scoped lang="scss">

</style>