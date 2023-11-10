<template>
  <h3>testComponent</h3>
  <h3>testComponent</h3>
  <h3>testComponent</h3>
  <h3>testComponent</h3>
  <h3>testComponent</h3>
  <input type="text" ref="input" v-model="val" />
  <button @click="clickFn">查看输入内容</button>
</template>

<script setup>
import { defineProps, onMounted, defineEmits, ref } from "vue";
const props = defineProps({
  mark1: [Boolean, Number],
  mark2: [Boolean, String],
  // mark3: [Boolean, String],
  // mark3:  [Boolean, Number],
  mark3: [Number, Boolean],
});
onMounted(() => {
  // console.log("mark1", props.mark1);
  // console.log("mark2", props.mark2);
  console.log("mark3", props.mark3);
});

// const input = ref(null);
const val = ref("");

const emit = defineEmits({
  click: (data) => {
    console.log(data.val.value);
    return true;
  },
});

function clickFn() {
  
  emit("click", { val });
}
</script>