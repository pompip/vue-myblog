<template>
  <div class="editor-box">

    <MarkdownEditor class="editor" v-model="content" />
    <MarkdownParser class="preview" :markdown="content" />

  </div>
</template>
<script>
import { MarkdownParser } from "@/ui";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { MarkdownEditor } from "@/ui";
export default {
  components: {
    MarkdownParser,
    MarkdownEditor,
  },
  data: () => {
    return { show: false };
  },

  computed: {
    ...mapGetters("Article", { getArticle: "getEditArticle" }),

    content: {
      set(value) {
        this.addArticle(value);
        this.postArticle();
      },
      get() {
        return this.getArticle.content;
      }
    }
  },
  methods: {
    ...mapMutations("Article", { addArticle: "saveEditArticleContent" }),
    ...mapActions("Article", ["postArticle"]),
    showPreview: function() {
      this.show = true;
    },
    dialogDismiss() {
      this.show = false;
    }
  }
};
</script>


<style scoped>
.editor-box {
  display: flex;
  height: 88vh;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);

}
.editor,.preview  {
  flex-grow: 1;
  height: 88vh;
  padding: 10px;
  margin-left: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  line-height: 24px;
  font-size: 16px;
  overflow: auto;
}
.preview{

}



</style>


