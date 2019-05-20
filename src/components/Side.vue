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
  },
    computed: {
    count () {
       let c = this.$store.state.count
        alert(c);
       return c;
    }
  }
};
</script>

