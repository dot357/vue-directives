type ExtendedDragElement = HTMLElement & {
  _clearEvents?: () => unknown
}

type DragEventBindings = {
  value: {
    start: (e: DragEvent) => unknown
    drag: (e: DragEvent) => unknown
    end: (e: DragEvent) => unknown
  }
}

export const vDrag = {
  mounted(el: ExtendedDragElement, binding: DragEventBindings) {
    // Define the drag event handler
    el.draggable = true

    const isBindingValueUndefined = () => {
      return binding.value === undefined
    }
    const dragStartHandler = (e: DragEvent) => {
      if (isBindingValueUndefined()) {
        return
      }
      if (binding.value.start) {
        binding.value.start(e)
      }
    }

    const dragHandler = (e: DragEvent) => {
      if (isBindingValueUndefined()) {
        return
      }
      if (binding.value.drag) {
        binding.value.drag(e)
      }
    }

    const dragEndHandler = (e: DragEvent) => {
      if (isBindingValueUndefined()) {
        return
      }
      if (binding.value.end) {
        binding.value.end(e)
      }
    }

    // Add event listeners for drag events
    el.addEventListener('dragstart', dragStartHandler)
    el.addEventListener('drag', dragHandler)
    el.addEventListener('dragend', dragEndHandler)

    el._clearEvents = () => {
      el.removeEventListener('dragstart', dragStartHandler)
      el.removeEventListener('drag', dragHandler)
      el.removeEventListener('dragend', dragEndHandler)
    }
  },

  beforeUnmount(el: ExtendedDragElement) {
    // Remove the event listener when the element is unmounted
    el.draggable = false
    if (el._clearEvents) {
      el._clearEvents()
    }
  },
}
