<template>
  <div>
    <Todo/>
    <div v-on:click="doClick">{{count }}</div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
export default {
  name: "Side",
  components: { Todo },
  data: () => {
    return {
      
    };
  },
  methods: {
    doClick: function() {
      this.$store.commit({type:'TodoList/increase',num:10})
    }
  },
  computed:{
    count (){
      return  this.$store.state.TodoList.num;
    }
  }
};
</script>

