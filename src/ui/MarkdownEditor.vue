<template>
  <div
    contenteditable="true"
    ref="input"
    @input="$emit('change', $event.target.innerText)"
  ></div>
</template>
  <!-- @focus="$event.target.innerText=text" -->
    <!-- @blur="$event.target.innerText=text" -->
<script>
export default {
  mounted:function(){
     this.$refs.input.innerText=this.text;
  },
  model: {
    prop: "text",
    event: "change"
  },
  props: {
    text: String
  },
};
</script>
