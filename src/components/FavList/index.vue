<template>
  <div>
    <form v-on:submit.prevent="save()">
      <input v-model="inputUrl" />
      <input v-model="inputId" placeholder="categoryId" />
      <button type="submit">SAVE</button>
        <InputSelector/>
    </form>
    <div class="category-box">
        <FavCategory v-for="(item, key) in favDict" :key="key" class="category-item">
            <FavItem v-for="(item,index) in favDict[key]" v-bind:key="index" v-bind:fav="item" />
        </FavCategory>
    </div>
  </div>
</template>
<script>
import FavItem from "./FavItem";
import FavCategory from "./FavCategory";
import {InputSelector} from '@/ui'
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.getList();
  },
  data: () => {
    return {
      inputUrl: "http://baidu.com",
      inputId: 1
    };
  },
  components: {
    FavItem,
    FavCategory,InputSelector
  },
  computed: {
    ...mapState({
      list: state => state.Fav.favList
    }),
    ...mapGetters({
      favDict: "Fav/favDict"
    })
  },
  methods: {
    ...mapActions({
      getList: "Fav/getList",
      saveFav: "Fav/save"
    }),
    save() {
      if (this.inputUrl.substr(0, 4) === "http") {
        this.saveFav({ url: this.inputUrl, categoryId: this.inputId });
      }
    }
  }
};
</script>
<style scoped>
.category-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
  height: auto;
}
.category-item {
  border: 1px solid #dcdcdc;
  margin: 10px;
  box-sizing: border-box;
  break-inside: avoid;
  padding: 10px;
}
</style>