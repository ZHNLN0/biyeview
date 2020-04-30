import 'normalize.css/normalize.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import Vue from 'vue'
import App from './App.vue'
import filters from './filters'
import './hookRouter'
import router from './router/index'
import store from './store'

Vue.use(Vant)
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
