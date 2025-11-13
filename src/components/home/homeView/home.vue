<template>
  <div class="home-wrapper">
    <Header />

    <section class="hero">
      <div class="hero-content">
        <h1 class="title">🐾 Bem-vindo ao Petverso</h1>
        <p class="subtitle">
          O sistema completo para cuidar, agendar e gerenciar os serviços do seu
          pet com facilidade e amor.
        </p>

        <div class="buttons">
          <router-link to="/login" class="btn-primary">Entrar</router-link>
          <router-link to="/cadastro" class="btn-secondary"
            >Criar Conta</router-link
          >
        </div>
      </div>

      <div class="hero-image">
        <img src="/src/assets/petverso_home.png" alt="Dog illustration" />
      </div>
    </section>

    <section class="features">
      <h2>Por que escolher o Petverso?</h2>
      <div class="cards">
        <div class="card">
          <h3>🐶 Agendamentos Fáceis</h3>
          <p>Agende banhos, tosa e consultas com apenas alguns cliques.</p>
        </div>

        <div class="card">
          <h3>💾 Controle de Pets</h3>
          <p>
            Cadastre e acompanhe todas as informações do seu pet em um só lugar.
          </p>
        </div>

        <div class="card">
          <h3>💬 Atendimento Personalizado</h3>
          <p>
            Nosso sistema foi feito para se adaptar ao seu negócio e às suas
            necessidades.
          </p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Petverso — Todos os direitos reservados 🐾</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import "@/components/css/homeView/homeView.css";
</script>
