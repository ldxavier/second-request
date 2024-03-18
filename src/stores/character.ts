import axios from 'axios';
import { defineStore } from 'pinia';
import type { ICharacter } from '@/types/characters';


export const useCharacterStore = defineStore ("character",{
  state: () => ({
    characters: [] as ICharacter[],
  }),
  getters: {
    getCharacters(state) {
      return state.characters;
    }

  },

  actions: {
    async fetchCharacters() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        this.characters = response.data.results;
      }
      catch(error){
        alert(error)
        console.error(error);
      }
    }
  },
})
