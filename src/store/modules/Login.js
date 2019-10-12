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
        axios.post("/user/login",
            {
                ...payload
            }
        )
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
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}