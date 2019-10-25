<template>
    <div><FavItem v-bind:fav='{title:"百度",url:"http://baidu.com",icon:"http://baidu.com/favicon.ico"}' /> hello</div>
</template>
<script>
import FavItem from "./FavItem"
export default {
    components:{
        FavItem
    }
}
</script>