<template>
  <div class="box">
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
    return {};
  },
  methods: {
    doClick: function() {
      this.$store.commit({ type: "TodoList/increase", num: 10 });
    }
  },
  computed: {
    count() {
      return this.$store.state.TodoList.num;
    }
  }
};
</script>
<style scoped>
.box {
  margin: 10px 20px;
  padding: 10px;
  box-shadow: 10;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
}
</style>


