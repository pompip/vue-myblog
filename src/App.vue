<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <div class="main">
        <router-view/>
      </div>
      <Side/>
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
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.container {
  display: flex;
  padding-bottom: 20px;
}
.main {
  /* flex-grow: 1; */
  width: 80%;
}

</style>
