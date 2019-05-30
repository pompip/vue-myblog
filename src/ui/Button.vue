<template>
  <div v-on:click="$emit('click')"  ><slot>hello</slot></div>
</template>

<script>
export default {

};
</script>

<style scoped>
div {
  margin: 0 10px;
  color: green;
  background-color:rgba(255, 255, 255, 0.8);
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

