<template>
  <div class="cadastro-wrapper">
    <Header />

    <form class="formulario" @submit.prevent="cadastrarCliente">
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#4e73df"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7
              a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10
              8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </div>

      <h1 class="title-cadastro">Crie sua conta</h1>
      <h2 class="sub-title">Informe seus dados nos campos abaixo</h2>

      <input
        class="input-cadastro"
        v-model="nome"
        placeholder="Nome completo"
        required
      />
      <input
        class="input-cadastro"
        v-model="email"
        placeholder="E-mail"
        type="email"
        required
      />
      <input
        class="input-cadastro"
        v-model="telefone"
        placeholder="Telefone"
        required
      />
      <input
        class="input-cadastro"
        v-model="senha"
        placeholder="Senha"
        type="password"
        required
        minlength="6"
      />

      <div class="buttons-directory">
        <button class="button-cadastro" type="submit">Cadastrar</button>
        <router-link to="/login" class="button-volta">Voltar</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import "/src/components/css/cadastroCliente/cadastroCliente.css";

const nome = ref("");
const email = ref("");
const senha = ref("");
const telefone = ref("");
const router = useRouter();

async function cadastrarCliente() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/clientes/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
      }),
    });

    if (!res.ok) throw new Error("Erro no cadastro");

    alert("🎉 Cliente cadastrado com sucesso!");
    router.push("/login");

    nome.value = "";
    email.value = "";
    senha.value = "";
    telefone.value = "";
  } catch (err) {
    alert(`❌ Erro: ${(err as Error).message}`);
  }
}
</script>