<template>
  <div>
    <div>{{article.title}}</div>
    <TimeParser :time="article.createTimestamp"/>
    <MarkdownParser :markdown="article.content"/>
  </div>
</template>

<script>
import MarkdownParser from "./MarkdownParser";
import TimeParser from "./TimeParser";
export default {
  components: { MarkdownParser, TimeParser },
  created: function() {
    this.$store.dispatch("Article/getArticleDetail", this.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    article() {
      return this.$store.state.Article.articleDetail;
    }
  }
};
</script>

