<template>
  <Header />

  <h1 class="title servico">
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
    />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/home/dashboard/headerDashbord.vue'
import CardServico from '@/components/home/servico/CardServico.vue'

const cards  = [
  {
    icon: '🐶',
    title:'Banho e tosa',
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
.title.servico {
  color: rgb(73, 58, 58);
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: Arial, sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
}

/* Grid puro CSS para os cards */
.cards-grid {
display: grid;
gap: 1rem;
padding: 10px;
}

/* Responsivo para tablets e desktops */
@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  }
}
</style>
