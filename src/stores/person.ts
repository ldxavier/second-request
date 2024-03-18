import { IPeople } from '@/types/people';
import axios from 'axios';
import { defineStore } from 'pinia';

export const usePersonStore = defineStore("person",{
  state: () => ({
    people: [] as IPeople []
  }),
  getters: {
    getPeople(state) {
      return state.people
    }

  },
  actions: {
    async fetchPeople() {
      try{
        const response = await axios.get('https://swapi.dev/api/people/?format=json')
        this.people = response.data.results
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }

})
