<template>
  <main id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </main>
</template>

<script>
import Navigation from './components/lib/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
}
</script>
