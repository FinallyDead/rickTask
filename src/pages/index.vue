<template>
  <div
    v-if="characters.info" 
    class="flex flex-col min-h-[100%] p-10 space-y-5"
  >
    <div>
      <div>
        <label>
          Search by name
        </label>
      </div>
      <input 
        v-model="inputValue"
        type="text"
        class="border-solid border-2 rounded-md" 
      />
    </div>
    <div
      class="grid grid-cols-2 auto-rows-auto gap-x-2 gap-y-5 border-solid border-2 shadow-inner p-4 w-[70%] m-auto rounded-md justify-items-center"
    >
      <template v-if="characters.results.length > 0">
        <CharacterPreview
          v-for="character in characters.results"
          :key="character.id"
          :characterData="character"
        />
      </template>
      <template v-else>
        <div
          class="text-center col-span-2"
        >
          No characters founded
      </div>
      </template>
    </div>
    <div>
      <button
        @click="getPreviousPage"
        class="text-white bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        :class="{ 'cursor-not-allowed bg-blue-400 ': !isPreviousPageAvailable, 'hover:bg-blue-800': isPreviousPageAvailable }"
        :disabled="!isPreviousPageAvailable"
      >
        Previous page
      </button>
      <button
        @click="getNextPage"
        class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        :class="{ 'cursor-not-allowed bg-blue-400 ': !isNextPageAvailable, 'hover:bg-blue-800': isNextPageAvailable }"
        :disabled="!isNextPageAvailable"
      >
        Next page
      </button>
    </div>
  </div>
</template>

<script>
import CharacterPreview from '@/components/CardPreview.vue';
import _ from 'lodash'

export default {
  name: 'index',
  components: {
    CharacterPreview
  },
  data() {
    return {
      characters: {},
      inputValue: ''
    }
  },
  computed: {
    charactersComputed() {
      return this.$store.state.characters
    },
    isNextPageAvailable() {
      return this.characters.info.next
    },
    isPreviousPageAvailable() {
      return this.characters.info.prev
    }
    
  },
  methods: {
    getNextPage() {
      this.$store.dispatch('getCharacters', this.characters.info.next)
    },
    getPreviousPage() {
      this.$store.dispatch('getCharacters', this.characters.info.prev)
    },
    findByName: _.debounce(function(name) {
        if (name) {
          this.$store.dispatch('getCharacterByName', name)
        } else {
          this.$store.dispatch('getCharacters')
        }
      }, 1000)
  },
  watch: {
    charactersComputed(newValue) {
      this.characters = newValue
    },
    inputValue(newValue) {
      this.findByName(newValue)
    }
  }
}
</script>
