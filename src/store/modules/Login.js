import axios from "@/api/Http";

const state = {
    token: ""
}

const getters = {

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