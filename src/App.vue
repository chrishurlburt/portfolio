<template>
  <main id="app">
    <Navigation></Navigation>
    <transition>
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
import { addClass, removeClass } from './util/helpers'
import Navigation from './components/lib/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  watch: {
    $route(to, from) {
      this.routeBodyClasser(to, from)
    },
  },
  methods: {
    routeBodyClasser(to, from) {
      const body = document.getElementsByTagName('body')[0]
      if (from) removeClass(body, from.name)
      addClass(body, to.name)
    },
  },
  created() {
    this.routeBodyClasser(this.$route, undefined)
  }
}
</script>
