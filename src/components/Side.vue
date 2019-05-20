<template>
  <div>
    <Todo/>
    <div v-on:click="doClick">{{num}}</div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
export default {
  name: "Side",
  components: { Todo },
  data: () => {
    return {
      num: 0
    };
  },
  methods: {
    doClick: function() {
      this.num++;
    }
  }
};
</script>

