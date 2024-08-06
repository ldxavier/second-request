<template>
    <div
      class="character"
      v-for="(character, index) in getCharacters"
      :key="index"
    >
      <img :src="character.image" alt="character image" />
      <ul class="character1">
        <li>
          <RouterLink style="font-size: 20px;" :to="`/character-details/${character.id}`">
            <strong>{{ character.name }}</strong>
          </RouterLink>
        </li>
      </ul>
    </div>

</template>

<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

const store = useCharacterStore();

const getCharacters = computed(() => {
  return store.getCharacters;
});

onMounted(() => {
  store.fetchCharacters();
})

</script>

<style scoped>
  .character {
    color: black;
    justify-content: center;
    background-color: rgb(91, 182, 112);
    width: 30%;
    margin: auto;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

  }

  .character img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 1px black;
  }
  li{
    list-style-type: none;
  }
</style>
