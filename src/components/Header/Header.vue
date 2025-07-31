<template>
  <header class="header">
    <div class="logo">🐾 PetShop</div>
    <nav>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}


</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4e73df;
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.4rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>