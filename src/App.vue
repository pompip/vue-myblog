<template>
  <div id="app">
    <Nav/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
