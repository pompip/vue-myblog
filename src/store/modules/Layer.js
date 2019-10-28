
const state = {
    showLayer:true
};

const getters = {
    showLayer:(state)=>state.showLayer
};

const actions = {


};

const mutations = {
    show(state){
        console.log('hello 3')
        state.showLayer =! state.showLayer;
    }
};

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}