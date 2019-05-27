<template>
  <div class="detail">
    <HomeItem v-for="(item, index) in list" v-bind:key="index" v-bind:item="item">{{item}}</HomeItem>

    <Button class="action" v-on:click="moreAction" text="获取更多"/>
  </div>
</template>
<script>
import HomeItem from "./HomeItem";
import { mapActions } from "vuex";
import { Button } from "@/ui";
export default {
  // beforeRouteEnter(to, from, next) {
  //   if (!from.name) {
  //     next(vm => vm.refreshArticleList());
  //   } else {
  //     next();
  //   }
  // },
  components: {
    HomeItem,
    Button
  },
  created(){
    if(this.list .length ==0 ){
      this.refreshArticleList()
    }
  },
  computed: {
    list() {
      return this.$store.state.Article.articleList;
    }
  },
  methods: {
    ...mapActions("Article", ["refreshArticleList", "loadMoreArticleList"]),
    moreAction: function() {
      this.loadMoreArticleList();
    }
  }
};
</script>
<style  scoped>
.detail {
  display: flex;
  flex-direction: column;
}
.action{
  align-self:center;
  width: 80%;

}
</style>

