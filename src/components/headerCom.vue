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
  min-height: 5vh;
  background-color: var(--el-color-primary-blue-3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin: 0 1rem;
    font-size: 24px;
    color: #FFFFFF;
  }


}
</style>