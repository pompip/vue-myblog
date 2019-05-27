<template>
  <div class="box">
    <button @click="showPreview">预览</button>
    <MarkdownEditor class="editor" v-model="article"/>

    <!-- <MarkdownParser v-show="show" class="preview" :markdown="article"/> -->
  </div>
</template>
<script>
// import { MarkdownParser } from "@/ui";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { MarkdownEditor } from "@/ui";
export default {
  components: {
    // MarkdownParser,
    MarkdownEditor
  },
  data: () => {
    return { show: false};
  },

  computed: {
    ...mapGetters("Article", { getArticle: "getEditArticle" }),

    article: {
      set(value) {
        this.addArticle(value);
      },
      get() {
        return this.getArticle;
      }
    }
  },
  methods: {
    ...mapMutations("Article", { addArticle: "addEditArticle" }),
    ...mapActions("Article",['postArticle']),
    showPreview: function() {
      this.postArticle(this.$router)
      alert(this.article);
    }
  }
};
</script>


<style scoped>
.box {
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: flex-start;
}
.editor,
.preview {
  
  width: 100%;
 height: 90vh;
  flex: 1;
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


