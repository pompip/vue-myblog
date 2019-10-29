import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

 Vue.prototype.showLayer = () => {
    store.commit("showLayer");
 }


const mixin = {

  methods: {
    hello2() {
      console.log(this.hello1);
    }
  }
}

Vue.mixin(mixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')