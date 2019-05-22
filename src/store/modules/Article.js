import axios from "../../api/Http";

const state ={
    articleList:[],
    articleDetailList:[],
    articleDetail:{},
    total:1,
    current:0,
}

const actions = {

    getArticleList(context,page=0){
        axios.get("/article/page/"+page).then(res =>{
            context.commit({
                type:"getArticleList",
                list:res.data.content,
                total:res.data.total,
                current:res.data.current,
            })
        }).catch(err=>{
            console.log(err)
        })
    },
    getArticleDetail(context,id){
        console.log(id)
        axios.get("/article/detail/"+id)
        .then(res =>{
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
        state.total = payload.total;
        state.current = payload.current;
    },
    getArticleDetail:function(state,payload){
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