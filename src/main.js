import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import VueRouter from 'vue-router'
import routerList from './router'

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter(routerList);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
