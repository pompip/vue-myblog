<template>
  <div class="nav">
    <h3>我的博客</h3>
    <div class="space"></div>

    <div class="action">
      <router-link to="/">首页</router-link>
    </div>
    <div class="action">
      <router-link to="/about">关于</router-link>
    </div>

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
  background: yellow;
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 1;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
}
.space {
  flex-grow: 1;
}
h3 {
  display: inline-flex;
}
.action {
  margin: 10px;
  align-content: center;
}
</style>