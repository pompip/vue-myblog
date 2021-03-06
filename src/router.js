import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login'
import Logon from './components/Logon'
import Editor from './components/Editor'
import store from './store/index'
import FavList from './components/FavList'

Vue.use(Router)

const rou = new Router({

    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {

            }

        },
        {
            path: '/detail/:id',
            component: Detail,
            name: "detail"
        },
        {
            path: "/fav",
            component: FavList,
            name: "FavList"
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './components/About.vue')
            // component: About
        },
        {
            path: "/login",
            component: Login,
            name: "login"
        },
        {
            path: "/logon",
            component: Logon,
            name: "logon"
        },
        {
            path: "/edit/:id",
            component: Editor,
            name: "editor",
            meta: {
                requireAuth: true
            }
        }
    ],
    scrollBehavior(
        // to, from, savedPosition
    ) {
        // return 期望滚动到哪个的位置
        // return { x: 0, y: 0 }
    },

})
rou.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        var isLogin = store.getters.isLogin;
        if (isLogin) {
            next();
            store.dispatch("refreshToken",()=>{
                next({path:"/login"})
            })
        } else {
            next({
                path: "/login"
            })
        }
    } else {
        next();
    }

})
export default rou;