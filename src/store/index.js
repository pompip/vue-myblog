import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from './modules/TodoList'
import Article from './modules/Article'
import Login from './modules/Login'
import Fav from './modules/Fav'
import Layer from './modules/Layer'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store =  new Vuex.Store({
    modules: {
        TodoList,
        Article,
        Login,
        Fav,
        Layer
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})
export default store;