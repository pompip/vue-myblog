<template>
  <div class="box">
    <textarea class="editor" v-model="article"/>

    <MarkdownParser class="preview" :markdown="article"/>
  </div>
</template>
<script>
import { MarkdownParser } from "@/ui";
export default {
  components: {
    MarkdownParser
  },
  data: () => {
    return { article: "" };
  },
  computed: {}
};
</script>


<style scoped>
.box {
  position: relative;
  height: 90vh;
 
}
.editor,
.preview {
  position: absolute;
  width: 45%;
  height: 90%;
  margin: 10px;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  outline: none;
}
.editor{
    line-height: 24px;
    font-size: 16px;
}
.preview {
  right: 0;
}
</style>


