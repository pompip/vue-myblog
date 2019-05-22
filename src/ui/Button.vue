<template>
  <div>{{text}}</div>
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
  align-content: center;
  padding: 0 16px;
  line-height: 32px;
  border-radius: 16px;
  border: 1px solid green;
  font-size: 14px;
  cursor: pointer;
}
</style>

