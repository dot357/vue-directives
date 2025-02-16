type ExtendedResizableElement = HTMLElement & {
  _clearEvents?: () => unknown
}

export const vResizable = {
  mounted(
    el: ExtendedResizableElement,
    binding: { value: Record<string, (props?: unknown) => unknown>; arg?: string },
  ) {
    let lastCheckedWidth = 0
    let lastCheckedHeight = 0

    function resizeEventHandler(event: MouseEvent) {
      const { width, height } = el.getBoundingClientRect()
      if (width === lastCheckedWidth && height === lastCheckedHeight) {
        return
      }
      lastCheckedWidth = width
      lastCheckedHeight = height

      if (binding.value?.onResize) {
        binding.value.onResize({
          width,
          height,
        })
      }
      //
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          makeElementResizable(el)
          const { width: initialWidth, height: initialHeight } = el.getBoundingClientRect()
          lastCheckedWidth = initialWidth
          lastCheckedHeight = initialHeight

          observer.unobserve(el)

          el.addEventListener('mousemove', resizeEventHandler)
        }
      })
    })

    function makeElementResizable(element: HTMLElement) {
      element.style.resize = 'both'
      element.style.overflow = 'auto'
    }

    // makeElementResizable(el)

    observer.observe(el)

    el._clearEvents = () => {
      el.removeEventListener('mousemove', resizeEventHandler)
    }
  },
  beforeUnmount(el: ExtendedResizableElement) {
    // Remove the event listener when the element is unmounted

    if (el._clearEvents) {
      el._clearEvents()
    }
  },
}
