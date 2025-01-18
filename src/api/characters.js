import axios from 'axios'

export default class CharactersApiService {
  constructor() { }

  apiResponse = [];

  async getPage(url) {
    let charactersData = await axios.get(url)
      .then(response =>
        response.data
      )
    this.apiResponse = charactersData
  }

  async getCharacter(name) {
    let characterData = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response =>
        response.data
      )
    this.apiResponse = characterData
  }

  async getCharacterById(id) {
    let characterData = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response =>
        response.data
      )
    return characterData
  }

}