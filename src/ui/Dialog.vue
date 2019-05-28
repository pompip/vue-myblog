<template>
  <div class="dialog-box" v-show="open" v-on:click="$emit('dismiss')">
    <slot class="dialog-content">hello this is content</slot>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
  },
};
</script>
<style scoped>
.dialog-box {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-content {
  width: 50vw;
  height: 30%;
  display: inline;
  background: red;
}
</style>


