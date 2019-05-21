<template>
    <router-link to="/detail">
        <h3>title</h3>
        <span >info</span>
        <div> {{item}} </div>
    </router-link>
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

