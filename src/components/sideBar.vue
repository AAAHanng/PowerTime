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
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>数据展示</span>
            </template>
            <el-menu-item index="1-3">item three</el-menu-item>

          </el-sub-menu>

          <el-menu-item index="/order">
            <el-icon> <icon-menu/></el-icon>
            <span>订单</span>
          </el-menu-item>

          <el-menu-item index="3">
            <el-icon> <icon-menu/></el-icon>
            <span>聊天</span>
          </el-menu-item>

          <el-menu-item index="4">
            <el-icon> <icon-menu/></el-icon>
            <span>我的</span>
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
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


const handleOpen = (key, keyPath) => {

}
const handleClose = (key, keyPath) => {

}
</script>

<style scoped>

</style>