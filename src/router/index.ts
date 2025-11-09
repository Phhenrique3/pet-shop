import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/homeView/home.vue'
import CadastroCliente from '../components/CadastroCliente/CadastroCliente.vue'
import Login from '../components/login/login.vue'
import Dashboard  from '../components/home/dashboard/dashboard.vue'
import Servico from '../views/servico/ServicoViwe.vue'
import CardServico from "@/components/layouts/cadrServico/CardServico.vue";
import Pet from '../components/home/pet/petView.vue'
import AgendamentoServico from '../components/layouts/Agandamento/AgendamentoLayout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: CadastroCliente },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/servico', component: Servico },
  { path: '/Carservico', component: CardServico },
  { path: '/pet', component: Pet },
  { path: '/Agendamento',component: AgendamentoServico }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router