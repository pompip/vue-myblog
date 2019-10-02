<template>
  <div>
  <div class="box">
    <div class="title">{{article?article.title:""}}</div>
    <div class="info">
      <TimeParser :time="article?article.createTime:''"/>
      <div class="detail-space"></div>
      <a href="#" v-on:click="toEditor">编辑</a>
      <a :href="'/api/download/'+id">下载</a>
    </div>

    <MarkdownParser :markdown="article?article.content:''"/>

  </div>
  <div class="box">
    <span >评论：</span>
    <div v-for="(item,i) in test " :key="i" class="info">
      <span >hello world {{item}} {{i}}</span>
    </div>
  </div>
  </div>
</template>

<script>
import { MarkdownParser, TimeParser, } from "@/ui";
import {mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  components: { MarkdownParser, TimeParser, },
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
    },
    test(){
      return ["1","2"]
    }
  },
  methods:{
    ...mapActions("Article",["requestArticleDetail"]),
    ...mapMutations("Article",['copyToEditArticle']),
    toEditor(){
      this.copyToEditArticle(this.id);
      this.$router.push("/edit")
    }
  }
};
</script>
<style scoped>
.box {
  max-width: 100vw;
  margin: 10px 20px;
  padding: 10px;
  box-shadow:  #005cc5;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  color: #000;
}
.title{
  font-size: 24px;
}
.info{
  display: flex;
  justify-content:flex-start;
  align-items: center;
}
.detail-space{
  flex-grow: 1;
}
</style>


