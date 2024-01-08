<template>
  <Header/>
  <el-container style="width: 100%;">
<!--    侧边导航栏-->
    <SideBar style="min-width: 200px"/>
    <RouterView style="min-height: 100vh"/>
  </el-container>

  <Footer/>
</template>


<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
import SideBar from "@/components/sideBar.vue";
</script>
<style scoped lang="scss">

</style>