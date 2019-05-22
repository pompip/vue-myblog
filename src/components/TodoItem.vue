<template>
  <li v-on:click="doDelete" class="box">{{content}}</li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["index"],
  methods: {
    doDelete: function() {
      this.$store.commit({
        type: "TodoList/deleteTodoListOne",
        index: this.index
      });
    }
  },
  computed: {
    content() {
      return this.$store.state.TodoList.todoList[this.index];
    }
  }
};
</script>

<style scoped>
.box {
  box-sizing: border-box;
  margin: 10px 5px;
  padding: 10px;
  box-shadow: 10;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
}
</style>

