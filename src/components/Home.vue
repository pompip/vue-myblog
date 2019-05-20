<template>
    <div>
     
            <HomeItem v-for="(item, index) in list" v-bind:key="index" v-bind:item="item">{{item}}</HomeItem>
      
    </div>
</template>
<script>
import HomeItem from './HomeItem'
export default {
    components:{
        HomeItem
    },
    name:'Home',
    data:()=>{
        return{
            list:[1,2,3]
        }
    }
}
</script>
