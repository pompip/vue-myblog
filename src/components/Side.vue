<template>
  <div class="box">
    <Clock />
    <Todo/>
    <div v-on:click="increase(10)">{{num }}</div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
import Clock from "./Clock"
import { mapMutations, mapState } from "vuex";
export default {
  name: "Side",
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


