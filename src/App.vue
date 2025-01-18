<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    const isStoreHaveData = this.$store.state.characters.length > 0
    if (!isStoreHaveData) {
      this.$store.dispatch('getCharacters')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
