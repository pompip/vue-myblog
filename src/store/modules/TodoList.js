import axios from "axios"

const state = {
  num: 1,
  todoList: []
}

const actions = {
  getTodolist: function ({
    commit
  }) {
    axios.get("/api/getTodoList.json")
      .then(res => {
        commit({
          type: "getTodoList",
          data: res.data.data
        })
      })
      .catch(err => {
        console.error(err);
      })
  }
}

const mutations = {
  increase: function (state, num) {
    state.num += num;
  },
  getTodoList: function (state, payload) {
    state.todoList = payload.data
  },
  addTodoList: function (state, payload) {
  
    state.todoList = [...state.todoList,payload.item];
  },
  deleteTodoListOne: function (state, payload) {
    let list = state.todoList
    list.splice(payload.index, 1)
    state.todoList = list;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}