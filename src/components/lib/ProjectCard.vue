<template>
  <section class="project-card" :style="{ background: `url(${this.image})` }">
    <div class="title-overlay">
      <h3 class="title">{{ title }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
