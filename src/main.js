import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'


Vue.use(VueResource)
Vue.use(VueFormulate)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history' 

});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
