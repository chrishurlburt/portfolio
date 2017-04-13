<template>
  <nav class="navigation">
    <a href="/#/" class="nav-logo">
      <Logo :still="true" />
    </a>
    <ul class="nav-list">
      <li class="nav-list-item"><router-link to="about">About</router-link></li>
      <li class="nav-list-item"><router-link to="work">Work</router-link></li>
      <li class="nav-list-item"><router-link to="experiments">Experiments</router-link></li>
      <li class="nav-list-item"><router-link to="contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
import Logo from './Logo'


export default {
  components: {
    Logo
  },
}
</script>
