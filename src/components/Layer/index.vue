<template>
  <div v-if="showing" class="layer">hello world</div>
</template>
<style scoped>
.layer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #201e1c1e;
  pointer-events: none;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({showing:"layerShowing"})
  }
};
</script>