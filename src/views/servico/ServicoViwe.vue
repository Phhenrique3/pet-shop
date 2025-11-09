<template>
  <Header />

  <section class="servico-container">
    <h1 class="title">
      Tudo o que Seu Pet Precisa em um Só Lugar! 
    </h1>

    <div class="cards-grid">
      <CardServico
        v-for="(card, index) in cards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :description="card.description"
        :highlight="card.highlight"
        @agendar="irParaAgendamento"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Header from '@/components/home/dashboard/headerDashbord.vue'
import CardServico from "@/components/layouts/cadrServico/CardServico.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaAgendamento(servicoTitle: string) {
  router.push({ 
    path: '/Agendamento', 
    query: { servico: servicoTitle } 
  })
}

const cards = [
  {
    icon: '🐶',
    title: 'Banho e Tosa',
    description: 'Veterinários especializados garantindo cuidados personalizados.',
    highlight: false,
  },
  {
    icon: '💉',
    title: 'Vacinas',
    description: 'Vacinação sob medida para proteger seu pet contra doenças.',
    highlight: true,
  },
  {
    icon: '🧪',
    title: 'Exames',
    description: 'Exames laboratoriais detalhados para diagnóstico preciso.',
    highlight: false,
  },
  {
    icon: '🩻',
    title: 'Raio X',
    description: 'Raio-X de alta precisão para avaliação completa.',
    highlight: true,
  },
  {
    icon: '🔍',
    title: 'Ultrassom',
    description: 'Ultrassom de alta precisão para diagnósticos assertivos.',
    highlight: false,
  },
]
</script>

<style scoped>
/* ==== CONTAINER PRINCIPAL ==== */
.servico-container {
  background: linear-gradient(135deg, #fefefe, #f3f4f6);
  min-height: 100vh;
  padding: 2rem 1rem;
}

/* ==== TÍTULO ==== */
.title {
  color: #2e2e2e;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  text-transform: uppercase;
  position: relative;
}

/* ==== GRID DOS CARDS ==== */
.cards-grid {
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ==== RESPONSIVIDADE ==== */
@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ==== ANIMAÇÃO SUAVE ==== */
.cards-grid {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
