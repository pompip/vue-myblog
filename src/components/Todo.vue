<template>
  <div>
    <div class="action">
      <input v-model="inputVlue" placeholder="待办">
      <div class="submit" v-on:click="doSubmit(inputVlue)">添加</div>
    </div>
    <ul>
      <li v-on:click="remove(index)" v-for="(item,index) in todoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: () => {
    return {
      inputVlue: "111"
    };
  },
  methods: {
    ...mapMutations("TodoList", {
      remove: "deleteTodoListOne",
      add: "addTodoList"
    }),
    ...mapActions("TodoList", ["getTodolist"]),
    doSubmit: function(inputVlue) {
      this.add({ item: inputVlue });
      this.inputVlue = "";
    }
  },
  created() {
    this.getTodolist();
  },
  computed: {
    ...mapState("TodoList", ["todoList"])
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
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
input {
  box-sizing: border-box;
  padding: 4px;
  height: 30px;
  border-radius: 4px;
  border-color: green;
  border-width: 1px;
  border-style: solid;
  outline: none;
  font-size: 14px;
}
.action{
  display: inline-flex;
  align-content: center;
}
.submit {
  box-sizing: border-box;
  padding: 4px 10px;
  height: 30px;
  border-radius: 4px;
  border-color: green;
  border-width: 1px;
  border-style: solid;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
}
</style>
