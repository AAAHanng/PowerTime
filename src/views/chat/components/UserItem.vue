<template>
  <div class="box">
    <div v-for="(item, index) in items" :key="index" class="UserBox">
      <img alt="" src="@/assets/img/user.png">
      <div class="infor">
        <p>{{ item.username }}</p>
        <p>{{ item.sentence }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  background-color: #e8e6e6;
}

.UserBox {
  background-color: #dbd9d9;
  padding: 15px 20px;
  display: flex;
  align-items: center;

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
</style>
