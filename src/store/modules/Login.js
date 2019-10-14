import axios from "@/api/Http";

const state = {
    token: localStorage.getItem("token"),
    isLogin:true
}

const getters = {
    isLogin:(state)=>{
        console.log(state.token)
        return state.token!==null;
    }
}

const actions = {
    login(context, payload) {
        console.log(payload);
        let userData = new FormData()
        userData.append("name",payload.name)
        userData.append('password',payload.password)
        axios.post("/user/login",userData)
            .then(res => {
                context.commit("addToken",res.data.data.token);
                payload.loginSuccess()
            })
            .catch(err => {
                console.error(err);
            })
    }
}

const mutations = {
    addToken(state,token){
        console.log(token)
        localStorage.setItem("token",token);
        state.token = token;
    },
    removeToken(state){
        localStorage.removeItem("token");
        state.token=null;
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}