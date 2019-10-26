<template>
    <div><img :src="fav.icon"/><span>{{fav.title}}</span><span>{{fav.url}}</span><span>Del</span></div>
</template>
<script>
export default {
    data:()=>{
        return {
            
        }
    },
    props:{fav:Object},
    mounted:()=>{
        
    }
}
</script>