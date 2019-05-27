<template>
  <div class="nav">
    <div class="title">我的博客</div>
    <div class="space"></div>
    <router-link to="/">
      <Button text="首页"/>
    </router-link>
    <router-link to="/edit">
      <Button text="编辑"/>
    </router-link>
    <router-link to="/about">
      <div class="action">关于</div>
    </router-link>
    <router-link to="/login">
      <div class="action">登录</div>
    </router-link>
    <router-link to="/logon">
      <Button text="注册"/>
    </router-link>
  </div>
</template>

<script>
import { Button } from "@/ui";
export default {
  components: { Button },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.nav {
  padding: 10px 20px;
  background: #f7f7f7aa;
  display: flex;
  align-items: center;
}
.space {
  flex-grow: 1;
}
.title {
  display: inline-flex;
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