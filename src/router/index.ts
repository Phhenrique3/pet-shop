import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/home.vue'
import CadastroCliente from '../components/CadastroCliente/CadastroCliente.vue'
import Login from '../components/login/login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: CadastroCliente },
  { path: '/login', component: Login }

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
