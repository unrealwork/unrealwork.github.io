<template>
  <div class="ui stackable menu">
    <router-link :to="'/'" class="item"
                 v-on:click.native="selected = null">
      <img src="../assets/logo.png"/>
    </router-link>
    <router-link class="item"
                 v-for="item in items"
                 :to="item.link"
                 :key="item.link"
                 v-on:click.native="selected = item"
                 v-bind:class="{active: selected === item}">
      {{item.name}}
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('nav-bar', {
    data() {
      return {
        items: [
          {
            link: '/about',
            name: 'About',
            isActive: false
          },
          {
            link: '/contacts',
            name: 'Contacts',
            isActive: false
          }
        ],
        selected: null
      }
    }
  })
</script>

<style scoped>

</style>
