<template>
  <div class="main">
    <el-row class="tac">
      <el-col>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
        >

          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-menu-item index="/order">
            <el-icon><Checked /></el-icon>
            <span>订单</span>
          </el-menu-item>

          <el-menu-item index="/chat">
            <el-icon><ChatRound /></el-icon>
            <span>聊天</span>
          </el-menu-item>

          <el-menu-item index="/home">
            <el-icon><UserFilled /></el-icon>
            <span>我的</span>
          </el-menu-item>
          <el-menu-item index="/home">
            <el-icon><Tools /></el-icon>
            <span>设置</span>
          </el-menu-item>


          <!--        <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                  </el-menu-item>-->

        </el-menu>
      </el-col>

    </el-row>
  </div>
</template>

<script setup>
import {
  HomeFilled,
  Checked,
  ChatRound,
  UserFilled,
  Setting,
  Tools
} from '@element-plus/icons-vue'


const handleOpen = (key, keyPath) => {

}
const handleClose = (key, keyPath) => {

}
</script>

<style scoped>
/deep/ .el-menu{
  min-height: 90vh;
}
.main{

}
</style>
