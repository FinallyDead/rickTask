import Vue from 'vue'
import Vuex from 'vuex'
import CharactersApiService from '@/api/characters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  getters: {
    characters: state => state.characters
  },
  actions: {
    async getCharacters(store, url) {
      const apiService = new CharactersApiService()
      await apiService.getPage(url ?? 'https://rickandmortyapi.com/api/character')
      this.state.characters = apiService.apiResponse
    },
    async getCharacterByName(store, name) {
      const apiService = new CharactersApiService()
      await apiService.getCharacter(name)
      this.state.characters = apiService.apiResponse
    }
  }
})
