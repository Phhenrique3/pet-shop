<template>
  <Header /> 
  <div class="home-container">
    <header class="header">
      <h1>🐾 Petverso</h1>
      <p>Cuidando com carinho do seu melhor amigo</p>
    </header>

    <section class="actions">
      <router-link to="/cadastro" class="button">Cadastrar Cliente</router-link>
      <router-link to="/login" class="button button-secondary">Login</router-link>
    </section>

    <section class="services">
      <h2>Serviços</h2>
      <div class="service-list">
        <div class="service-item">
          <span>🛁</span>
          <p>Banho & Tosa</p>
        </div>
        <div class="service-item">
          <span>💉</span>
          <p>Consultas</p>
        </div>
        <div class="service-item">
          <span>🐶</span>
          <p>Hospedagem</p>
        </div>
      </div>
    </section>

    <section class="history">
      <router-link to="/historico" class="button button-outline">
        Ver Histórico de Serviços
      </router-link>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Petverso - Todos os direitos reservados</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header/Header.vue'
</script>
