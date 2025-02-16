export const vLazy = {
  mounted(el: HTMLImageElement) {
    // Ensure the element has a `data-src` attribute and not set `src` initially
    const src = el.dataset.src
    if (!src) {
      console.warn('Lazy image is missing data-src attribute!')
      return
    }
    el.src = '' // Clear the initial src (if it exists)

    // Create intersection observer to load the image when it enters the viewport
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the actual image source when the element is visible in the viewport
          el.src = src
          observe.unobserve(el) // Stop observing after the image is loaded
        }
      })
    })

    observe.observe(el)
  },

  beforeUnmount(el: HTMLImageElement & { _observer?: IntersectionObserver }) {
    // Make sure to clean up the observer when the element is removed from DOM
    if (el._observer) {
      el._observer.disconnect()
    }
  },
}
