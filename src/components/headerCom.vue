<template>
  <header>
    <span>商家版</span>
    <span>{{ storeName }}</span>

  </header>
</template>

<script>
export default {
  data() {
    return {
      storeName: '犀浦打印店'
    }
  }
}
</script>

<style scoped lang="scss">
header {
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ed5126;
  //background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png");
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");


  span {
    margin: 0 1rem;
    font-size: 24px;
    color: #FFFFFF;
  }


}
</style>
