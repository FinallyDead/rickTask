<template>
  <div 
    @click="goToDetails"
    class="items-center cursor-pointer w-fit"
  >
    <img
      :src="characterData.image"
      class="mx-auto"
    />
    <label
      class="text-lg"
    >
      {{ characterData.name }}
    </label>
  </div>
</template>

<script>
  export default {
    props: { 
      characterData: Object
    },
    methods: {
      goToDetails() {
        this.$router.push(`/card/${this.characterData.id}`)
      }
    }
  }
</script>