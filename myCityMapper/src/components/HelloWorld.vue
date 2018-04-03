<template>
<v-layout align-center justify-center>
<v-flex xs6 md4 offset-md4>
  <v-subheader>LYON TRANSIT</v-subheader>
  <v-form >
    <v-text-field
      label="Départ"
      v-model="depart"
      required
    ></v-text-field>
    <v-text-field
      label="Arrivée"
      v-model="arrivee"
      required
    ></v-text-field>
    <v-btn >Rechercher</v-btn>
  </v-form>
</v-flex>
 </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      depart: '',
      arrivee: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
