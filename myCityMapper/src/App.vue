<template>
  <div id="app">
    <v-app light>
      <navigation-drawer/>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav'
import NavigationDrawer from './components/NavigationDrawer'

export default {
  name: 'App',
  components: {
    BottomNav,
    NavigationDrawer
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

}
</style>
