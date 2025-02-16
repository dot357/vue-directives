export const vClickOutside = {
  beforeMount(
    el: HTMLElement & { _clickOutsideHandler: (event: MouseEvent) => unknown },
    binding: { value: (param: MouseEvent) => unknown },
  ) {
    // Define the click event handler
    const clickHandler = (event: MouseEvent) => {
      // Check if the click was outside the element
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event) // Call the method passed to the directive
      }
    }

    // Save the handler function on the element so it can be accessed later
    el._clickOutsideHandler = clickHandler

    // Add the event listener for clicks
    document.addEventListener('click', clickHandler)
  },

  beforeUnmount(el: HTMLElement & { _clickOutsideHandler: () => unknown }) {
    // Remove the event listener when the element is unmounted
    if (el._clickOutsideHandler) {
      document.removeEventListener('click', el._clickOutsideHandler)
    }
  },
}
