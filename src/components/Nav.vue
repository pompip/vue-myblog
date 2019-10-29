<template>
  <header class="nav">
    <router-link to="/">
      <div class="title">我的博客</div>
    </router-link>
    <div class="space"></div>
    <Drawer>
    <router-link to="/">
      <h4>首页</h4>
    </router-link>
    <router-link to="/fav">
      <h4>收藏</h4>
    </router-link>
    <router-link v-if="isLogin" to="/edit/new">
      <h4>编辑</h4>
    </router-link>
    <!-- <router-link to="/about"> -->
      <h4 @click="test11()">关于</h4>
    <!-- </router-link> -->
    <h4 v-if="isLogin" v-on:click="logout">退出</h4>
    <router-link to="/login" v-else>
      <h4>登录</h4>
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
.title,h4 {
  display: inline-flex;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}


</style>