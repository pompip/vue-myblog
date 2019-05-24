<template>
  <div class="detail">
    <div >
      <HomeItem v-for="(item, index) in list" v-bind:key="index" v-bind:item="item">{{item}}</HomeItem>
    </div>
    <Pagination/>
  </div>
</template>
<script>
import HomeItem from "./HomeItem";
import Pagination from "./Pagination";
export default {
  created: function() {
    this.$store.dispatch(
      "Article/getArticleList",
      this.$store.state.Article.current
    );
  },
  components: {
    HomeItem,
    Pagination
  },
  computed: {
    list() {
      return this.$store.state.Article.articleList;
    }
  },
  data: () => {
    return {
      // list: [1, 2, 3]
    };
  }
};
</script>
<style  scoped>
.detail {

}

</style>

