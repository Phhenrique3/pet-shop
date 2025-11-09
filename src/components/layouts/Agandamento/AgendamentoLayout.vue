<template>
  <div class="agendamento-wrapper">
    <!-- Header com largura total -->
    <Header class="header-full" />

    <div class="agendamento-container">
      <h1>Agendamento de Serviço</h1>

      <p>
        Você está agendando o serviço <strong>{{ servico }}</strong>
      </p>

      <form @submit.prevent="agendar">
        <!-- PET -->
        <label for="pet">Selecione o Pet:</label>
        <select v-model="petId" required>
          <option disabled value="">Selecione...</option>
          <option v-for="pet in pets" :key="pet.id" :value="pet.id">
            {{ pet.nome }}
          </option>
        </select>

        <!-- DATA -->
        <label for="data">Data e hora do agendamento:</label>
        <input type="datetime-local" v-model="dataAgendamento" required />

        <!-- OBSERVAÇÕES -->
        <label for="observacoes">Observações:</label>
        <textarea
          v-model="observacoes"
          placeholder="Ex: cortar unhas também"
        ></textarea>

        <!-- BOTÃO -->
        <button type="submit" class="btn-confirmar">
          Confirmar Agendamento
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/home/dashboard/headerDashbord.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const servico = route.query.servico;

// Estados
const pets = ref([]);
const petId = ref("");
const observacoes = ref("");
const dataAgendamento = ref("");

// ID do cliente logado
const clienteid = localStorage.getItem("clienteId");

// Buscar pets do cliente
onMounted(async () => {
  if (!clienteid) return;

  try {
    const resposta = await fetch(
      `http://localhost:3000/pets/clientes/${clienteid}/pets`
    );
    pets.value = await resposta.json();
  } catch (erro) {
    console.error("Erro ao buscar pets:", erro);
  }
});

// Função para agendar
async function agendar() {
  if (!clienteid || !petId.value || !dataAgendamento.value) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  try {
    // 1️⃣ Cria o agendamento no backend
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

    // 2️⃣ Envia para n8n
    const payloadN8n = {
      cliente: clienteid,
      pet: petId.value,
      data: dataAgendamento.value,
      observacoes: observacoes.value,
      servico: servico,
    };

    const respostaN8n = await fetch(
      "http://localhost:5678/webhook/agendamento",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadN8n),
      }
    );

    if (!respostaN8n.ok) throw new Error("Erro ao enviar para o n8n");

    console.log("Enviado ao n8n:", await respostaN8n.json());
  } catch (erro) {
    console.error("Erro ao agendar:", erro);
    alert("Ocorreu um erro ao realizar o agendamento!");
  }
}
</script>

<style scoped>
/* Header 100% largura */
.header-full {
  width: 100%;
  z-index: 60;
}

/* Estrutura principal */
.agendamento-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f8ff, #e8f0ff);
  padding: 2rem;
}

/* Caixa do agendamento */
.agendamento-container {
  background: #fff;
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.5s ease-in-out;
  margin-top: 2rem; /* espaço entre o header e o conteúdo */
}

/* Título */
h1 {
  text-align: center;
  color: #0077ff;
  font-weight: 700;
}

/* Labels */
label {
  display: block;
  font-weight: 600;
  margin-top: 1rem;
  color: #333;
}

/* Inputs e selects */
select,
input,
textarea {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

select:focus,
input:focus,
textarea:focus {
  border-color: #0077ff;
  outline: none;
}

/* Botão */
.btn-confirmar {
  width: 100%;
  background-color: #0077ff;
  color: white;
  border: none;
  padding: 1rem;
  margin-top: 1.5rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-confirmar:hover {
  background-color: #005fd4;
  transform: scale(1.03);
}

/* Animação de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
