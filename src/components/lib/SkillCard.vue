<template>
  <section class="skill-card" :class="{ flipped }">
    <div class="skill-heading">
      <div class="skill-heading--inner">
        <h4 class="skill-title"><slot name="skill"></slot></h4>
        <p class="skill-description"><slot name="description"></slot></p>
      </div>
    </div>
    <div class="skill-slider">
      <div class="skill-slider--inner">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: () => false
    }
  },
}
</script>
