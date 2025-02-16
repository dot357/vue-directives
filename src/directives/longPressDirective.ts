type ExtendedLongPressElement = HTMLElement & {
  _clearLongPress?: () => unknown
}

type LongPressEventBindings = {
  value: {
    onLongPress: ({ pressTime }: { pressTime: number }) => unknown
  }
  arg?: string
}

export const vLongPress = {
  mounted(el: ExtendedLongPressElement, binding: LongPressEventBindings) {
    const longPressTimer = binding.arg ? parseInt(binding.arg) : 300 // Default to 300ms if no argument is provided

    let pressStartTime: number = 0
    function longPressHandler(event: MouseEvent) {
      event.preventDefault()
      const pressRemoveTime = new Date().getTime()

      const isLongPressed = Math.abs(pressStartTime - pressRemoveTime) >= longPressTimer
      if (isLongPressed === false) {
        return
      }
      if (binding.value.onLongPress) {
        binding.value.onLongPress({
          pressTime: Math.abs(pressStartTime - pressRemoveTime),
        })
      }

      pressStartTime = 0
    }

    function longPressStartHandler(event: MouseEvent) {
      event.preventDefault()
      if (event.button !== 0) return
      pressStartTime = new Date().getTime()
    }

    // Add event listeners for long press
    el.addEventListener('mousedown', longPressStartHandler)
    el.addEventListener('mouseup', longPressHandler)

    el._clearLongPress = () => {
      el.removeEventListener('mouseup', longPressHandler)
    }
  },
  beforeUnmount(el: ExtendedLongPressElement) {
    if (el._clearLongPress) {
      el._clearLongPress()
    }
  },
}
