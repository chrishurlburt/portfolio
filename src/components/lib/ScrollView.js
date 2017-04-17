import throttle from 'lodash.throttle'

export default {
  render(h) {
    return h(
      'span',
      [
        this.$scopedSlots.default(this.tracked),
      ],
    )
  },
  data() {
    return {
      tracked: {},
      locations: {},
      scrollListener: undefined,
    }
  },
  methods: {
    setComponentsTracking() {
      this.$scopedSlots.default(this.tracked).reduce((acc, vnode) => {
        if (vnode.key) this.$set(acc, vnode.key, false)
        return acc
      }, this.tracked)
    },
    setComponentsLocations() {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, 0)
          this.$children.reduce((acc, child) => {
            return this.$set(this.locations, child.$vnode.key, child.$el.getBoundingClientRect().top)
          }, this.locations)
          resolve()
        }, 50)
      })
      // FOUC leads to unreliable initial element locations -- can probably remove
      // this in production.
    },
    initScrollListener() {
      this.scrollListener = throttle(this.checkInViewport, this.throttle)
      document.addEventListener('scroll', this.scrollListener, false)
    },
    checkInViewport() {
      const scrolled = window.scrollY
      Object.keys(this.locations).forEach((key) => {
        const toTopOfViewport = this.locations[key] - scrolled
        if (toTopOfViewport + this.offset <= window.innerHeight && toTopOfViewport > 0) {
          this.tracked[key] = true
          delete this.locations[key]
        }
      })
    },
  },
  mounted() {
    this.setComponentsTracking()
    this.setComponentsLocations().then(() => this.initScrollListener())
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener)
  },
  props: {
    offset: {
      type: Number,
      default: () => 400,
    },
    throttle: {
      type: Number,
      default: () => 100,
    },
  },
}
