<template>
  <div class="box">
    <div class="app-user-form">
      <input v-model="keyword"  placeholder="" type="text">
      <img src="@/assets/img/search.png" @click="search" alt="">
    </div>
    <div ref="UserList" v-for="(item, index) in items" :key="index" class="UserBox" @click="changeSession(item,index)">
      <div class="avatar">
        <img :src="item.imgUrl"  alt="">
        <div :style="{ backgroundColor: item.isLoading ? 'red' : '#85eb53' }"></div>
      </div>
      <div class="infor" style="flex: 1">
        <p>{{ item.username }}</p>
        <p>{{ item.sentence }}</p>
      </div>
      <div class="infnum" style="width: 20px;">{{ item.inforNum }}</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      keyword: ''
    }
  },
  props: {
    items: {
      type: Array,
      default() {
        return {
          items: {
            username: '客户A',
            sentence: '好勒',
            inforNum: 32,
            imgUrl: imga
          }
        }
      }
    },
  },
  methods: {
    search() {
      const keyword = this.keyword.trim();
      this.$emit('search', keyword);
    },
    changeSession(item,itemIndex) {
      const elements = this.$refs.UserList;
      elements.forEach((element, index) => {
        element.classList.remove('activeUser');
        if (index === itemIndex) {
          element.classList.add('activeUser');
        }
      });
      this.$emit('changSession', item)
    }
  }
};
</script>

<style lang="scss" scoped>
.activeUser{
  background-color:#dbd9d9 !important;
}
.avatar {
  position: relative;
  img{
    border-radius: 50%;
    display: block;
  }

  div {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    right: 3px;
    bottom: 3px;
  }
}

.app-user-form {
  background-color: #dbd9d9;
  margin: 10px;
  width: 280px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
  }

  input {
    border: none;
    width: 80%;
    height: 90%;
    background-color: #dbd9d9;
    letter-spacing: 1px;
    outline: none;
  }
}

.box {
  background-color: #e8e6e6;
}

.UserBox {
  cursor: pointer;
  background-color: #e8e6e6;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  width: 270px;
  height: 50px;

  img {
    display: block;
    border-radius: 50%;
    width: 60px;
  }
}

.infor {
  p {
    margin: 5px 20px;
  }

  p:nth-child(1) {
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
  }

  p:nth-child(2) {
    color: #b1b0b0;
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.infnum {
  background-color: #d02323;
  border-radius: 50%;
  font-size: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: white;
}
</style>
