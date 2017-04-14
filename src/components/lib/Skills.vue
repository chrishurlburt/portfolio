<template>
  <section class="skills">
    <div class="skills-heading">
      <transition name="drop-fade">
        <h2 class="skills-title" v-if="transitionSkillsHeader">Skills</h2>
      </transition>
    </div>
    <div class="skills--inner">
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
import SkillCard from './SkillCard'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      transitionSkillsHeader: false,
      finished: false,
    }
  },
  watch: {
    // animate(val) {
    //   if (!this.finished && val) this.transitionSkillsHeader = true
    // },
  },
  methods: {
    skillsTitleTransitioned() {

    },
  },
  created() {
    if (this.animate) setTimeout(() => this.transitionSkillsHeader = true, 200)
  },
  props: {
    animate: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>
