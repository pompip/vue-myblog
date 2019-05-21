import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1,
    todoList:[]
  },
  mutations: {
    increase: function (state, payload) {
      state.num += payload.num;
    },
    getTodoList:function(state,palyoad){
      state.todoList = palyoad.data
    }
  },
  actions: {
    getTodolist: function ({commit}) {
      axios.get("/api/getTodoList.json")
    .then(res => {
        commit({
          type:"getTodoList",
          data:res.data.data
        })
    })
    .catch(err => {
        console.error(err); 
    })
    }
  }
})
