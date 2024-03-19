<template>
  <div class="card">
    <RouterLink to="/characters">
      <button class="button"> Back </button>
    </RouterLink>
    <ul v-if="character">
      <img :src="character.image" :alt="character.name">
      <li>
        <h1>{{ character.name }}</h1>
      </li>
      <li><strong>Specie:</strong> {{ character.species }} <br/></li>
      <li><strong>Gender:</strong> {{ character.gender }}<br/></li>
      <li v-if="character.origin.name != 'unknown'"><strong>Origin:</strong> {{ character.origin.name }}<br/></li>
      <li><strong>City:</strong> {{ character.location.name }}</li>
      <li><strong>Status:</strong> {{ character.status }}</li>

      <li><strong>Episodes </strong>
        <button @click="seeUrl">See Url</button>
      </li>
      <li
        v-for="(ep, index) in character.episode"
        :key="index"
      >
        <span v-if="activeUrl">{{ ep }}</span>
        <span v-else>{{ index + 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ICharacter } from "@/types/characters";
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const character = ref<ICharacter | null>(null);
  const activeUrl = ref(false);

  onMounted(async() => {
    const id =route.params.id;
    try{
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    character.value = response.data;
    console.log(character.value);
    }
    catch (error){
      console.error(error);
    }
  })

  const seeUrl = () => {
    activeUrl.value = !activeUrl.value;
  }
</script>

<style scoped>
  li{
    list-style-type: none;
  }

  img {
    width: 130px;
    height: 130px;
    border-radius: 10%;
    border: solid 1px black;
  }

  .card {
    color: black;
    font-size: 20px;
    background-color: rgb(108, 133, 83);
    border-radius: 10px;
    width: 60%;
    height: auto;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button{
    background-color: rgb(226, 229, 224);
    margin: 30px 650px 0px 10px;
    padding: 5px;
    border: solid 0.5px black;
    border-radius: 4px;
    width: 60px;
    font-size: 16px;
  }
  .button:hover{
    background-color: rgb(217, 219, 216);
    color: black;
  }
</style>
