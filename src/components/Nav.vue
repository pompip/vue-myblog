<template>
  <div class="nav">
    <h3>我的博客</h3>
    <div>登录</div>
    <div>注册</div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
};
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 60px;
    display: flex;
    position: relative;
    left: 0;
    border-bottom: 1px solid #f0f0f0;
    justify-content: flex-start
  }
  h3{
    align-content: center;
    float: left;
  }
  div div{
    align-content: center;
    float: right;
  }
</style>