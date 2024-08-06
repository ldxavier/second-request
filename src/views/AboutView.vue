<template>
  <div class="about">
    <h1>About the Project</h1>
    <p>This project uses the Rick and Morty API to display information about the characters from the series. It was developed as a way to practice making API requests in Vue.js using the Composition API.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
}

.about h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.about p {
  font-size: 1.2em;
  max-width: 600px;
}
</style>
