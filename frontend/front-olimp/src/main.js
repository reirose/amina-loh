import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store/index.js'

Vue.use(VueRouter)

import '@/assets/styles/main.scss';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
