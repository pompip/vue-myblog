<template>
  <div @click="$emit('click')">{{text }}</div>
</template>

<script>
export default {
    props:["text"]
};
</script>

<style scoped>
div {
  margin: 0 10px;
  color: green;
  background-color: #f7f7f7aa;
  display:inline-block;
  padding: 0 16px;
  line-height: 32px;
  border-radius: 16px;
  border: 1px solid green;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
</style>

