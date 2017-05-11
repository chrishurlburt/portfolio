import ScrollView from 'vue-scrollview'

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './vuex'
import router from './router'

require('../assets/scss/main.scss')

Vue.use(Vuex)
Vue.use(ScrollView)

// global event bus
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus
  },
})

const bus = new Vue({})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bus,
  },
  router,
  store,
  render: h => h(App),
})
