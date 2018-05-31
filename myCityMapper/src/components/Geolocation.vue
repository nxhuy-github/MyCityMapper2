<template>
<v-layout>
  <v-flex v-if="departure">
  <v-btn icon ripple @click="getMyLocation('departure')">
    <v-icon color="blue lighten-1">my_location</v-icon>
  </v-btn>
  <template v-if="departureLoc !== ''">
    <v-chip close color="teal" text-color="white" @input="remove('departure')">
      <v-avatar>
        <v-icon>check_circle</v-icon>
      </v-avatar>
      Your departure is now your current location
    </v-chip>
  </template>
  </v-flex>
  <v-flex v-else>
    <v-btn icon ripple @click="getMyLocation('arrival')">
        <v-icon color="blue lighten-1">my_location</v-icon>
    </v-btn>
    <template v-if="arrivalLoc !== ''">
        <v-chip close color="teal" text-color="white" @input="remove('arrival')">
        <v-avatar>
            <v-icon>check_circle</v-icon>
        </v-avatar>
        Your arrival is now your current location
        </v-chip>
    </template>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  props: ['departure', 'arrival'],
  data () {
    return {
      departureLoc: '',
      arrivalLoc: ''
    }
  },
  methods: {
    remove (str) {
      if (str === 'arrival') {
        this.arrivalLoc = ''
      } else {
        this.departureLoc = ''
      }
    },
    getMyLocation (str) {
      if (navigator.geolocation) {
        let that = this
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude
          let lon = position.coords.longitude
          let location = `${lon}%3B${lat}`
          if (str === 'departure') {
            that.departureLoc = location
            let obj = {id: location, name: '', quality: ''}
            that.$store.dispatch('departure', obj)
          } else {
            that.arrivalLoc = location
            let obj = {id: location, name: '', quality: ''}
            that.$store.dispatch('arrival', obj)
          }
        })
      } else {
        console.log('Your browser does not support GeoLocation')
      }
    }
  }
}
</script>
