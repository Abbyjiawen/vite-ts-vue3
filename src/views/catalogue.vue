<template>
  <div>功能目录</div>
</template>

<script setup lang="ts">
// import {store} from '@/store';
import { onMounted } from 'vue';
onMounted(() => {
  // store.commit("navFn", '1-2')
  // console.log(store.state.tabNumber);
})
</script>

<style lang="less" scoped>
div{
  width: calc(100% - 280px);
  position: relative;
  left: 280px;
}
</style>