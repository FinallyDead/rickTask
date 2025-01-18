<template>
  <div
    v-if="character" 
    class="flex flex-col min-h-[100%] p-10 space-y-5 items-center justify-center text-lg"
  >
    <img
      :src="character.image"
      class="mx-auto"
    />
    <label
    >
      Name: {{ character.name }}
    </label>
    <label
    >
      Gender: {{ character.gender }}
    </label>
    <label
    >
      Status: {{ character.status }}
    </label>
    <label
    >
      Species: {{ character.species }}
    </label>
    <label
    >
      Type: {{ !!character.type ? character.type : 'No info' }}
    </label>
    <label
    >
      Origin: {{ character.origin.name }}<br>
      {{ character.origin.url }}
    </label>
    <label
    >
      Location: {{ character.location.name }}<br>
      {{ character.location.url }}
    </label>
  </div>
</template>

<script>
import CharactersApiService from '@/api/characters'

export default {
  data() {
    return {
      character: {}
    }
  },
 async mounted() {
    const apiService = new CharactersApiService()
    await apiService.getCharacterById(this.$route.params.id)
      .then(response => {
        this.character = response
      })
  }
  
}
</script>
