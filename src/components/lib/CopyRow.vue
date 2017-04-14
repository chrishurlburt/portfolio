<template>
  <section class="copy-row">
    <div class="copy-row--inner">
      <transition name="titleBlockTransition" @after-enter="titleBlockTransitioned">
        <div class="title-block" :key="transitionTitleBlock" :style="{ visibility: (transitionTitleBlock) ? 'visible' : 'hidden' }">
          <transition name="fade" @after-enter="titleTransitioned">
            <h3 v-if="transitionTitle">
              <slot name="title"></slot>
            </h3>
          </transition>
        </div>
      </transition>
      <div class="copy-block">
        <transition name="fade" @after-enter="copyTransitioned">
          <p :key="transitionCopy" :style="{ visibility: !transitionCopy || 'visible' }">
            <slot name="copy"></slot>
          </p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      transitionTitleBlock: false,
      transitionTitle: false,
      transitionCopy: false,
      finished: false,
    }
  },
  watch: {
    animate(val) {
      if (!this.finished && val) this.transitionTitleBlock = true
    },
  },
  methods: {
    titleBlockTransitioned() {
      setTimeout(() => this.transitionTitle = true, 100)
    },
    titleTransitioned() {
      this.transitionCopy = true
    },
    copyTransitioned() {
      this.finished = true
      this.$emit('transitioned')
    },
  },
  created() {
    if (this.animate) setTimeout(() => this.transitionTitleBlock = true, 200)
  },
  props: {
    animate: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>
