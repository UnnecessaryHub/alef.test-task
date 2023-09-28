import                    './index.scss'

import { createApp } from 'vue'

import mainStore     from '@/store'

import App           from './App.vue'
import router        from './router'

const app = createApp(App)

app.use(router)
app.use(mainStore)

app.mount('#app')
