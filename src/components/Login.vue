<template>
  <div class="login-box">
    <div>
      <span v-on:click="change(true)">登录</span>
      <span v-on:click="change(false)">注册</span>
    </div>
    <div v-if="isLoginPage">
      <div>
        <span>账户</span>
        <input>
      </div>
      <div>
        <span>密码</span>
        <input>
      </div>
      <button v-on:click="myLogin('chong','314159')">登录</button>
    </div>
    <div v-else>
      <div>
        <span>账户</span>
        <input>
      </div>
      <div>
        <span>密码</span>
        <input>
      </div>
      <button v-on:click="myLogin('chong','314159')">注册</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
const methods = {
  ...mapActions(["login"]),
  myLogin(name, password) {
    this.login({
      name,
      password
    });
  },
  change(isLoginPage){
    this.isLoginPage = isLoginPage;
  }
};
const data = () => {
  return {
    isLoginPage: false
  };
};

export default {
  methods,
  data
};
</script>

<style scoped>
.login-box{
  
}
</style>
