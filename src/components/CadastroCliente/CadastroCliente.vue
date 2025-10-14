<template>
  <div>
    <Header /> 
    <form class="formulario" @submit.prevent="cadastrarCliente">
      <h1 class="title-cadastro">Crie sua conta</h1>
      <h2 class="sub-title"> Informe seus dados nos campos abaixo</h2>

      <input class="input-cadastro" v-model="nome" placeholder="Nome" required />
      <input class="input-cadastro" v-model="email" placeholder="Email" type="email" required />
      <input class="input-cadastro" v-model="telefone" placeholder="Telefone" required />
      <input class="input-cadastro" v-model="senha" placeholder="Senha" type="password" required minlength="6" />

      <div class="buttons-directory">
        <button class="button-cadstro" type="submit">Cadastrar</button>
        <router-link to="/" class="button-volta">Voltar</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const nome = ref('')
const email = ref('')
const senha = ref('')
const telefone = ref('')
const router = useRouter()

async function cadastrarCliente() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email.value)) {
    alert("Por favor, insira um e-mail válido.")
    return
  }

  try {
    const res = await fetch('http://localhost:3000/api/clientes/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value
      })
    })

    if (!res.ok) throw new Error('Erro no cadastro')

    alert('Cliente cadastrado com sucesso!')
    router.push('/login')
    nome.value = ''
    email.value = ''
    senha.value = ''
    telefone.value = ''
  } catch (err) {
    alert(`Erro: ${(err as Error).message}`)
  }
}
</script>