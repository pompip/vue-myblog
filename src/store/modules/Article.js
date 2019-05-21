import axios from "../../api/Http";

const state ={
    articleList:[],
    articleDetailList:[],
    articleDetail:{}
}

const actions = {

    getArticleList(context){
        axios.get("/article/page/1").then(res =>{
            context.commit({
                type:"getArticleList",
                list:res.data.content
            })
        }).catch(err=>{
            console.log(err)
        })
    },
    getArticleDetail(context,id){
        console.log(id)
        axios.get("/article/detail/"+id)
        .then(res =>{
            console.log(res.data)
            context.commit({
                type:"getArticleDetail",
                article:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

const getters = {
    getArticle:(state)=>{
        let detail=  state.articleDetail
        console.log("getters:")
        console.log(detail)
        return detail;
    }
}
const mutations = {
    getArticleList(state,payload){
        state.articleList = payload.list;
    },
    getArticleDetail:function(state,payload){
        console.log("detail")
        console.log(payload.article)
        state.articleDetail = payload.article;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}