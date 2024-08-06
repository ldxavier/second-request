<template>
  <div class="home">
    <img alt="Rick and Morty" src="@/assets/rm.png" class="home-image">
    <p>Welcome to the Rick and Morty Project. </p>
    <p>Bem-vindo ao projeto Rick and Morty. Explore characters and more! </p>
    <router-link to="/characters">See characters</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.home h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.home p {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.home a {
  font-size: 1.2em;
  color: #42b983;
  text-decoration: none;
  border: 1px solid #42b983;
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home a:hover {
  background-color: #42b983;
  color: white;
}

.home-image {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  margin-bottom: 1em;
}
</style>
