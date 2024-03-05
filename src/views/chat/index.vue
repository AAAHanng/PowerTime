<template>
  <div class="main">
    <UserItem :items="parentItems" class="UserItem"></UserItem>
    <ChatCard></ChatCard>
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
      parentItems: [
        {
          username: '客户A',
          sentence: '好勒',
          image: ''
        },
        {
          username: '客户B',
          sentence: 'Vue.js is awesome!',
          image: 'path/to/image2.jpg'
        },
      ]
    };
  }
};
</script>

<style scoped>
.main {
  width: calc(100vw - 216px);
  min-height: 90vh !important;
  display: flex;
}

.UserItem {
  width: 400px;
}
</style>