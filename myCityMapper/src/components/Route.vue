<template>
  <v-list>
    <v-list-tile v-for="journey in journeys" :key=journey.id>
      <v-list-tile-content>Journey Duration: {{ journey.duration }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
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
