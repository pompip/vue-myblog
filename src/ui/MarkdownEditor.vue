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
      console.log(this.$refs.input)
  },
  model: {
    prop: "text",
    event: "change"
  },
  props: {
    text: String
  },
  methods: {
    textChange: function() {
      alert(this.text);
    }
  }
};
</script>
