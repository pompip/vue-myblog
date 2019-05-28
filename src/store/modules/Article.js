import axios from "../../api/Http";

const getArticleList = (context, page) => {
    axios.get("/article/page/" + page).then(res => {
        context.commit({
            type: "saveArticleList",
            list: res.data.content,
            total: res.data.total,
            current: res.data.current,
        })
    }).catch(err => {
        console.log(err)
    })
}

const state = {
    articleList: [],
    articleDetailList: [],
    editArticle: {
        content:""
    },
    total: 1,
    current: 0,
}
var t;
const actions = {
    refreshArticleList(context) {
        context.commit({
            type: "initArticleState"
        })
        getArticleList(context, 0);
    },
    loadMoreArticleList(context) {
        getArticleList(context, context.state.current + 1);
    },
    requestArticleDetail(context, id) {
        if (context.getters.getArticleDetail(id)) {
            return;
        }
        axios.get("/article/detail/" + id)
            .then(res => {
                context.commit({
                    type: "saveArticleDetail",
                    article: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    postArticle(context) {
        if (t) {
            clearTimeout(t);
        }
        t = setTimeout(() => {
            // axios.post("/article/save",
            //     'content=' + context.state.editArticle)
            axios.post("/article/save", {
                ...context.state.editArticle
            }).then((res) => {
                console.log(res);
                context.commit("saveEditArticle",res.data)
            }).catch((err) => {
                console.log(err)
            });
        }, 5000)

    }
}

const getters = {
    getEditArticle: (state) => {
        return state.editArticle;
    },
    getArticleDetail: (state) => {
        return (id) => {
            return state.articleDetailList.find((value) => {
                return value.id == id
            })
        }
    }
}
const mutations = {
    initArticleState(state) {
        state.articleList = [];
        state.total = 0;
        state.current = 0;
    },
    saveArticleList(state, payload) {
        state.articleList = [...state.articleList, ...payload.list];
        state.total = payload.total;
        state.current = payload.current;
    },
    saveArticleDetail: function (state, payload) {
        state.articleDetailList = [...state.articleDetailList, payload.article];
    },
    saveEditArticle: function (state, payload) {
        state.editArticle = {...state.editArticle,...payload};
    },
    saveEditArticleContent: function (state, text) {
        state.editArticle = {...state.editArticle,content:text};
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}