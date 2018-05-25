<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Journeys</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="journey in journeys" :key=journey.id>
        <v-list-tile-content>Journey Duration: {{ journey.duration }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    journeys: function () {
      return this.$store.getters.journeys
    }
  }
}
</script>
