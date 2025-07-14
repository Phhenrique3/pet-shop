<template>

  <form class="formulario" @submit.prevent="Login">
    <h1 class="title-cadastro">Crie sua conta</h1>
    <h2 class="sub-title"> Informe seus dados nos campos abaixo</h2>

    <input  class="input-cadastro" v-model="email" placeholder="Email" type="email" required />
    <input class="input-cadastro" v-model="senha" placeholder="Senha" type="password"  />

    <div class="buttons-directory">

    <button  class="button-cadstro"  type="submit">Login</button>
    <router-link to='/' class="button-volta">Volta</router-link>

    </div>
   

  </form>
</template>

<script lang="ts" setup> </script>