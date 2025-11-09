<template>
  <header class="header">
    <div class="logo">🐾 PetShop</div>
    <nav>
      <ul class="nav-links">
        <li><a href="/dashboard">Home</a></li>
        <li><a href="/servico">Serviços</a></li>
        <li><a href="/Pet">Meu Pet</a></li>
        <li><button @click="logout" class="logout-button">Sair</button></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.clear(); // limpa todo o localStorage
  router.push("/login"); // redireciona para a tela de login
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4e73df;
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.4rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 0;
  margin: 0;
}

.nav-links a,
.nav-links button {
  color: white;
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.nav-links a:hover,
.nav-links button:hover {
  text-decoration: underline;
}

.user-icon {
  height: 24px;
  width: 24px;
  cursor: pointer;
}
</style>
