import './assets/home.css'
import './assets/main.css'
import './assets/cadastroCliente.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vue-toastification/dist/index.css"




createApp(App).use(router).mount('#app')
