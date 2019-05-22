<template>
  <ul>
    <li @click="doNewPage(index-1)" v-for="(index) in total" v-bind:key="index">{{index}}</li>
  </ul>
</template>
<script>
export default {
  computed: {
    total() {
      return this.$store.state.Article.total;
    },
    current() {
      return this.$store.state.Article.current;
    }
  },
  methods: {
    doNewPage(page) {
      this.$store.dispatch("Article/getArticleList", page);
    }
  }
};
</script>

<style scoped>
li{
    display: inline-block;
    border-width: 1px;
    border-color:green;
    border-style:solid;
    border-radius: 10px;
    padding: 4px 20px;
    margin: 10px 4px;
    color:green;
    cursor: pointer;
}
ul {
    margin: 10px 20px;
}

</style>


