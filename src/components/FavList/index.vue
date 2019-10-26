<template>
    <div>
    <form v-on:submit.prevent="save()"><input v-model="url"/><button type="submit" >SAVE</button></form>
    <div v-for="(item,index) in list" v-bind:key="index" ><FavItem v-bind:fav='item' /> </div>
    </div>
</template>
<script>
import FavItem from "./FavItem"
import {mapState,mapActions} from "vuex"
export default {
    created(){
        this.getList()
    },
    data:()=>{
        return{
            url:"http://baidu.com"
        }
    },
    components:{
        FavItem
    },
    computed:{
        ...mapState({
            list:(state)=>state.Fav.favList
        })
    },
    methods:{
                ...mapActions({
            getList:"Fav/getList",
            saveFav:"Fav/save"
        }),
        save(){
            if(this.url.substr(0,4)=='http'){
            this.saveFav({url:this.url})
            }

        }
    }
}
</script>