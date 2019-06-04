<template>
  <div>
    <span>登录</span>
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
</template>
<script>
import { mapActions } from "vuex";
const methods = {
  ...mapActions(["login"]),
  myLogin(name,password){
      this.login({
        name,password
      })
  }
}

export default {
  methods,
};
</script>

<style scoped>
</style>
