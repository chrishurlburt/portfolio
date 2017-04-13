<template>
  <section class="skills">
    <div class="skills-heading" ref="skillHeading">
      <transition name="skillsBlockTransition" @after-enter="skillsBlockTransitioned">
        <div class="skills-heading--inner" v-if="transitionSkillsBlock">
          <transition name="fade">
            <h3 v-if="transitionSkills">Skills</h3>
          </transition>
        </div>
      </transition>
    </div>
    <!-- <div class="skill-line" ref="scrollLine" :style="lineTransform"></div> -->

    <div class="skills--inner" ref="scrollContainer">
      <Skill-card>
        <template slot="skill">Backend</template>
        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
      </Skill-card>
      <Skill-card :flipped="true">
        <template slot="skill">Frontend</template>
        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
      </Skill-card>
      <Skill-card>
        <template slot="skill">iOS + Android</template>
        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
      </Skill-card>
      <Skill-card :flipped="true">
        <template slot="skill">Dev Ops</template>
        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
      </Skill-card>
      <Skill-card>
        <template slot="skill">Prototyping</template>
        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</template>
      </Skill-card>
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
      transitionSkillsBlock: false,
      transitionSkills: false,
      skillsHeadingTop: undefined,
      skillsLineHeight: 0,
      scrollContainerHeight: undefined,
      finished: false,
    }
  },
  watch: {
    animate(val) {
      if (!this.finished && val) this.transitionSkillsBlock = true
    },
  },
  methods: {
    scrollLine() {
      requestAnimationFrame(() => this.setLineHeight())
    },
    setLineHeight() {
      if (window.scrollY + 100 >= this.skillsHeadingTop) {
        this.skillsLineHeight = (window.scrollY + 200) - this.skillsHeadingTop
      } else if (window.scrollY + 200 <= this.skillsHeadingTop) {
        this.skillsLineHeight = 0
      }
    },
    setInitial() {
      window.scrollTo(0, 0)
      this.skillsHeadingTop = this.$refs.skillHeading.getBoundingClientRect().top
      this.scrollContainerHeight = this.$refs.scrollContainer.getBoundingClientRect().height
      this.setLineHeight()
    },
    skillsBlockTransitioned() {
      setTimeout(() => this.transitionSkills = true, 100)
    },
  },
  computed: {
    lineTransform() {
      return { transform: `scaleY(${this.skillsLineHeight})` }
    },
  },
  created() {
    // window.onscroll = throttle(this.scrollLine, 100)
    if (this.animate) this.transitionSkillsBlock = true
  },
  mounted() {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => this.setInitial(), 50)
      return
    }
    this.setInitial()
  },
  beforeDestroy() {
    window.onscroll = undefined
  },
  props: {
    animate: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>
