<template>
  <router-link :to="'/detail/'+item.id">
    <div style="padding: 10px">
      <div class="title">{{item.title}}</div>
      <TimeParser :time="item.createTime"/>
      <div class="content" v-text="item.content"></div>
    </div>
  </router-link>
</template>
<script>
import { TimeParser } from "@/ui";
export default {
  components: { TimeParser },
  computed: {
    time() {
      return this.item.createTimestamp;
    }
  },
  props: ["item"],
  methods: {
    doClick: function() {
      alert(this.item);
    }
  }
};
</script>
<style  scoped>

.title {
  font-size: 18px;
  font-weight: bold;
}

.content {
  font-size: 1em;
  line-height: 2em;
  word-wrap: break-word;
  max-width: 40vw;
  max-height: 6em;
  overflow: hidden;
}
</style>



