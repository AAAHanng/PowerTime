<template>
  <div v-if="!$route.meta.showNav">
    <myLayout >
      <router-view></router-view>
    </myLayout>
  </div>
  <div v-else>
      <router-view></router-view>
  </div>

</template>


<script >
import {RouterLink, RouterView} from 'vue-router'
import myLayout from "@/views/components/myLayout.vue";
export default {
components:{
  myLayout
}
}
</script>

<style scoped lang="scss">

</style>