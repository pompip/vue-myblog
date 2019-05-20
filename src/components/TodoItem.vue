<template>
    <li v-on:click="doDelete">{{content}}</li>
</template>

<script>
export default {
    name:'TodoItem',
    props:["content","index"],
    methods:{
        doDelete:function(){
            console.log(this.index)
            this.$emit('doDelete',this.index);
        }
    }
}
</script>
