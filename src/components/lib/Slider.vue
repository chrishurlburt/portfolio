<template>
    <section class="slider">
      <transition name="sliderTransition">
        <div class="slider--inner" :key="reveal" :style="{ visibility: reveal || 'hidden' }">
          <div class="previous-button slider-control" @click="previous()">
            <svg class="chevron-icon" x="0px" y="0px" viewBox="0 0 407.436 407.436" xml:space="preserve">
              <polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "/>
            </svg>
          </div>
          <div class="image-wrap">
            <transition-group name="fade">
              <img
                v-for="(image, index) in images"
                :key="image"
                :src="image"
                v-if="index === showing"
              />
            </transition-group>
          </div>
          <div class="next-button slider-control" @click="next()">
            <svg class="chevron-icon" x="0px" y="0px" viewBox="0 0 407.436 407.436" xml:space="preserve">
              <polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "/>
            </svg>
          </div>
        </div>
      </transition>
    </section>
</template>

<script>
export default {
  data() {
    return {
      showing: 0,
      reveal: false,
    }
  },
  watch: {
    animate(val) {
      if (!this.reveal && val) this.reveal = true
    },
  },
  methods: {
    next() {
      this.showing = (this.showing < this.images.length - 1) ? this.showing + 1 : 0
    },
    previous() {
      this.showing = (this.showing > 0) ? this.showing - 1 : this.images.length - 1
    },
  },
  created() {
    if (this.animate) this.reveal = true
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    animate: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>
