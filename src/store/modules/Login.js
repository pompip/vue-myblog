import axios from "@/api/Http";

const state = {
    token: "456",
    isLogin:true
}

const getters = {
    isLogin:(state)=>{
        return state.isLogin;
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
                context.commit("addToken",res.data.data.token)
            })
            .catch(err => {
                console.error(err);
            })
    }
}

const mutations = {
    addToken(state,token){
        console.log(token)
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