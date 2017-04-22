import ScrollView from 'vue-scrollview'

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './vuex'
import router from './router'

require('../assets/scss/main.scss')

Vue.use(Vuex)
Vue.use(ScrollView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
