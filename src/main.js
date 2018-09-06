import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueFullPage)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
