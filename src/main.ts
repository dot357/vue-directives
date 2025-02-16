import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { vFocus } from './directives/focusCustomDirective'
import { vTooltip } from './directives/tooltipCustomDirective'
import { vDebounce } from './directives/debounceCustomDirective'
import { vLazy } from './directives/lazyLoadCustomDirective'
import { vClickOutside } from './directives/clickOutsideCustomDirective'
import { vDrag } from './directives/dragCustomDirective'
import { vResizable } from './directives/resizableCustomDirective'
import { vScroll } from './directives/scrollCustomDirective'
import { vDarkMode } from './directives/darkModeCustomDirective'
import { vLongPress } from './directives/longPressDirective'

const app = createApp(App)

app.use(createPinia())

app.directive('focus', vFocus)
app.directive('tooltip', vTooltip)
app.directive('debounce', vDebounce)
app.directive('lazy', vLazy)
app.directive('click-outside', vClickOutside)
app.directive('drag', vDrag)
app.directive('resizable', vResizable)
app.directive('scroll', vScroll)
app.directive('dark-mode', vDarkMode)
app.directive('long-press', vLongPress)

app.mount('#app')
