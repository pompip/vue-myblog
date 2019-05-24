<template>
  <div class="box">
    <div>{{article.title}}</div>
    <TimeParser :time="article.createTimestamp"/>
    <MarkdownParser :markdown="article.content"/>
  </div>
</template>

<script>
import { MarkdownParser, TimeParser } from "@/ui";

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


