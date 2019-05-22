<template>
  <div>
    <div class="hello">
      <input v-model="inputVlue">
      <div class="submit" v-on:click="doSubmit">添加</div>
    </div>
    <ul>
      <TodoItem v-for="(item,index) in getTodoList" v-bind:key="index" :index="index"/>
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
    }
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
ul {
  list-style-type: none;
}
input {
  box-sizing: border-box;
  padding: 4px;
  height: 30px;
  border-radius: 15px;
  border-color: green;
  box-shadow: none;
  
}

.submit {
  display:inline-block;
  box-sizing: border-box;
  padding: 4px 10px;
  height: 30px;
  border-radius: 15px;
  border-color: green;
  border-width: 1px;
  border-style: solid;
  margin-left: 10px;
  cursor: pointer;
}
</style>
