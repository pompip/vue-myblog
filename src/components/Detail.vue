<template>
  <div class="box">
    <div class="title">{{article?article.title:""}}</div>
    <div class="info">
      <TimeParser :time="article?article.createTimestamp:''"/>
      <a :href="'/api/download/'+id">下载</a>
    </div>

    <MarkdownParser :markdown="article?article.content:''"/>
  </div>
</template>

<script>
import { MarkdownParser, TimeParser } from "@/ui";
import {mapGetters, mapActions } from 'vuex';
export default {
  components: { MarkdownParser, TimeParser },
  created: function() {
    this.requestArticleDetail(this.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
        ...mapGetters("Article",["getArticleDetail"]),
    article() {
      return  this.getArticleDetail(this.id);
    }
  },
  methods:{
    ...mapActions("Article",["requestArticleDetail"])
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


