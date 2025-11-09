<template>
  <div class="home-wrapper">
    <Header />

    <section class="hero">
      <div class="hero-content">
        <h1 class="title">🐾 Bem-vindo ao  Petverso </h1>
        <p class="subtitle">
          O sistema completo para cuidar, agendar e gerenciar os serviços do seu pet com facilidade e amor.
        </p>

        <div class="buttons">
          <router-link to="/login" class="btn-primary">Entrar</router-link>
          <router-link to="/cadastro" class="btn-secondary">Criar Conta</router-link>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="/src/assets/petverso_home.png"
          alt="Dog illustration"
        />
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
          <p>Cadastre e acompanhe todas as informações do seu pet em um só lugar.</p>
        </div>

        <div class="card">
          <h3>💬 Atendimento Personalizado</h3>
          <p>Nosso sistema foi feito para se adaptar ao seu negócio e às suas necessidades.</p>
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
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #f9faff, #e9ecff);
  color: #333;
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 2rem;
  flex-wrap: wrap;
}

.hero-content {
  max-width: 500px;
  text-align: left;
  animation: fadeIn 0.8s ease;
}

.title {
  font-size: 1.5rem;
  color: #4e73df;
  font-weight: 800;
}

.title span {
  color: #6c5ce7;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  text-decoration: none;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 8px;
  transition: 0.3s ease;
}

.btn-primary {
  background-color: #4e73df;
  color: white;
}

.btn-primary:hover {
  background-color: #3751c1;
}

.btn-secondary {
  border: 2px solid #4e73df;
  color: #4e73df;
}

.btn-secondary:hover {
  background-color: #4e73df;
  color: #fff;
}

/* Imagem do Hero */
.hero-image img {
  max-width: 400px;
  width: 100%;
  animation: float 3s ease-in-out infinite;
}

/* Cards Section */
.features {
  background-color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  color: #4e73df;
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  background: #f8f9ff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  width: 300px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

.card h3 {
  color: #4e73df;
  margin-bottom: 0.8rem;
}

.card p {
  color: #555;
}

/* Footer */
.footer {
  background-color: #4e73df;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
}

/* Animações */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .hero-content {
    text-align: center;
  }

  .hero-image img {
    max-width: 280px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
