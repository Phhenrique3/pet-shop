<template>
  <Header />
  <h1>Agendamento de serviço</h1>

  <p>
    Você está agendando o serviço <strong>{{ servico }}</strong>
  </p>

  <form @submit.prevent="agendar">
    <label for="pet">Selecione o Pet:</label>
    <select v-model="petId" required>
      <option v-for="pet in pets" :key="pet.id" :value="pet.id">
        {{ pet.nome }}
      </option>
    </select>

    <label for="data">Data e hora do agendamento:</label>
    <input type="datetime-local" v-model="dataAgendamento" required />

    <label for="status">Status:</label>
    <select v-model="status" required>
      <option value="pendente">Pendente</option>
      <option value="confirmado">Confirmado</option>
      <option value="cancelado">Cancelado</option>
    </select>

    <label for="observacoes">Observações:</label>
    <textarea v-model="observacoes" placeholder="Ex: cortar unhas também"></textarea>

    <button type="submit">Confirmar Agendamento</button>
  </form>
</template>

<script setup lang="ts">
import Header from '@/components/home/dashboard/headerDashbord.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const servico = route.query.servico as string

// Estado
const pets = ref<{id: number, nome: string}[]>([])
const petId = ref<number | null>(null)
const observacoes = ref("")
const dataAgendamento = ref("") // nova propriedade para a data
const status = ref("pendente") // status inicial padrão

// pega id do cliente logado
const clienteId = localStorage.getItem("cliente_id")

// buscar pets desse cliente
onMounted(async () => {
  if (!clienteId) return
  const resposta = await fetch(`http://localhost:3000/api/clientes/${clienteId}/pets`)
  pets.value = await resposta.json()
})

// criar agendamento
async function agendar() {
  if (!clienteId || !petId.value || !dataAgendamento.value) {
    alert("Preencha todos os campos obrigatórios")
    return
  }

  const resposta = await fetch("http://localhost:3000/atendimentos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cliente_id: clienteId,
      pet_id: petId.value,
      data: dataAgendamento.value, // usa a data selecionada
      observacoes: observacoes.value,
      servico: servico,
      status: status.value // envia o status
    }),
  })

  const dados = await resposta.json()
  console.log("Agendamento criado:", dados)
  alert("Agendamento realizado com sucesso!")
}
</script>
