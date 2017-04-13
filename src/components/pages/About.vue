<template>
    <section class="page about-page">
      <div class="page-inner">
        <Copy-row :animate="true" @transitioned="bioTransitioned">
            <template slot="title">Web Developer</template>
            <template slot="copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
        </Copy-row>
        <Skills :animate="skillsIn"></Skills>
      </div>
    </section>
</template>

<script>
import CopyRow from '../lib/CopyRow'
import Skills from '../lib/Skills'

export default {
  components: {
    CopyRow,
    Skills,
  },
  data() {
    return {
      skillsIn: false,
    }
  },
  methods: {
    bioTransitioned() {
      this.skillsIn = true
    },
  },
}
</script>
