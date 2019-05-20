<template>
    <div v-on:click="doClick">
        <h3>title</h3>
        <span >info</span>
        <div> {{item}} </div>
    </div>
</template>
<script>
export default {
    name:'HomeItem',
    props :["item"],
    methods:{
        doClick:function (){
            alert(this.item);
        }
    }
}
</script>

