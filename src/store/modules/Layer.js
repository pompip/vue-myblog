
const state = {
    showing:false
};

const getters = {
    layerShowing:(state)=>state.showing
};

const actions = {


};

const mutations = {
    showLayer(state){
        console.log('hello 3')
        state.showing =! state.showing;
    }
};

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}