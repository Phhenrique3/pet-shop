<template>

  <form @submit.prevent="cadastrarCliente">
    <h2 class="title-cadastro">Cadastro Cliente</h2>

    <input v-model="nome" placeholder="Nome" required />
    <input v-model="email" placeholder="Email" type="email" required />
     <input v-model="telefone" placeholder="Telefone" type="telefone" required />
    <input v-model="senha" placeholder="Senha" type="password" required minlength="6" />

    <button type="submit">Cadastrar</button>
  </form>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'

    const nome = ref('')
    const email = ref('')
    const senha = ref('')
    const telefone = ref('')


async function cadastrarCliente() {
  try {
    const res = await fetch('http://localhost:3000/api/clientes/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      senha: senha.value,
      telefone: telefone.value
}),

    })

    if (!res.ok) throw new Error('Erro no cadastro')

    alert('Cliente cadastrado com sucesso!')
    nome.value = ''
    email.value = ''
    senha.value = ''
    telefone.value = ''
  } catch (err) {
    alert(`Erro: ${(err as Error).message}`)
  }
}

</script>

<style scoped>
input {
  display: block;
  margin-bottom: 12px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
}

button {
  padding: 10px 15px;
  background-color: #3b82f6;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2563eb;
}
</style>