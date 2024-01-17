<template>
  <div>系统介绍</div>
</template>

<script lang="ts" setup scoped>
// import store from '@/store';
import { onMounted } from 'vue';

onMounted ( () => {
  // store.commit("navFn", "1-1")
  // console.log(store.state.tabNumber);
}) 

</script>

<style lang="less" scoped>
div {
  width: calc(100% - 280px);
  position: relative;
  left: 280px;
}
</style>