<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NavBar from './components/NavBar.vue'

  export default Vue.extend({
    name: 'app',
    components: {NavBar}
  })
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
