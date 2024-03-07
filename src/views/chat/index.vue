<template>
  <div class="main">
    <UserItem :items="parentItems"
              class="UserItem"
              @changSession="changeSession"
              @search="handleSearch"
    >
    </UserItem>
    <ChatCard>
      <template v-slot:body class="message-list-warp scroll">
        <UiChatBubble
            v-for="(item, index) in informationArray"
            :message="item.message"
        ></UiChatBubble>
      </template>
    </ChatCard>
  </div>
</template>

<script>
import UserItem from "@/views/chat/components/UserItem.vue";
import ChatCard from "@/views/chat/components/ChatCard.vue";
import UiChatBubble from "@/views/chat/components/UiChatBubble.vue";
import imga from "@/assets/img/user.png"
import io from 'socket.io-client';

export default {
  components: {
    UserItem,
    ChatCard,
    UiChatBubble
  },
  data() {
    return {
      userId: '123',
      informationArray: [{
        isSend: true,
        from: {
          name: "似水流年",
          avatarUrl: "http://himg.bdimg.com/sys/portrait/item/90193135323338383137313237bc13.jpg"
        },
        content: "这是一条[微笑]测试信息1112222222[气球]2222222",
        time: new Date().getTime(),
        type: "text"
      }],

      parentItems: [
        {
          username: '客户A',
          sentence: '好勒',
          image: '',
          inforNum: 32,
          imgUrl: imga
        },
        {
          username: '客户B',
          sentence: 'Vue.js is awesome!',
          image: 'path/to/image2.jpg',
          inforNum: 32,
          imgUrl: imga
        },
      ]
    };
  },
  mounted() {
    this.socket = io('http://localhost:4000');
    this.socket.on('message', (message) => {
    });
  },
  beforeRouteLeave(to, from, next) {
    // 在离开当前路由时断开Socket.IO连接
    this.socket.disconnect();
    next();
  },
  methods: {
    handleSearch(keyword) {
    },
    changeSession(item) {
      this.socket.emit("message",item)
    },

  }
};
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
</style>