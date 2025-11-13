<template>
  <div :class="['card', { highlight }]" @click="$emit('agendar', title)">
    <div class="icon">{{ icon }}</div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>

    <button class="btn-agendar" @click.stop="$emit('agendar', title)">
      Agendar
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
  description: string
  highlight: boolean
}>()
</script>

<style scoped>
/* ==== CARD BASE ==== */
.card {
  width: 100%;
  max-width: 320px;
  background: white;
  border-radius: 1.25rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* ==== HOVER EFEITO ==== */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* ==== CARD DESTACADO ==== */
.card.highlight {
  background: linear-gradient(135deg, #ffb36b, #ff7b54);
  color: white;
  box-shadow: 0 12px 25px rgba(255, 123, 84, 0.3);
}

/* ==== ICON ==== */
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.card:hover .icon {
  transform: scale(1.1) rotate(5deg);
}

/* ==== TÍTULO ==== */
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

/* ==== DESCRIÇÃO ==== */
.description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.card.highlight .description {
  color: #fdfdfd;
}

/* ==== BOTÃO AGENDAR ==== */
.btn-agendar {
  background: #4caf50;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
}

.btn-agendar:hover {
  background: #45a049;
  transform: scale(1.05);
  box-shadow: 0 6px 14px rgba(76, 175, 80, 0.5);
}

/* ==== RESPONSIVO ==== */
@media (max-width: 500px) {
  .card {
    padding: 1.5rem 1rem;
  }

  .title {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.85rem;
  }

  .btn-agendar {
    padding: 0.5rem 1.2rem;
  }
}
</style>
