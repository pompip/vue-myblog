<template>
  <div>
    <div class="hello">
      <input v-model="inputVlue">
      <button v-on:click="doSubmit">添加</button>
    </div>
    <ul>
      <TodoItem v-for="(item,index) in list" v-bind:key="index" :content="item" :index="index" @doDelete="doDelete"/>
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
      inputVlue: "111",
      list: ["hello", "hi"]
    };
  },
  methods: {
    doSubmit:function () {
      this.list.push(this.inputVlue);
      this.inputVlue = "";
    },
    doDelete:function(index){
      this.list.splice(index,1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
