<template>
  <div class="item">
  <router-link :to="'/detail/'+item.id">
    <div style="padding: 10px">
      <div class="title">{{item.title}}</div>
      <TimeParser :time="item.createTime"/>
      <div class="content" v-text="item.content"></div>
    </div>
  </router-link>
  </div>
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

  box-shadow: 10;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
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



