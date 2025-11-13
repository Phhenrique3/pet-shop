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

        <button @@submit.prevent="cadastrarPet" >Cadastrar Pet</button>
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
            <button @click="deletarPet(pet.id)">
              Excluir cadastro do meu pet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../dashboard/headerDashbord.vue";
import "@/components/css/cadastroPet/petView.css";
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

        const response = await fetch("http://localhost:3000/Pets/Cadastrar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...this.form, cliente_id: clienteId }),
        });

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
          `http://localhost:3000/pets/Clientes/${clienteId}/pets`
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

    async deletarPet(petId) {
      petId = Number(petId);
      try {
        const confirmar = confirm("Tem certeza que deseja excluir este pet?");
        if (!confirmar) return;

        const response = await fetch(`http://localhost:3000/Pets/${petId}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
          this.mensagem = "🐶 Pet excluído com sucesso!";
          // Atualiza a lista automaticamente após deletar
          this.pets = this.pets.filter((pet) => pet.id !== petId);
          setTimeout(() => (this.mensagem = ""), 3000);
        } else {
          this.mensagem = data.erro || "❌ Erro ao excluir o pet.";
        }
      } catch (err) {
        console.error("Erro ao excluir pet:", err);
        this.mensagem = "⚠️ Falha na conexão com o servidor.";
      }
    },
  },
};
</script>
