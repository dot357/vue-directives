import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { vFocus } from './directives/focusCustomDirective'
import { vTooltip } from './directives/tooltipCustomDirective'
import { vDebounce } from './directives/debounceCustomDirective'

const app = createApp(App)

app.use(createPinia())

app.directive('focus', vFocus)
app.directive('tooltip', vTooltip)
app.directive('debounce', vDebounce)

app.mount('#app')
