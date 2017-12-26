<template>
  <div class="ui menu">
    <router-link :to="'/'" class="item"
                 v-on:click.native="selected = null" :class="{active: selected == null}">
      <img src="../../static/logo.svg"/>
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
  import {MenuItem} from '../models/menu-item.model'

  const items: Array<MenuItem> = [
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
  ]

  function itemByPath(path: String): any {
    for (let item of items) {
      if (path.indexOf(item.link) > -1) {
        return item
      }
    }
    return null
  }

  export default Vue.component('nav-bar', {
    data() {
      return {
        items: items,
        selected: itemByPath(this.$router.currentRoute.path)
      }
    }
  })
</script>

<style scoped>

</style>
