import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home'
import About from './components/pages/About'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
  ],
})


export default router
