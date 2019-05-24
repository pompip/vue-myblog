<template>
  <div>
    <div class="action">
      <input v-model="inputVlue" placeholder="待办">
      <span class="submit" v-on:click="doSubmit(inputVlue)">添加</span>
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
  background: none;
  border-style: none;
  outline: none;
  flex-grow: 1;
  width: 0;
  padding: 10px;
}

.submit {
  cursor: pointer;
  align-self: center;
  padding:  10px;
  border-left: 1px solid green;
}

.action {
  box-shadow: 10;
  background: #f7f7f7;
  font-size: 14px;
  margin: 10px 5px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
}
</style>
