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

<style scoped>
/* Fundo */
.login-wrapper {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4e73df, #6c5ce7);
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

/* Card de login tela cheia */
.formulario {
  background: #fff;
  width: 100%;
  height: 100vh; /* ocupa 100% da altura da tela */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0; /* sem borda arredondada, pra ocupar a tela toda */
  box-shadow: none; /* remove sombra, opcional */
  text-align: center;
  padding: 2rem;
}

/* Títulos */
.title-cadastro {
  font-size: 2rem;
  color: #4e73df;
  margin-bottom: 0.5rem;
}

.sub-title {
  color: #777;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

/* Inputs */
.input-cadastro {
  width: 80%;
  max-width: 400px;
  padding: 12px;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: 0.2s;
}

.input-cadastro:focus {
  outline: none;
  border-color: #4e73df;
  box-shadow: 0 0 5px rgba(78, 115, 223, 0.4);
}

/* Link de cadastro */
.cadastro {
  display: block;
  margin-bottom: 1.5rem;
  color: #4e73df;
  text-decoration: none;
  font-size: 0.9rem;
}

.cadastro:hover {
  text-decoration: underline;
}

/* Botões */
.buttons-directory {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 80%;
  max-width: 400px;
}

.button-login {
  background: #4e73df;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.button-login:hover {
  background: #3751c1;
}

.button-volta {
  text-align: center;
  color: #fdfdfd;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #4e73df;
  border-radius: 8px;
  padding: 10px;
  transition: 0.3s;
}

.button-volta:hover {
  background: #4e73df;
  color: #fff;
}

/* Mensagem de erro */
.erro-msg {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: bold;
}

/* Responsivo */
@media (max-width: 480px) {
  .formulario {
    padding: 1.5rem;
  }

  .input-cadastro,
  .buttons-directory {
    width: 90%;
  }
}

</style>
