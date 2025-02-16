export const vDebounce = {
  mounted(
    el: HTMLInputElement & { _clearDebounce: () => void },
    binding: { value: (props?: unknown) => unknown; arg?: string },
  ) {
    const delay = binding.arg ? parseInt(binding.arg) : 300 // Default to 300ms if no argument is provided
    let timer: ReturnType<typeof setTimeout> | null = null

    const eventHandler = (event: Event) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        binding.value(event)
      }, delay)
    }

    el.addEventListener('input', eventHandler)

    el._clearDebounce = () => {
      el.removeEventListener('input', eventHandler)
    }
  },

  beforeUnmount(el: HTMLInputElement & { _clearDebounce: () => void }) {
    if (el._clearDebounce) {
      el._clearDebounce()
    }
  },
}
