<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <div class="main">
        <router-view class="detail"/>
        <Footer/>
      </div>
      <Side class="side"/>
    </div>
  </div>
</template>

<script>
import Side from "./components/Side.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Side,
    Nav,
    Footer
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background: url("assets/background.jpg");
  background-attachment:fixed;
  background-size: 100% 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.container {
  width: 100%;
  flex: 1;
  overflow-y:scroll;
  display: flex;
  
  flex-direction: row;
  justify-content: center;
}
.main {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.side {
  width: 18%;
}
.detail {
  flex-grow: 1;
}
</style>
