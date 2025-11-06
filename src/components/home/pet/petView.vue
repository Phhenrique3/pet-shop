<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Card do cadastro do pet -->
    <div class="card">
      <h2>Cadastrar Pet</h2>

      <form @submit.prevent="cadastrarPet">
        <div class="form-group">
          <label>Nome do Pet</label>
          <input
            v-model="form.nome"
            type="text"
            placeholder="Ex: Rex"
            required
          />
        </div>

        <div class="form-group">
          <label>Raça</label>
          <input
            v-model="form.raca"
            type="text"
            placeholder="Ex: Labrador"
            required
          />
        </div>

        <div class="form-group">
          <label>Espécie</label>
          <input
            v-model="form.especie"
            type="text"
            placeholder="Cachorro, Gato..."
            required
          />
        </div>

        <button @click="cadastrarPet">Cadastrar Pet</button>
        <div class="button-spacing">
          <button @click="listasPets">Lista meu pet</button>
        </div>
      </form>
      <!-- Mensagem -->
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>

      <div v-if="pets.length" class="pets-conteiner">
        <h2>Meu Pets</h2>

        <div class="pets-grid">
          <div v-for="pet in pets" :key="pet.id" class="pet-card">
            <p><strong>Nome:</strong> {{ pet.nome }}</p>
            <p><strong>Raça:</strong> {{ pet.raca }}</p>
            <p><strong>Espécie:</strong> {{ pet.especie }}</p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../dashboard/headerDashbord.vue";
export default {
  name: "CadastroPetCard",
  components: {
    Header,
  },
  data() {
    return {
      form: {
        nome: "",
        raca: "",
        especie: "",
      },
      mensagem: "",
      pets: [],
    };
  },
  methods: {
    async cadastrarPet() {
      try {
        const clienteId = localStorage.getItem("clienteId");
        if (!clienteId) {
          this.mensagem = "Erro: Nenhum cliente cadastrado!";
          return;
        }

        const response = await fetch(
          "http://localhost:3000/Pets/Cadastrar",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...this.form, cliente_id: clienteId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          this.mensagem = "Pet cadastrado com sucesso!";
          this.form = { nome: "", raca: "", especie: "" };
          setTimeout(() => {
            this.mensagem = "";
          }, 3000);
        } else {
          this.mensagem = data.erro || "Erro ao cadastrar pet";
        }
      } catch (err) {
        this.mensagem = "Erro ao conectar com o servidor";
        console.error(err);
      }
    },

    // listar
    async listasPets() {
      try {
        const clienteId = localStorage.getItem("clienteId");
        if (!clienteId) {
          this.mensagem = "⚠️ Nenhum cliente logado!";
          return;
        }

        // Faz a requisição pra sua API
        const response = await fetch(
          `http://localhost:3000/api/Clientes/${clienteId}/pets`
        );
        const data = await response.json();

        // Garante que vem um array
        this.pets = Array.isArray(data) ? data : [];

        console.log("Pets carregados:", this.pets);

        if (this.pets.length === 0) {
          this.mensagem = "🐾 Você ainda não tem pets cadastrados.";
        } else {
          this.mensagem = "";
        }
      } catch (err) {
        console.error("Erro ao listar pets:", err);
        this.mensagem = "❌ Erro ao listar pets.";
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f9f9f9;
}

h2 {
  margin-bottom: 16px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 12px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #444;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 10px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #1565c0;
}

.button-spacing {
  margin-top: 12px; /* espaçamento entre os botões */
}

.mensagem {
  margin-top: 12px;
  font-weight: bold;
  color: green;
  text-align: center;
}

.pets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.pet-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  text-align: left;
}
</style>
