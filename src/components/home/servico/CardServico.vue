<template>
  <div :class="['card', highlight ? 'highlight' : '']">
    <div class="icon">{{ icon }}</div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
     <button @click="$emit('agendar', title)">Agendar</button>
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
.card {
  width: 200px; /* largura fixa pra controlar layout */
  padding: 1rem;
  border-radius: 1rem 0 0 1rem; /* arredondar só do lado esquerdo do primeiro card */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  background-color: #e5e7eb;
  color: #1f2937;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card.highlight {
  background-color: #fb923c;
  color: white;
}

.card:hover {
  transform: scale(1.05);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.description {
  font-size: 0.875rem;
  line-height: 1.625;
  text-align: center;
}


button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #4caf50;
  color: white;
  font-weight: bold;
}

.ul_link a:hover {
  background-color: #000;     /* escurece no hover */
}
</style>
