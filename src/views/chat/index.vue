<template>
  <div class="main">
    <UserItem :items="parentItems"
              class="UserItem"
              @changSession="changeSession"
              @search="handleSearch"
    >
    </UserItem>
    <ChatCard
        @sendMessage="sendMessage">
      <template v-slot:body class="message-list-warp scroll">
        <UiChatBubble
            v-for="(item) in informationArray"
            :message="item"
        ></UiChatBubble>
      </template>
    </ChatCard>
  </div>

  <!--  备选方案   -->
  <!--
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="login">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  -->

</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import io from 'socket.io-client';
import UserItem from "@/views/chat/components/UserItem.vue";
import ChatCard from "@/views/chat/components/ChatCard.vue";
import UiChatBubble from "@/views/chat/components/UiChatBubble.vue";
import router from "@/router/index.js";
import imga from "@/assets/img/user.png"

// 备选方案
// const form = ref({name: ''});
// const dialogFormVisible = ref(false);
const informationArray = ref([]);

//发送用户
const toUser = ref("")

// 当前用户
const LocalUser = router.currentRoute.value.query.username

// 用户列表
const parentItems = ref([]);


// 搜索用户列表
const handleSearch = (keyword) => {
  if(!keyword){
    getUser()
  }
  parentItems.value = parentItems.value.filter(item => {
    return item.username.toLowerCase().includes(keyword.toLowerCase());
  })
}


// 发送用户信息
const socket = io('http://localhost:4000', {
  query: {
    username: LocalUser
  }
});

// 改变发送用户
const changeSession = (item) => {
  toUser.value = item.socketId
};

// 发送消息
const sendMessage = (text) => {
  informationArray.value.push({
    isSend: true,
    from: {
      name: LocalUser,
      avatarUrl: imga
    },
    content: text,
    time: new Date().getTime(),
    type: "text"
  })
  console.log(informationArray.value)
  if (!text.length) return;
  socket.emit("send", {
    formUser: LocalUser,
    targetId: toUser.value,
    msg: text
  })
}

//  得到用户消息
const getUser = () => {
  socket.on('online', (data) => {
    parentItems.value = data
        .filter(item => item.username !== LocalUser)
        .map(item => ({
          username: item.username,
          sentence: 'This is demo',
          inforNum: 1,
          imgUrl: imga,
          isLoding:true,
          socketId: item.Id
        }));
  });
  console.log(1)
}

// 接受用户消息
socket.on('receive', (data) => {
  informationArray.value.push({
    isSend: false,
    from: {
      name: LocalUser,
      avatarUrl: imga
    },
    content: data.msg,
    time: data.dataTime,
    type: "text"
  })
  console.log(informationArray.value)
})

// 错误连接
socket.on('error', (err) => {
  console.log(err)
})

// 断开连接
const disconnectSocket = () => {
  socket.disconnect();
}

// 在组件销毁前执行
onBeforeUnmount(disconnectSocket);

// 在组件挂载时执行搜索操作
onMounted(() => {
  getUser();
});

// 备选方案
// const login = () => {
//   socket.emit("login", form.value);
//   dialogFormVisible.value = false;
// };

// 测试登录写法
// socket.on('loginError', data => {
//   ElMessage.error('失败')
// })
// socket.on('loginSuccess', data => {
//   ElMessage.success('成功')
// })
// socket.on("userList", data => {
//   data.forEach(value => {
//     parentItems.value.push({
//       username: value.toString(),
//       sentence: '',
//       inforNum: 0,
//       imgUrl: imga
//     });
//   });
//   console.log(parentItems);
// })
</script>

<style scoped>
.main {
  width: calc(100vw - 200px);
  min-height: 90vh !important;
  display: flex;
}

.UserItem {
  width: 300px;
}

.message-list-warp {

}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
.scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.13);
}

/*定义滚动条的轨道，内阴影及圆角*/
.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(240, 240, 240, 0);
  border-radius: 10px;
  background-color: rgba(0, 89, 255, 0);
}

/*定义滑块，内阴影及圆角*/
.scroll::-webkit-scrollbar-thumb {
  /*width: 10px;*/
  height: 20px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(236, 236, 236, 0.3);
  background-color: rgba(203, 203, 203, 0.54);
  transition: all 0.5s;
}
</style>