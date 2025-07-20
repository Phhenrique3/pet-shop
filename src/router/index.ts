import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/home.vue'
import CadastroCliente from '../components/CadastroCliente/CadastroCliente.vue'
import Login from '../components/login/login.vue'
import Dashboard  from '../components/home/dashboard/dashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: CadastroCliente },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard}


  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
