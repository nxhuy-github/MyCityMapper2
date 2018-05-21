<template>
<v-layout row wrap>
<v-flex xs6 md4 offset-md4>
  <v-subheader>LYON TRANSIT</v-subheader>
  <location-text-field label="Départ" storeProperty="departure"></location-text-field>
  <location-text-field label="Arrivé" storeProperty="arrival"></location-text-field>
  <v-btn @click="search">Rechercher</v-btn>
  <route />
</v-flex>
 </v-layout>
</template>

<script>
import Route from './Route'
import LocationTextField from './LocationTextField'

export default {
  name: 'Root',
  components: {
    LocationTextField,
    Route
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      departure: '',
      arrival: ''
    }
  },
  methods: {
    search () {
      const from = this.$store.getters.departure[0].id
      const to = this.$store.getters.arrival[0].id
      let mesEntetes = new Headers()
      mesEntetes.append('Authorization', '457fd3bc-c66d-4d87-b822-913ea8a8f610')
      let monInit = {
        method: 'GET',
        headers: mesEntetes
      }
      let maRequete = `http://api.navitia.io/v1/coverage/fr-se/journeys?from=${from}&to=${to}`
      let that = this
      fetch(maRequete, monInit)
        .then(function (reponse) {
          return reponse.json()
        })
        .catch(function (error) {
          console.log('An error has occured ', error)
        })
        .then(function (reponse) {
          if (reponse.journeys !== undefined) {
            // console.log(reponse)
            that.$store.dispatch('journeys', reponse.journeys)
          }
        })
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
