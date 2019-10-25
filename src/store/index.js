import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from './modules/TodoList'
import Article from './modules/Article'
import Login from './modules/Login'
import Fav from './modules/Fav'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store =  new Vuex.Store({
    modules: {
        TodoList,
        Article,
        Login,
        Fav
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})
export default store;