<template>
  <div class="login-wrapper">
    <form class="formulario" @submit.prevent="Login">
      <h1 class="title-cadastro">🐾 Bem-vindo!</h1>
      <h2 class="sub-title">Entre com seus dados</h2>

      <input
        class="input-cadastro"
        v-model="email"
        placeholder="E-mail"
        type="email"
        required
      />

      <input
        class="input-cadastro"
        v-model="senha"
        placeholder="Senha"
        type="password"
        required
      />

      <router-link to="/cadastro" class="cadastro"
        >Não tem conta? Cadastre-se</router-link
      >

      <div class="buttons-directory">
        <button class="button-login" type="submit">Entrar</button>
        <router-link to="/" class="button-volta">Voltar</router-link>
      </div>

      <p v-if="erro" class="erro-msg">{{ erro }}</p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import "../css/login/Login.css"
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const senha = ref("");
const erro = ref("");
const router = useRouter();

async function Login() {
  try {
    const response = await fetch("http://localhost:3000/login/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, senha: senha.value }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = { error: "Usuário ou senha inválido" };
    }

    if (response.ok) {
      localStorage.setItem("clienteId", data.cliente.id);
      router.push("/dashboard");
    } else {
      erro.value = data.error || "Usuário ou senha inválido";
    }
  } catch (err) {
    erro.value = "Erro de conexão com o servidor";
    console.error("Erro no login:", err);
  }
}
</script>

