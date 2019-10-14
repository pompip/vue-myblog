<template>
  <header class="nav">
    <router-link to="/">
      <div class="title">我的博客</div>
    </router-link>
    <div class="space"></div>

    <router-link to="/edit">
      <Button>编辑</Button>
    </router-link>
    <!-- <router-link to="/about">
      <Button >关于</Button>
    </router-link>-->
    <Button v-if="isLogin" v-on:click="logout">退出</Button>
    <router-link to="/login" v-else>
      <Button>登录</Button>
    </router-link>
  </header>
</template>

<script>
import { Button } from "@/ui";
import { mapGetters,mapMutations } from "vuex";

export default {
  components: { Button },
  data() {
    return {
      // hello:false
    };
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapMutations(["removeToken"]),
    logout(){
      this.removeToken()
    }
  },
};
</script>

<style scoped>
.nav {
  padding: 10px 20px;
  background: rgba(38, 68, 200, 0.8);
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
  color: #ffffff;
}
</style>