<template>
  <header class="nav">
    <router-link to="/">
      <div class="title">我的博客</div>
    </router-link>
    <div class="space"></div>
    <Drawer >
    <router-link to="/">
      <span>首页</span>
    </router-link>
    <router-link to="/fav">
      <span>收藏夹</span>
    </router-link>
    <router-link v-if="isLogin" to="/edit/new">
      <span>编辑</span>
    </router-link>
    <!-- <router-link to="/about"> -->
      <span @click="test11()">关于</span>
    <!-- </router-link> -->
    <span v-if="isLogin" v-on:click="logout">退出</span>
    <router-link to="/login" v-else>
      <span>登录</span>
    </router-link>
    </Drawer>
  </header>
</template>

<script>
import { Drawer } from "@/ui";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { Drawer },
  created() {
    if (this.isLogin) {
      this.refreshToken();
    }
  },
  data() {
    return {
      show:false
    };
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapMutations(["removeToken"]),
    ...mapActions(["refreshToken"]),
    logout() {
      this.removeToken();

    },
    test11(){
      this.showLayer()
    },
    openDrawer(){
      this.show = !this.show;
    }
  }
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