<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card >
        <v-subheader>LYON TRANSIT</v-subheader>
        <location-text-field label="Départ" storeProperty="departure"></location-text-field>
        <geo-location :departure="true"/>
        <location-text-field label="Arrivé" storeProperty="arrival"></location-text-field>
        <geo-location :arrival="true"/>
        <v-btn @click="search">Rechercher</v-btn>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3>
      <journeys />
      <template v-if="hasInfo === false">Cannot found the information you need</template>
    </v-flex>
  </v-layout>
</template>

<script>
import Journeys from './Journeys'
import LocationTextField from './LocationTextField'
import modernizr from 'modernizr'
import GeoLocation from './Geolocation'

export default {
  name: 'Root',
  data () {
    return {
      hasInfo: true
    }
  },
  components: {
    LocationTextField,
    Journeys,
    GeoLocation
  },
  created: function () {
    if (modernizr.geolocation) {
      console.log(modernizr)
    }
  },
  methods: {
    search () {
      this.hasInfo = true
      const from = this.$store.getters.departure[0].id
      const to = this.$store.getters.arrival[0].id
      let mesEntetes = new Headers()
      mesEntetes.append('Authorization', '457fd3bc-c66d-4d87-b822-913ea8a8f610')
      let monInit = {
        method: 'GET',
        headers: mesEntetes
      }
      let maRequete = `https://api.navitia.io/v1/coverage/fr-se/journeys?from=${from}&to=${to}`
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
            that.$store.dispatch('reset')
          } else {
            that.hasInfo = false
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
