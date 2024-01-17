<template>
  <div>切换皮肤</div>
</template>

<script setup lang="ts">
// import store from '@/store';
import { onMounted } from 'vue';
onMounted(() => {
  // store.commit("navFn", '4')
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