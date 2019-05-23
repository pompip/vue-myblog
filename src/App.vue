<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <main class="main">
        <router-view/>
      </main>
      <aside>
        <Side/>
      </aside>
    </div>
  </div>
</template>

<script>
import Side from "./components/Side.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Side,
    Nav
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* background: #0f3854;
        background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%); */

  /* background: url("assets/background.jpg");
  background-size: 100% 100%; */
  display: flex;
  flex-direction:column;
}
.container {
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding-bottom: 20px;
  width: 98vw;
  padding-top: 7vh;
}
main {
  box-sizing: border-box;
  width: 80vw;
}
aside {
  position: fixed;
  right: 0;
  width:max-content;
}
</style>
