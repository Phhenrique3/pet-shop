import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/homeView/home.vue'
import CadastroCliente from '../components/CadastroCliente/CadastroCliente.vue'
import Login from '../components/login/login.vue'
import Dashboard  from '../components/home/dashboard/dashboard.vue'
import Servico from '../components/home/servico/ServicoViwe.vue'
import CarServico from '../components/home/servico/CardServico.vue'
import Pet from '../components/home/pet/petView.vue'
import AgendamentoServico from '../components/home/servico/AgendamentoServico.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: CadastroCliente },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/servico', component: Servico },
  { path: '/Carservico', component: CarServico },
  { path: '/pet', component: Pet },
  { path: '/Agendamento',component: AgendamentoServico }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router