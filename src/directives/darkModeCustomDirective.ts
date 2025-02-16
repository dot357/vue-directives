type ExtendedDarkModeElement = HTMLElement & {
  _initialColorScheme?: string
}

export const vDarkMode = {
  mounted(el: ExtendedDarkModeElement) {
    // get initial color scheme
    const initialColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    console.log('Initial color scheme:', initialColorScheme)

    function init() {
      el._initialColorScheme = initialColorScheme
      el.style.colorScheme = 'dark'
      el.classList.add('prefers-dark')
    }

    init()
  },
  beforeUnmount(el: ExtendedDarkModeElement) {
    el.style.colorScheme = el._initialColorScheme ?? 'light'
    el.classList.remove('prefers-dark')
  },
}
