<template>
  <div class="box">
    <div class="title">{{article.title}}</div>
    <div class="info">
      <TimeParser :time="article.createTimestamp"/>
      <span @on:click="download">下载</span>
    </div>

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
  },
  methods:{
    download:function(){
      
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
  background: #f7f7f7aa;
  font-size: 14px;
  color: #000;
}
.title{
  font-size: 24px;
}
.info{
  display: flex;
  justify-content: space-between;
}
</style>


