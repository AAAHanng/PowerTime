<template>
  <div class="main">
    <UserItem :items="parentItems" class="UserItem">
    </UserItem>
    <ChatCard>
      <div class="message-list-warp scroll" slot="body" ref="message-list">
        <UiChatBubble class="message-item"
                      :key="i"
                      :message="item"
                      :setting="setting"
                      :is-send="loginUser.id===item.from.id"
                      v-for="(item,i) in getMessages(curSession.id)">
        </UiChatBubble>
      </div>
    </ChatCard>
  </div>
</template>

<script>
import UserItem from "@/views/chat/components/UserItem.vue";
import ChatCard from "@/views/chat/components/ChatCard.vue";

export default {
  components: {
    UserItem,
    ChatCard
  },
  data() {
    return {
      setting:{
        isName: true,
        isTime:true,
        isVoice:true
      },
      curSession:{},
      loginUser:{},
      keyword: '',
      parentItems: [
        {
          username: '客户A',
          sentence: '好勒',
          image: '',
          inforNum:32
        },
        {
          username: '客户B',
          sentence: 'Vue.js is awesome!',
          image: 'path/to/image2.jpg',
          inforNum:32
        },
      ]
    };
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