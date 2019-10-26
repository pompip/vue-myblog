import { getFavList,saveFav } from '@/api'
const state = {
    favList: [{ title: "百度", url: "http://baidu.com", icon: "http://baidu.com/favicon.ico" },
    { title: "腾讯", url: "http://www.tencent.com", icon: "http://www.tencent.com/favicon.ico" }]
};

const getters = {

};

const actions = {
    getList: (context) => {
        getFavList(reslut => {
            console.log(reslut)
            context.commit('modifyFavlist',reslut)
        })
    },
    save:(context,data)=>{
        data.title= "NoTitle"
        data.icon=data.url+"/favicon.ico"
        saveFav(data,result=>{
            console.log(result)
            context.commit("modifyFavlist",result)
        })
    }

};

const mutations = {
    modifyFavlist: (state,payload) => {
        state.favList = [...payload instanceof Array ?payload:[payload]  ,...state.favList]
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}