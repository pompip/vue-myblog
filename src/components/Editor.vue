<template>
  <div class="box">
    <button> 预览</button>
    <div class="editor" contenteditable="true" v-text="getArticle" v-on:onkeyup="addArticle(article)"/>

    <!-- <MarkdownParser v-show="show" class="preview" :markdown="article"/> -->
  </div>
</template>
<script>
// import { MarkdownParser } from "@/ui";
import {mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    // MarkdownParser,
  },
  data: () => {
    return { article: "", show: false };
  },
  computed: {
    ...mapGetters("Article",{getArticle:"getEditArticle"}),
      ...mapMutations("Article",{addArticle:"addEditArticle"})
  }
};
</script>


<style scoped>
.box {
  width: 100%;

}
.editor,
.preview {
  margin: 0 auto;
  width: 100%;

  min-height: 100%;

  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: green;

}
.editor {
  line-height: 24px;
  font-size: 16px;
}
</style>


