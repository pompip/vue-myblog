import axios from "@/api/Http";

const state = {
    token: localStorage.getItem("token"),
    isLogin:true
};

const getters = {
    isLogin:(state)=>{
        return state.token!==null;
    }
};

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
                alert("用户名或密码错误")
                console.log(err)
            })
    }
};

const mutations = {
    addToken(state,token){
        localStorage.setItem("token",token);
        state.token = token;
    },
    removeToken(state){
        localStorage.removeItem("token");
        state.token=null;
    }
};

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}