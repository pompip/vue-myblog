<template>
  <div id="app">
    <Nav/>
    <Todo msg="Welcome to Your Vue.js App"/>
    <p>
      <router-link to="/">Go to Foo</router-link>
      <router-link to="/about">Go to Bar</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Todo,
    Nav
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
