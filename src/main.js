import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './index.css'


const app = createApp(App)
app.use(router)
app.use(store)


import headerApp from '@/components/Header.vue'
app.component('headerApp', headerApp)

import relatosApp from '@/components/Relatos.vue'
app.component('relatosApp', relatosApp)

app.mount('#app')

