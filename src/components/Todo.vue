<template>
  <div>
    <div class="hello">
      <input v-model="inputVlue">
      <button v-on:click="doSubmit">添加</button>
    </div>
    <ul>
      <TodoItem
        v-for="(item,index) in getTodoList"
        v-bind:key="index"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todo",
  components: { TodoItem },
  props: {
    msg: String
  },
  data: () => {
    return {
      inputVlue: "111"
    };
  },
  methods: {
    doSubmit: function() {
      this.$store.commit({
        type: "TodoList/addTodoList",
        item: this.inputVlue
      });
      this.inputVlue = "";
    },
  },
  created() {
    this.$store.dispatch("TodoList/getTodolist");
  },
  computed: {
    getTodoList() {
      return this.$store.state.TodoList.todoList;
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
