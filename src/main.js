import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

registerPlugins(app)

app.mount('#app')
