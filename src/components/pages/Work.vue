<template>
  <section class="work-page">
    <div class="desktop-column">
      <ProjectCard v-for="wide in grid.wide" :title="wide.title" :thumbnail="wide.thumbnail" :slug="wide.slug" :key="wide.name" />
    </div>
    <div class="mobile-column">
      <ProjectCard v-for="narrow in grid.narrow" :title="narrow.title" :thumbnail="narrow.thumbnail" :slug="narrow.slug" :key="narrow.name" />
    </div>
  </section>
</template>

<script>
import portfolio from '../../../data/portfolio.json'
import ProjectCard from '../lib/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      grid: {
        wide: [],
        narrow: []
      },
    }
  },
  methods: {
    makeGrid() {
      Object.keys(portfolio).reduce((acc, item) => {
        const project = portfolio[item]
        project.slug = item
        acc[portfolio[item].orientation].push(project)
        return acc
      }, this.grid)
    },
  },
  created() {
    this.makeGrid()
  }
}
</script>
