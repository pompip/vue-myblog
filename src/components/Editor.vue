<template>
  <div class="editor-box">
    <Button class="preview-button" @click="showPreview">预览</Button>

    <div class="editor_preview">
    <MarkdownEditor class="editor" v-model="content" />

    <MarkdownParser class="preview" :markdown="content" />
    </div>
  </div>
</template>
<script>
import { MarkdownParser } from "@/ui";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { MarkdownEditor, Button } from "@/ui";
export default {
  components: {
    MarkdownParser,
    MarkdownEditor,
    Button
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
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.8);
}
.editor {
  width: 50%;
  height: 88vh;
  flex: 1;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  line-height: 24px;
  font-size: 16px;
  overflow: auto;
}
.preview {
  background: white;
  height: 88vh;
  padding: 10px;
  overflow: auto;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  width: 50%;
}

.preview-button {
  align-self: flex-end;
}

.editor_preview{
  display:flex;
  width: 100%
}
</style>


