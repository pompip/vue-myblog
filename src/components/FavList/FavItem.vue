<template>
  <div class="FavItem">
    <img :src="icon" class="FavImg" />
    <span class="FavTitle">{{fav.title}}</span>
    <a class="FavUrl" :href="fav.url" target="_Blank">{{fav.url}}</a>
    <button v-show="isLogin" v-on:click="deleteFav(fav)">DEL</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => {
    return {icon:"/favicon.ico"};
  },
  props: { fav: Object },
  components:{
 
  },
  computed:{
    ...mapGetters({
      isLogin:"isLogin"
    })
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