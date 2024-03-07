<template>
  <div class="session-panel-warp">

    <div class="session-panel-body">
      <slot name="body"></slot>
    </div>

    <div class="session-panel-footer" @mousedown.stop="">

      <!--      工具操作部分 -->
      <div class="session-tool-warp">
        <div class="session-tool-item" @click="toggleShow">
          <img alt="" src="@/assets/img/a-Group1.png">
        </div>
        <label class="session-tool-item">
          <img alt="" src="@/assets/img/wenjianjia.png">
          <input accept="image/png, image/jpg, image/jpeg" type="file" @change="fileChange">
        </label>
      </div>

      <!--      输入区域-->
      <div class="session-text-warp">
        <textarea v-model="text" class="session-textarea" @keypress.enter="sendText(text)"></textarea>
      </div>

      <!--      按钮区域-->
      <div class="session-btn-warp">
        <button class="session-send-btn" @click="sendText(text)">发送</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "UiSessionPanel",
  props: {
    session: {
      type: Object,
      default() {
        return {
          name: "似水流年",
          avatarUrl: "http://himg.bdimg.com/sys/portrait/item/90193135323338383137313237bc13.jpg"
        }
      }
    }
  },
  data() {
    return {
      isShow: false,
      text: ""
    }
  },
  methods: {
    toggleShow() {
      const vm = this;

      function hide() {
        vm.isShow = false;
        document.removeEventListener('click', hide)
      }

      if (vm.isShow) {
        hide()
      } else {
        vm.isShow = true;
        setTimeout(() => {
          document.addEventListener('click', hide)
        }, 0)
      }
    },

    pickerEmoji(emoji) {
      this.text += emoji.title;
    },

    sendText(text) {
      text = text.replace(/^\s+|\s+$/g, '');
      if (text) {
        this.sendMessage(text, 'text');
      }
      setTimeout(() => {
        this.text = '';
      }, 0)
    },

    fileChange(e) {
      const reg = /\.(?:png|jpg|jepg)$/i;
      let file = e.target.files[0];
      if (!reg.test(file.name)) {
        Message.warning("请选择正确格式的图片文件!");
        return
      }
      let maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        Message.warning("图片大小不能超过1M!", "warning");
        return
      }
      let reader = new FileReader();
      reader.readAsDataURL(file); // 读出 base64
      reader.onloadend = () => {
        let html = reader.result;
        this.sendMessage(html, 'image')
      };
    },
    sendMessage(content, type) {
      this.$emit("sendMessage", content, type, this.session)
    }
  }
}
</script>

<style lang="less" scoped>
.session-panel-warp {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f2f2f2;
}

.session-panel-header {
  position: relative;
  height: 50px;
  padding: 10px 0;
  line-height: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #d1d1d1;
  margin: 0 10px;
}

.session-avatar {
  display: inline-block;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.session-name {
  font-size: 14px;
  color: #333333;
  line-height: 30px;
  margin: 0 5px;
}

.session-panel-body {
  width: 100%;
  height: calc(100% - 206px);
}

.session-panel-footer {
  height: 206px;
  box-sizing: border-box;
  padding: 0 10px 10px;
}

.session-tool-warp {
  position: relative;
  height: 40px;
  box-sizing: border-box;
  border-top: 1px solid #d1d1d1;

  img {
    width: 30px;
    padding: 10px 20px;
  }
}

.session-tool-item {
  display: block;
  float: left;
  line-height: 40px;
  height: 40px;
  margin: 0 3px;
  cursor: pointer;
}

.session-tool-item span.iconfont {
  font-size: 25px;
  color: #606266;
}

.session-tool-item input[type='file'] {
  display: none;
}

.session-text-warp {
  height: 80px;
  box-sizing: border-box;
}

.session-textarea {
  font-size: 14px;
  padding: 10px;
  color: #666666;
  line-height: 20px;
  height: 80px;
  overflow-y: auto;
  resize: none;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
}

.session-btn-warp {
  height: 36px;
  text-align: right;
  padding: 0 50px;
}

.session-send-btn {
  display: inline-block;
  height: 40px;
  line-height: 24px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #d1d1d1;
  color: #606266;
  outline: none;
  width: 90px;
  text-align: center;
  background-color: #efeded;
  cursor: pointer;
  font-weight: bolder;
}

.emoji-panel {
  padding: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  bottom: 100%;
  width: 420px;
  box-shadow: 0 0 3px #d1dbe5;
  margin-bottom: 5px;
  left: -40px;
}

.emoji-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.emoji-list:after {
  display: block;
  clear: both;
  content: '';
}

.emoji-item {
  float: left;
  width: 26px;
  height: 26px;
  padding: 2px;
  box-sizing: content-box;
  cursor: pointer;
  border-radius: 2px;
  user-select: none;
}

.emoji-item:hover {
  background-color: #f2f2f2;
}

.emoji-item img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
