import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
// import Lara from "@/presets/lara"
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import App from './App.vue'
import router from './router'

// import as component
import Badge from 'primevue/badge'

// import as directive
import BadgeDirective from 'primevue/badgedirective'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: false,
  // pt: Lara,
  ripple: true
})
app.directive('badge', BadgeDirective)

app.mount('#app')
