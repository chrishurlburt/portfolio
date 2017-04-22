import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home'
import Work from './components/pages/Work'

import About from './components/pages/About'
import Me from './components/pages/Me'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', components: { left: Home, right: Work }, name: 'home' },
    { path: '/about', components: { left: About, right: Me }, name: 'about' },
  ],
})


export default router
