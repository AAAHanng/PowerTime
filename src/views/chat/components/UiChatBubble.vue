<template>
  <div :class="{
        'chat-bubble-send': isSend,
        'chat-bubble-receive': !isSend
       }"
       class="chat-bubble-warp"
  >
    <!-- 头像 -->
    <div class="chat-bubble-avatar">
      <img alt="" src="@/assets/img/user.png">
    </div>

    <div class="chat-bubble-container">

      <div v-if="setting.isName" class="chat-bubble-infoWarp">
        <!-- 时间和名称 -->
        <span v-if="setting.isTime" class="chat-bubble-time">{{ TimeChang(message.dataTime) }}</span>
        <span class="chat-bubble-name">{{ message.fromUserName }}</span>
      </div>

      <div class="chat-bubble-content">
        <div v-if="message.type==='text'">
          {{ message.msg }}
        </div>

        <div v-if="message.type==='image'">
          <template v-if="message.content==='【图片】'">
            {{message.msg}}
          </template>
          <img :src="message.msg" alt="图片" v-else>
        </div>

      </div>

    </div>
  </div>

</template>


<script>
import emoji from '@/assets/emoji.json'

export default {
  name: 'UiChatBubble',
  methods: {
    TimeChang(value) {
      let time = new Date().getTime()
      time = parseInt((time - value) / 1000)
      //存储转换值
      let s
      if (time < 60 * 3) {//三分钟内
        return '刚刚'
      } else if ((time < 60 * 60) && (time >= 60 * 3)) {
        //超过十分钟少于1小时
        s = Math.floor(time / 60)
        return s + '分钟前'
      } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
        //超过1小时少于24小时
        s = Math.floor(time / 60 / 60)
        return s + '小时前'
      } else if ((time < 60 * 60 * 24 * 3) && (time >= 60 * 60 * 24)) {
        //超过1天少于3天内
        s = Math.floor(time / 60 / 60 / 24)
        return s + '天前'
      } else {
        //超过3天
        let date = new Date(value)
        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
      }
    }
  },

  props: {
    isSend: {
      type: Boolean,
      default: false
    },
    setting: {
      type: Object,
      default() {
        return {
          isName: true,
          isTime: true
        }
      }
    }, message: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    // console.log('Message:', this.message); // 打印 message 属性的值
    this.emojiList = emoji
  }
}
</script>

<style scoped>
.chat-bubble-warp {
  position: relative;
  padding: 20px;
}

.chat-bubble-warp:after {
  display: table;
  content: '';
  clear: both;
}

.chat-bubble-avatar,
.chat-bubble-avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
}

.chat-bubble-send .chat-bubble-avatar {
  float: right;
}

.chat-bubble-send .chat-bubble-infoWarp,
.chat-bubble-send .chat-bubble-container {
  text-align: right;
}

.chat-bubble-send .chat-bubble-container .chat-bubble-content {
  text-align: left;
}

.chat-bubble-receive .chat-bubble-avatar {
  float: left;
}

.chat-bubble-container {
  position: relative;
  margin-left: 50px;
  margin-right: 50px;
}

.chat-bubble-infoWarp .chat-bubble-name {
  font-size: 14px;
  color: #333333;
  line-height: 20px;
}

.chat-bubble-infoWarp .chat-bubble-time {
  font-size: 12px;
  color: #666666;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.chat-bubble-content {
  display: inline-block;
  min-height: 20px;
  padding: 10px;
  border-radius: 4px;
  max-width: 40%;
  line-height: 20px;
  vertical-align: middle;
  color: #666666;
  font-size: 14px;
  word-break: break-word;
  position: relative;
}

.chat-bubble-receive .chat-bubble-content:before,
.chat-bubble-send .chat-bubble-content:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  top: 20px;
  margin-top: -5px;
}

.chat-bubble-receive .chat-bubble-content:before {
  right: 100%;
  border-right: 5px solid #dae1ff;
}

.chat-bubble-receive .chat-bubble-content {
  background-color: #dae1ff;
}

.chat-bubble-send .chat-bubble-content:after {
  left: 100%;
  border-left: 5px solid #aae97e;
}

.chat-bubble-send .chat-bubble-content {
  background-color: #aae97e;
}
.chat-bubble-content img{
  max-width: 100%;
}

</style>

