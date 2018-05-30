<template>
  <v-layout row wrap>
    <v-flex xs6>
      <v-card >
        <v-subheader>LYON TRANSIT</v-subheader>
        <location-text-field label="Départ" storeProperty="departure"></location-text-field>
        <v-btn icon ripple @click="getMyLocation">
          <v-icon color="blue lighten-1">my_location</v-icon>
        </v-btn>
        <location-text-field label="Arrivé" storeProperty="arrival"></location-text-field>
        <v-btn @click="search">Rechercher</v-btn>
      </v-card>
    </v-flex>
    <v-flex xs6>
      <journeys />
    </v-flex>
  </v-layout>
</template>

<script>
import Journeys from './Journeys'
import LocationTextField from './LocationTextField'
import modernizr from 'modernizr'

export default {
  name: 'Root',
  components: {
    LocationTextField,
    Journeys
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      departure: '',
      arrival: ''
    }
  },
  created: function () {
    if (modernizr.geolocation) {
      console.log('geolocation')
    }
    if (modernizr.localstorage) {
      console.log('local storage')
    }
  },
  methods: {
    getMyLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude
          let lon = position.coords.longitude
          console.log('getMyLocation: ', lat, lon)
        })
      } else {
        console.log('Your browser does not support GeoLocation')
      }
    },
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
          console.log(reponse)
          if (reponse.journeys !== undefined) {
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
