<template>
  <section class="work-page">
    <div class="desktop-column">
      <ProjectCard title="Hackable? Podcast" image="https://source.unsplash.com/category/technology/700x700" />
      <ProjectCard title="Forevermark Marketing Portal" description="a few words about the project can go here" image="https://source.unsplash.com/category/technology/800x800" />
      <ProjectCard title="Island of Hackable Toys" description="a few words about the project can go here" image="https://source.unsplash.com/category/technology/600x600" />
    </div>
    <div class="mobile-column">
      <ProjectCard title="Accurate SilentPak" image="https://source.unsplash.com/category/technology/300x600" />
      <ProjectCard title="Uncle Julio's Chocolate Pinata" description="a few words about the project can go here" image="https://source.unsplash.com/category/technology/350x600" />
    </div>
  </section>
</template>

<script>
import ProjectCard from '../lib/ProjectCard'

export default {
  components: {
    ProjectCard
  }
}
</script>
