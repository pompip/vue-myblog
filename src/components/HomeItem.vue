<template>
  <router-link :to="'/detail/'+item.id">
    <div class="item">
      <div class="title">{{item.title}}</div>
      <TimeParser :time="item.createTimestamp"/>
      <div class="content" v-text="item.content"/>
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
.item {
  flex-grow: 1;
  margin: 5px 20px;
  padding: 10px;
  box-shadow: 10;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7aa;
  font-size: 14px;
  color: #000;
}
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



