<template>
  <div class="detail">
    <div class="detail1">
      <HomeItem v-for="(item, index) in list" v-bind:key="index" v-bind:item="item">{{item}}</HomeItem>
    </div>
      <router-view class="detail2"/>
  </div>
</template>
<script>
import HomeItem from "./HomeItem";

export default {
  created:function(){
    this.$store.dispatch("Article/getArticleList")
  },
  components: {
    HomeItem
  },
  computed:{
    list(){
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
  position: relative;
}
.detail1 {
  position: absolute;
  z-index: 0;
  top: 1px;
  left: 1px;
}
.detail2 {
	background: gray;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
}
</style>

