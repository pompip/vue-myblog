<template>
  <div>
  <div class="box">
    <div class="title">{{article?article.title:""}}</div>
    <div class="info">
      <TimeParser :time="article?article.createTime:''"/>
      <div class="detail-space"></div>
      <span  v-on:click="toEditor">编辑</span>
      <a :href="baseUrl+'/download/'+id" :download='article?article.title:""'>下载</a>
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
import baseUrl from '@/globle'
export default {
  components: { MarkdownParser, TimeParser, },
  created: function() {
    this.requestArticleDetail(this.id);
  },
  data:() => {
    return {
      baseUrl,
    }
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
      this.$router.push("/edit/"+this.id)
    },
  }
};
</script>
<style scoped>
.box {
  max-width: 100vw;
  margin: 5px;
  padding: 5px;
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


