<template>
  <div class="bg">
    <button @click="openDrawer()">hello world</button>
    <div class="box" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  margin: 10px;
  border: 1px solid #dcdcdc;
  background:#dcdcdc
}
.bg{
    background:#dcdcdc
}
</style>
<script>
export default {
  data: () => {
    return {
      show: false
    };
  },

  methods: {
    openDrawer() {
      this.show = !this.show;
    }
  }
};
</script>