export const vTooltip = {
  mounted(el: HTMLElement & { _clearTooltip: () => void }) {
    // el.style.position = 'relative'
    const tooltipTemplates = el.querySelectorAll('template[name="tooltip"]')
    if (tooltipTemplates.length === 0) {
      console.warn('Target element must have a tooltip template')
      return
    }
    if (tooltipTemplates.length > 1) {
      console.warn('Target element can only have one tooltip template')
    }

    // this.emre = 'emre'

    const currentTooltip = tooltipTemplates[tooltipTemplates.length - 1] as HTMLElement

    const mouseEnterHandler = () => {
      currentTooltip.style.position = 'absolute'
      currentTooltip.style.display = 'block'
      currentTooltip.style.pointerEvents = 'none'
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      const tooltipWidth = currentTooltip.getBoundingClientRect().width
      if (e.clientX + tooltipWidth + 50 > window.innerWidth) {
        return
      }

      currentTooltip.style.left = `${e.clientX - 5}px`
    }

    const mouseLeaveHandler = () => {
      currentTooltip.style.display = 'none'
    }

    el.addEventListener('mouseenter', mouseEnterHandler)
    el.addEventListener('mousemove', mouseMoveHandler)

    el.addEventListener('mouseleave', mouseLeaveHandler)

    el._clearTooltip = () => {
      console.log('clear')
      el.removeEventListener('mouseenter', mouseEnterHandler)
      el.removeEventListener('mousemove', mouseMoveHandler)
      el.removeEventListener('mouseleave', mouseLeaveHandler)
    }
  },

  beforeUnmount(el: HTMLElement & { _clearTooltip: () => void }) {
    el._clearTooltip()
  },
}
