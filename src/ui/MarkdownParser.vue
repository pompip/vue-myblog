<template>
  <div v-html="pausedHtml" class="markdown-body"></div>
</template>
<script>
import showdown from "showdown";
export default {
  props: ["markdown"],
  computed: {
    pausedHtml() {
      let converter = new showdown.Converter();
      converter.setOption("tables", true);
      converter.setFlavor("github");
      let html = converter.makeHtml(this.markdown);
      return html;
    }
  }
};
</script>
<style scoped>
@import '~@/assets/markdown-style.css';
.markdown-body{
  max-width: 100vh;
}
</style>

