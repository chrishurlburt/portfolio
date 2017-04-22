<template>
  <main id="app">
    <section class="layout">
      <article class="left">
        <Navigation :to="previous" v-if="previous" :flipped="true"/>
        <transition name="fade" mode="out-in">
          <router-view name="left" class="page"></router-view>
        </transition>
        <Navigation :to="next" v-if="next" />
      </article>
      <article class="right">
        <transition :name="rightTransition">
          <router-view name="right" class="page"></router-view>
        </transition>
      </article>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { addClass, removeClass } from './util/helpers'

import Navigation from './components/lib/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      next: false,
      previous: false,
      rightTransition: 'slide-up',
      currentRouteIndex: undefined
    }
  },
  watch: {
    $route(to, from) {
      this.routeBodyClasser(to, from)
      this.setNavigation()
      this.setRouteTransition(from)
    },
  },
  methods: {
    routeBodyClasser(to, from) {
      const body = document.getElementsByTagName('body')[0]
      if (from) removeClass(body, from.name)
      addClass(body, to.name)
    },
    setNavigation() {
      const { routes } = this.$router.options
      this.currentRouteIndex = this.getRouteIndex(this.$route)
      const previousRoute = routes.slice(0, this.currentRouteIndex).pop()
      const nextRoute = routes.slice(this.currentRouteIndex + 1)[0]
      this.previous = (previousRoute) ? previousRoute.name : false
      this.next = (nextRoute) ? nextRoute.name : false
    },
    setRouteTransition(from) {
      this.rightTransition = (this.getRouteIndex(from) < this.currentRouteIndex)
        ? 'slide-up'
        : 'slide-down'
    },
    getRouteIndex({ name }) {
      return this.$router.options.routes.findIndex(route => route.name === name)
    }
  },
  computed: {
    ...mapState({
      next: state => state.navigation.next,
      previous: state => state.navigation.previous
    })
  },
  created() {
    this.routeBodyClasser(this.$route, undefined)
    this.setNavigation()
  }
}
</script>
