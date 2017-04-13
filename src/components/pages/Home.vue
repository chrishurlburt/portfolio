<template>
  <section class="page home-page">
    <div class="page-inner">
      <Logo />
      <h1 class="my-name">Chris Hurlburt</h1>
    </div>
    <div id="particles"></div>
  </section>
</template>

<script>
import Logo from '../lib/Logo'
import particlesConfig from '../../../assets/vendor/particlesjs-config.json'

export default {
  components: {
    Logo
  },
  mounted() {
    particlesJS('particles', particlesConfig, () => console.log('loaded'))
  }
}
</script>
