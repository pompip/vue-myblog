<template>
  <div class="info">{{parsedTime}}</div>
</template>
<script>
import { dataFormat } from "@/utils";
export default {
  props: ["time"],
  computed: {
    parsedTime() {
      return dataFormat(this.time);
    }
  }
};
</script>

<style scoped>
.info {
  font-size: 12px;
  margin: 4px 0;
  color: green;
}
</style>


