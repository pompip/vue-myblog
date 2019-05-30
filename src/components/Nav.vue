<template>
  <header class="nav">
    <div class="title">我的博客</div>
    <div class="space"></div>
    <router-link to="/">
      <Button >首页</Button>
    </router-link>
    <router-link to="/edit">
      <Button >编辑</Button>
    </router-link>
    <!-- <router-link to="/about">
      <Button >关于</Button>
    </router-link> -->
    <router-link to="/login">
      <Button >登录</Button>
    </router-link>
    <router-link to="/logon">
      <Button >注册</Button>
    </router-link>
  </header>
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
  background: rgba(255, 255, 255, 0.8);
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

</style>