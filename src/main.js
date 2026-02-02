import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

import { useCatalogStore } from './store/catalog'
const catalogStore = useCatalogStore(pinia)
catalogStore.init()

app.mount('#app')
