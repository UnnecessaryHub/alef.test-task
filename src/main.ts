import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mainStore from "@/store";

const app = createApp(App)

app.use(router)
app.use(mainStore)

app.mount('#app')
