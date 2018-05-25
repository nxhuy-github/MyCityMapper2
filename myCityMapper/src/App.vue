<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs3>
              <navigation-drawer/>
            </v-flex>
            <v-flex xs9>
              <router-view></router-view>
            </v-flex>
          </v-layout>
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
