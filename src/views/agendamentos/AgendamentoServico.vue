<template>
  <Header />
  <h1>Agendamento de serviço</h1>

  <p>
    Você está agendando o serviço <strong>{{ servico }}</strong>
  </p>

  <form @submit.prevent="agendar">
    <label for="pet">Selecione o Pet:</label>
    <select v-model="petId">
      <option v-for="pet in pets" :key="pet.id" :value="pet.id">
        {{ pet.nome }}
      </option>
    </select>

    <label for="data">Data e hora do agendamento:</label>
    <input type="datetime-local" v-model="dataAgendamento" required />

    <label for="observacoes">Observações:</label>
    <textarea
      v-model="observacoes"
      placeholder="Ex: cortar unhas também"
    ></textarea>

    <button type="submit">Confirmar Agendamento</button>
  </form>
</template>

<script setup>
import Header from "@/components/home/dashboard/headerDashbord.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const servico = route.query.servico;

// Estado
const pets = ref([]);
const petId = ref(null);
const observacoes = ref("");
const dataAgendamento = ref("");

// ID do cliente logado
const clienteid = localStorage.getItem("clienteId");

// Buscar pets do cliente
onMounted(async () => {
  if (!clienteid) return;
  const resposta = await fetch(
    `http://localhost:3000/pets/clientes/${clienteid}/pets`
  );
  pets.value = await resposta.json();
});

// Função agendar
async function agendar() {
  if (!clienteid || !petId.value || !dataAgendamento.value) {
    alert("Preencha todos os campos obrigatórios");
    return;
  }

  // 1️⃣ Registrar agendamento no backend Node
  const resposta = await fetch("http://localhost:3000/atendimentos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cliente_id: clienteid,
      pet_id: petId.value,
      data: dataAgendamento.value,
      observacoes: observacoes.value,
    }),
  });

  const dados = await resposta.json();
  console.log("Agendamento criado:", dados);
  alert("Agendamento realizado com sucesso!");

  // 2️⃣ Enviar para n8n
  try {
    const payloadN8n = {
      cliente: clienteid,
      pet: petId.value,
      data: dataAgendamento.value,
      observacoes: observacoes.value,
      servico: servico,
    };

    const respostaN8n = await fetch(
      "http://localhost:5678/webhook/agendamento", // Webhook ativo no n8n
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadN8n),
      }
    );

    if (!respostaN8n.ok) throw new Error("Erro ao enviar para o n8n");

    const dadosN8n = await respostaN8n.json();
    console.log("Enviado ao n8n:", dadosN8n);
  } catch (erro) {
    console.error("Erro ao enviar para n8n:", erro);
  }
}
</script>