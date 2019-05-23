<template>
  <div class="box">
    <button @click="show=!show">预览</button>
    <textarea class="editor" v-model="article"/>

    <!-- <MarkdownParser v-show="show" class="preview" :markdown="article"/> -->
  </div>
</template>
<script>
import { MarkdownParser } from "@/ui";
export default {
  components: {
    MarkdownParser
  },
  data: () => {
    return { article: "",show:false };
  },
  computed: {}
};
</script>


<style scoped>
.box {
  display: flex;
  height: 90vh;
  align-items:center;
}
.editor,
.preview {

  margin: 0 auto;
  width: 45%;
  height: 90%;
  margin: 10px;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  outline: none;
  scroll-behavior:auto;
}
.editor{
    line-height: 24px;
    font-size: 16px;
}

</style>


