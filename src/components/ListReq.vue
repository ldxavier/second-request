<template>
<h1>People List</h1>
<div
  v-for="(person,index) in getPeople"
  :key="index"
  class="person"
>
<h2>{{ person.name }}</h2>
<strong>Height</strong>: {{ person.height }}<br/>
<strong>Hair Color</strong>: {{ person.hair_color}}<br/>
<strong>Skin Color</strong>: {{ person.skin_color}}<br/>
<strong>Eye Color</strong>:{{ person.eye_color}}<br/>
<strong>Birthday</strong>:{{ person.birth_year}}<br/>
<strong>Favorite movies</strong>:{{ person.films }}
</div>
</template>

<script setup lang="ts">
import { usePersonStore } from '@/stores/person';
import { computed, onMounted } from "vue";

const store = usePersonStore();

const getPeople = computed(() => {
  return store.getPeople;
});

onMounted(() => {
  store.fetchPeople();
})

</script>

<style scoped>
  .person {
    color: black;
    background-color: rgb(91, 182, 112);
    width: 40%;
    margin: auto;
    border: solid 1px black;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;

  }
</style>
