<template>
  <div v-html="pausedHtml"></div>
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
</style>

