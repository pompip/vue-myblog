import axios from "../../api/Http";

const getArticleList = (context, page) => {
    axios.get("/article/page/" + page).then(res => {
        context.commit(
            {
                type: "saveArticleList",
                list: res.data.content,
                total: res.data.total,
                current: res.data.current,
            }
        )
    }).catch(err => {
        console.log(err)
    })
}

const state = {
    articleList: [],
    articleDetailList: [],
    articleDetail: {},
    editArticle: "啊啊啊啊",
    total: 1,
    current: 0,
}

const actions = {
    refreshArticleList(context) {
        context.commit(
            {
                type: "initArticleState"
            }
        )
        getArticleList(context, 0);
    },
    loadMoreArticleList(context) {
        getArticleList(context, context.state.current + 1);
    },
    getArticleDetail(context, id) {
        if(context.getters.getArticleDetail(id)){
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

    postArticle(context, $router) {
        axios.post("/article/save",
            'content=' + context.state.editArticle)
            .then((res) => {
                console.log(res);
                $router.push({ path: "/detail/" + res.data.id })
            }).catch((err) => {
                console.log(err)
            });
    }
}

const getters = {
    getEditArticle: (state) => {
        return state.editArticle;
    },
    getArticleDetail: (state) => {
        return (id) => {
            return state.articleList.find((value) => {
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
        state.articleDetail = payload.article;
    },
    addEditArticle: function (state, content) {
        state.editArticle = content;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}