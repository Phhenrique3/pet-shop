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
import "/src/components/css/headerDashbord/headerDashbord.css";

const router = useRouter();

function logout() {
  localStorage.clear(); // limpa todo o localStorage
  router.push("/login"); // redireciona para a tela de login
}
</script>

