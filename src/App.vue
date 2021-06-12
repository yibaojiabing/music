<template>
  <div id="App">
  <header-bar></header-bar>
  <tab-bar></tab-bar>
  <router-view></router-view>
  </div>
</template>
<script>
import headerBar from './components/headerBar/headerBar.vue'
import tabBar from './components/tabBar/tabBar.vue'
export default {
  name: 'App',
  components: {
    headerBar,
    tabBar
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: black;
  }
</style>
