import Vue from 'vue'
import axios from './axios';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Inject axios instance to both Vue && Vuex
Vue.prototype.$http = axios;
store.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
