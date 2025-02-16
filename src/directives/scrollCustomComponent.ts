type ExtendedScrollElement = HTMLElement & {
  _clearScroll?: () => unknown
  _initialHeight?: number
}

type ScrollEventBindings = {
  value: {
    onScroll: () => unknown
  }
  arg?: string
}

export const vScroll = {
  mounted(el: ExtendedScrollElement, binding: ScrollEventBindings) {
    const scrollHandler = () => {
      if (binding.value?.onScroll) {
        binding.value.onScroll()
      }
    }
    const { height } = el.getBoundingClientRect()
    el._initialHeight = height

    function makeElementScrollable(element: HTMLElement) {
      if (binding.arg === undefined) {
        console.warn('v-scroll: {height} is required')
        return
      }
      element.style.overflow = 'scroll'
      element.style.maxHeight = `${binding.arg}px`
    }

    makeElementScrollable(el)

    el.addEventListener('scroll', scrollHandler)

    el._clearScroll = () => {
      el.removeEventListener('scroll', scrollHandler)
    }
  },
  beforeUnmount(el: ExtendedScrollElement) {
    if (el._clearScroll) {
      el._clearScroll()
    }

    el.style.maxHeight = 'unset'
    el.style.height = el._initialHeight + 'px'
    el.style.overflow = 'unset'
  },
}
