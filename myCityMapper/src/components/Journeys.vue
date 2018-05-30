<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Journeys</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-group v-for="journey in journeys" :key=journey.id >
        <v-list-tile slot="activator">
          <v-list-tile-content >
            <v-list-tile-title>From {{convertTime1(journey.departure_date_time)}} to {{convertTime1(journey.arrival_date_time)}} during {{convertTime2(journey.duration)}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <journey-sections :sections="journey.sections" />
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
import JourneySections from './JourneySections'

export default {
  methods: {
    convertTime1: function (string) {
      let a = string.split('T')[1]
      return `${a[0]}${a[1]}:${a[2]}${a[3]}:${a[4]}${a[5]}`
    },
    convertTime2: function (second) {
      let date = new Date(null)
      date.setSeconds(second)
      return date.toISOString().substr(11, 8)
    }
  },
  computed: {
    journeys: function () {
      return this.$store.getters.journeys
    }
  },
  components: {
    JourneySections
  }
}
</script>
