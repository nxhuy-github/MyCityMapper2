<template>
  <div id="app">
  <v-app>
   <v-content>
    <v-container fluid>
     <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <router-view></router-view>
        </v-flex>
      </v-layout>
     </v-container>
     </v-container>
    </v-content>
    <v-flex xs12>
      <bottom-nav/>
    </v-flex>
  </v-app>
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

}
</style>
