import { getFavList,saveFav,delFav } from '@/api'
const state = {
    favList: []
};

const getters = {
    favDict :(state)=>{
        let dict ={}
        state.favList.forEach(e=>{
            let key = e.categoryId;
            if (key in dict){
                dict[key].push(e)
            }else{
                dict[key] =[e]
            }
        })
        return dict;
    }
};

const actions = {
    getList: (context) => {
        getFavList(reslut => {
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
    },
    delete:(context,payload)=>{
        context.commit("delete",payload)
        delFav(payload.id,result=>{
            console.log(result)
  
        })
    }

};

const mutations = {
    modifyFavlist: (state,payload) => {
        state.favList = [...payload instanceof Array ?payload:[payload]  ,...state.favList]
    },
    delete:(state,payload)=>{
        let arr =[]
        state.favList.forEach(element => {
            if(element.id!=payload.id){
                arr.push(element)
            }
        });
        state.favList=arr;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}