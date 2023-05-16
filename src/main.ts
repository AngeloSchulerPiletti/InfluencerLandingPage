import '@/assets/scss/index.scss'
import { router } from '@/routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
