<template>
  <aside class="box">
    <Clock />
    <Todo/>
    <div v-on:click="increase(10)">{{num }}</div>
  </aside>
</template>
<script>
import Todo from "./Todo.vue";
import Clock from "./Clock"
import { mapMutations, mapState } from "vuex";
export default {
  components: { Todo,Clock },
  data: () => {
    return {};
  },
  methods: {
    ...mapMutations("TodoList", ["increase"])
  },
  computed: {
    ...mapState("TodoList", ["num"])
  }
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px 20px;
  box-shadow: 10;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7aa;

}
</style>


