export default {
  methods: {
    scrollDown(selector) {
      const scollY = document.querySelector(selector).clientHeight
      window.scrollTo({ top: scollY, behavior: 'smooth' })
    }
  }
}
