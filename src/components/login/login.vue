<template>
  <form class="formulario" @submit.prevent="Login">
    <h1 class="title-cadastro">Entrar</h1>
    <h2 class="sub-title">Informe seus dados nos campos abaixo</h2>

    <input class="input-cadastro" v-model="email" placeholder="Email" type="email" required />
    <input class="input-cadastro" v-model="senha" placeholder="Senha" type="password" required />
          <router-link to="/cadastro" class="cadastro" >Cadastrar</router-link>


    <div class="buttons-directory">
      <button class="button-cadstro" type="submit">Login</button>
      <router-link to="/" class="button-volta">Voltar</router-link>
    </div>

    <p v-if="erro" style="color: red;">{{ erro }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const erro = ref('')
const router = useRouter()

async function Login() {
  try {
    const response = await fetch("http://localhost:3000/api/clientes/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        senha: senha.value
      }),
    })

    const data = await response.json()

    if (response.ok) {
      router.push('/dashboard')
    } else {
      erro.value = data.erro || 'Usuário ou senha inválido'
    }
  } catch (err) {
    erro.value = 'Erro de conexão com o servidor'
    console.error("Erro no login:", err)
  }
}
</script>
