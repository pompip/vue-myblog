<template>
  <li v-on:click="doDelete">{{content}}</li>
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
  computed:{
      content(){
          return this.$store.state.TodoList.todoList[this.index]
      }
  }
};
</script>
