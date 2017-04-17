<template>
  <section class="skill-card" :class="{ flipped }">
    <div class="skill-card-marker"></div>
    <div class="skill-card--inner">
      <div class="skill-heading">
          <div class="skill-title-wrap">
            <div class="skill-title-block" :style="{ transform: (reveal) ? 'scaleX(0)' : 'scaleX(1)' }"></div>
            <h4 class="skill-title"><slot name="skill"></slot></h4>
          </div>
          <span class="divider" :style="{ transform: (reveal) ? 'scaleX(1)' : 'scaleX(0)' }"></span>
      </div>
      <div class="skill-description">
        <transition name="fade" @after-enter="finish">
          <p class="skill-description" :key="reveal" :style="{ visibility: reveal || 'hidden' }">
            <slot name="description"></slot>
          </p>
        </transition>
      </div>
      <!-- <Slider :images="icons" :animate="animate"></Slider> -->
    </div>
  </section>
</template>

<script>
import Slider from './Slider'

export default {
  data() {
    return {
      reveal: false,
      finished: false,
    }
  },
  components: {
    Slider,
  },
  watch: {
    animate(val) {
      if (val && !this.finished) this.reveal = true
    },
  },
  methods: {
    finish() {
      this.finished = true
      this.$emit('entered')
    },
  },
  mounted() {
    if (this.animate) this.reveal = true
  },
  props: {
    flipped: {
      type: Boolean,
      default: () => false,
    },
    animate: {
      type: Boolean,
      default: () => false,
    },
    icons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
