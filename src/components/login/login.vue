<template>
  <form class="formulario" @submit.prevent="Login">
    <h1 class="title-cadastro">Entrar</h1>
    <h2 class="sub-title">Informe seus dados nos campos abaixo</h2>

    <!-- Campo de email -->
    <div class="input-container">
      <input
        class="input-cadastro"
        v-model="email"
        type="email"
        placeholder="Digite seu e-mail"
        required
      />
    </div>

    <!-- Campo de senha com botão de olho -->
    <div class="input-container">
      <input
        class="input-cadastro"
        v-model="senha"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Digite sua senha"
        required
      />
      <button
        type="button"
        class="btn-eye"
        @click="verSenha"
        :title="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
      >
        {{ showPassword ? '🙈' : '👁️' }}
      </button>
    </div>

    <router-link to="/cadastro" class="cadastro">Cadastrar</router-link>

    <div class="buttons-directory">
      <button class="button-cadstro" type="submit">Login</button>
      <router-link to="/" class="button-volta">Voltar</router-link>
    </div>

    <p v-if="erro" class="erro">{{ erro }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const senha = ref("");
const erro = ref("");
const showPassword = ref(false);
const router = useRouter();

function verSenha() {
  showPassword.value = !showPassword.value;
}

async function Login() {
  try {
    const response = await fetch("http://localhost:3000/api/clientes/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        senha: senha.value,
      }),
    });

    const data = await response.json().catch(() => ({
      error: "Usuário ou senha inválido",
    }));

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

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 350px;
  margin: auto;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-cadastro {
  width: 100%;
  padding: 12px 38px 12px 12px;
  border: 1.8px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-cadastro:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
}

.btn-eye {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #777;
  cursor: pointer;
}

.btn-eye:hover {
  color: #2563eb;
}

.erro {
  color: red;
  text-align: center;
  font-weight: 500;
}
</style>
