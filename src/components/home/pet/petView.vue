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
          <input v-model="form.nome" type="text" placeholder="Ex: Rex" />
        </div>

        <div class="form-group">
          <label>Raça</label>
          <input v-model="form.raca" type="text" placeholder="Ex: Labrador" />
        </div>

        <div class="form-group">
          <label>Espécie</label>
          <input v-model="form.especie" type="text" placeholder="Cachorro, Gato..." />
        </div>

        <button type="submit">Cadastrar Pet</button>
      </form>

      <!-- Mensagem -->
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </div>
  </div>
</template>

<script>
import Header from '../dashboard/headerDashbord.vue' // caminho relativo
export default {
  name: "CadastroPetCard",
  components: {
    Header
  },
  data() {
    return {
      form: {
        nome: "",
        raca: "",
        especie: ""
      },
      mensagem: ""
    }
  },
  methods: {
async cadastrarPet() {
  try {
    const clienteId = localStorage.getItem("clienteId")
    if (!clienteId) {
      this.mensagem = "Erro: Nenhum cliente cadastrado!"
      return
    }

    const response = await fetch("http://localhost:3000/api/pets/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...this.form, cliente_id: clienteId })
    })

    const data = await response.json()

    if (response.ok) {
      // Somente aqui o alert será mostrado
      alert('Pet cadastrado com sucesso!')

      this.mensagem = "Pet cadastrado com sucesso!"
      this.form = { nome: "", raca: "", especie: "" } // limpa o formulário
    } else {
      this.mensagem = data.erro || "Erro ao cadastrar pet"
    }
  } catch (err) {
    this.mensagem = "Erro ao conectar com o servidor"
    console.error(err)
  }
}

  }
}
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

.mensagem {
  margin-top: 12px;
  font-weight: bold;
  color: green;
  text-align: center;
}
</style>
