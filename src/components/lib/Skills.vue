<template>
  <section class="skills">
    <div class="skills-heading">
      <transition name="drop-fade">
        <h2 class="skills-title" v-if="transitionSkillsHeader">Skills</h2>
      </transition>
    </div>
    <div class="skills--inner">
      <div class="skill-line"></div>
      <div class="skills-list">
        <Skill-card
          :animate="shouldAnimate('backend')"
          key="backend"
          :icons="['https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg', 'https://cdn.worldvectorlogo.com/logos/mongodb.svg', 'https://cdn.worldvectorlogo.com/logos/mysql.svg', 'https://cdn.worldvectorlogo.com/logos/laravel.svg', 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg']"
        >
          <template slot="skill">Backend</template>
          <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
        </Skill-card>
        <Skill-card
          :flipped="true"
          :animate="shouldAnimate('frontend')"
          key="frontend"
          :icons="['https://cdn.worldvectorlogo.com/logos/javascript.svg','https://cdn.worldvectorlogo.com/logos/html-5.svg', 'https://cdn.worldvectorlogo.com/logos/css-3.svg','https://cdn.worldvectorlogo.com/logos/sass-1.svg','https://cdn.worldvectorlogo.com/logos/vue-9.svg', 'https://cdn.worldvectorlogo.com/logos/react.svg', 'https://cdn.worldvectorlogo.com/logos/redux.svg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg', 'https://cdn.worldvectorlogo.com/logos/foundation.svg', 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg']"
        >
          <template slot="skill">Frontend</template>
          <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
        </Skill-card>
        <Skill-card
          :animate="shouldAnimate('ios')"
          key="ios"
          :icons="['https://cdn.worldvectorlogo.com/logos/react.svg']"
        >
          <template slot="skill">iOS + Android</template>
          <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
        </Skill-card>
        <Skill-card
          :flipped="true"
          :animate="shouldAnimate('tooling')"
          key="tooling"
          :icons="['https://cdn.worldvectorlogo.com/logos/webpack.svg', 'https://cdn.worldvectorlogo.com/logos/babel-10.svg', 'https://cdn.worldvectorlogo.com/logos/docker.svg', 'https://cdn.worldvectorlogo.com/logos/gulp.svg',]"
        >
          <template slot="skill">Tooling</template>
          <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
        </Skill-card>
        <Skill-card :animate="shouldAnimate('prototyping')" key="prototyping">
          <template slot="skill">Prototyping</template>
          <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
        </Skill-card>
      </div>
    </div>
  </section>
</template>

<script>
import throttle from 'lodash.throttle'
import SkillCard from './SkillCard'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      transitionSkillsHeader: false,
      transitionSkillCards: [],
      finished: false,
    }
  },
  watch: {
    animate(val) {
      if (!this.finished && val) this.transitionSkillsHeader = true
    },
  },
  methods: {
    shouldAnimate(key) {
      return this.transitionSkillCards.length === 5 || this.transitionSkillCards.includes(key)
    },
    skillCardsReduce(map, vm) {
      return map.set(vm, vm.$el.getBoundingClientRect().top)
    },
    checkSkillCard() {
      const scrolled = window.scrollY
      this.skillCardsLocations.forEach((distanceTop, vm) => {
        const toTopOfViewport = distanceTop - scrolled
        if (toTopOfViewport + 400 <= window.innerHeight && toTopOfViewport > 0) {
          this.transitionSkillCards.push(vm.$vnode.key)
          this.skillCardsLocations.delete(vm)
        }
      })
    },
  },
  mounted() {
    if (this.animate) setTimeout(() => this.transitionSkillsHeader = true, 200)
    setTimeout(() => {
      window.scrollTo(0, 0)
      this.skillCardsLocations = this.$children.reduce(this.skillCardsReduce, new Map())
      window.onscroll = throttle(this.checkSkillCard, 100)
    }, 50)
    // FOUC leads to unreliable initial element locations -- can probably remove
    // this in production.
  },
  beforeDestroy() {
    window.onscroll = undefined
  },
  props: {
    animate: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>
