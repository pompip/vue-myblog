<template>
  <div class="login-box">
    <div class="login-center">
    <div class="login-action-bar">
      <span v-on:click="change(true)" class="login-action"  v-bind:class="{'login-action-active':isLoginPage}">登录</span>
      <span v-on:click="change(false)" class="login-action" v-bind:class="{'login-action-active':!isLoginPage}">注册</span>
    </div>
    <div v-if="isLoginPage" class="login-content">
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
    <div v-else class="login-content">
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
  height: 60vh;

    display: flex;
  justify-content: center;
  align-items: center;
}
.login-center{
  background: gray;
  padding: 10px;
 
}
.login-action-bar{
  display: flex;
  justify-content:space-around;
}
.login-action-active{
  background: red;
}
.login-action{
  flex-grow: 1;
  text-align: center;
}
.login-content{
  background: red;
}
</style>
