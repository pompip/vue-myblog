import axios from '@/api/Http'
const state = {

}

const actions ={

    requestCommentList(id){
        axios.get("/comment/list/"+id)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
}

const getters ={

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}