<template>
  <div class="FavItem">
    <img :src="icon" class="FavImg" />
    <span class="FavTitle">{{fav.title}}</span>
    <span class="FavUrl">{{fav.url}}</span>
    <button v-on:click="deleteFav(fav)">DEL</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import http from '@/api'
export default {
  data: () => {
    return {icon:"/favicon.ico"};
  },
  props: { fav: Object },
  components:{
 
  },
  mounted(){
      
  },
  methods: {
    ...mapActions({
      deleteFav: "Fav/delete",
    })
  }
};
</script>
<style scoped>
.FavItem {
  display: flex;
}
.FavImg {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.FavTitle {
  margin: 5px;
}
.FavUrl {
  margin: 5px;
}
</style>