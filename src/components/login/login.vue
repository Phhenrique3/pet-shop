<template>
  <div class="login-wrapper">
    <form class="formulario" @submit.prevent="Login">
      <h1 class="title-cadastro">🐾 Bem-vindo!</h1>
      <h2 class="sub-title">Entre com seus dados</h2>

<<<<<<< HEAD
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
=======
      <input
        class="input-cadastro"
        v-model="email"
        placeholder="E-mail"
        type="email"
        required
      />
>>>>>>> 47ceb81227be2467d680d7064ea31848dae3b472

      <input
        class="input-cadastro"
        v-model="senha"
        placeholder="Senha"
        type="password"
        required
      />

<<<<<<< HEAD
    <p v-if="erro" class="erro">{{ erro }}</p>
  </form>
=======
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
>>>>>>> 47ceb81227be2467d680d7064ea31848dae3b472
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
    const response = await fetch("http://localhost:3000/login/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
<<<<<<< HEAD
      body: JSON.stringify({
        email: email.value,
        senha: senha.value,
      }),
    });

    const data = await response.json().catch(() => ({
      error: "Usuário ou senha inválido",
    }));
=======
      body: JSON.stringify({ email: email.value, senha: senha.value }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = { error: "Usuário ou senha inválido" };
    }
>>>>>>> 47ceb81227be2467d680d7064ea31848dae3b472

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 47ceb81227be2467d680d7064ea31848dae3b472
}

.input-cadastro:focus {
  outline: none;
<<<<<<< HEAD
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
=======
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

>>>>>>> 47ceb81227be2467d680d7064ea31848dae3b472
</style>
