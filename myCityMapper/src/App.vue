<template>
  <div id="app">
    <router-view/>
    <bottom-nav/>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav'

export default {
  name: 'App',
  components: {
    BottomNav
  }
}
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
