export const vFocus = {
  mounted(el: HTMLInputElement) {
    // check if the element is an input element
    const focusableInputs = ['input', 'textarea', 'select']

    const isContentEditable = el.isContentEditable

    if (
      focusableInputs.includes(el.tagName.toLowerCase()) === false &&
      isContentEditable === false
    ) {
      console.warn(
        'v-focus can only be used on focusable elements (input, textarea, contenteditable)',
      )
      return
    }

    // focus
    el.focus()
  },
}
