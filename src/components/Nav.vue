<template>
  <div class="nav">
    <div class="title">我的博客</div>
    <div class="space"></div>
    <router-link to="/">
      <div class="action">首页</div>
    </router-link>
    <router-link to="/about">
      <div class="action">关于</div>
    </router-link>

    <div class="action">登录</div>
    <div class="action">注册</div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.nav {
  background: white;
  width: 100%;
  display: flex;
  z-index: 1;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  position: relative;
  height: 56px;
}
.space {
  flex-grow: 1;
}
.title {
  display: inline-flex;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.action {
  margin: 0 10px;
  color: green;
  align-content: center;
  padding: 0 16px;
  line-height: 32px;
  border-radius: 16px;
  border: 1px solid green;
  font-size: 14px;
}
</style>