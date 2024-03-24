import "./style.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"
// import Lara from "@/presets/lara"
import 'primevue/resources/themes/aura-light-green/theme.css'
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue, {
	unstyled: false,
	// pt: Lara,
	ripple: true
})

app.mount("#app")
