import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from './modules/TodoList'
import Article from './modules/Article'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        TodoList,
        Article
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})