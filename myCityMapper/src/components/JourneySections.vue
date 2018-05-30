<template>
  <v-list>
    <v-list-tile v-for="section in sections" :key=section.id>
      <template v-if="section.type !== 'waiting'">
        <v-list-tile-content v-if="section.type === 'public_transport'">
          <v-btn icon ripple>
            <v-icon>subway</v-icon>
          </v-btn>
        </v-list-tile-content>
        <v-list-tile-content v-if="section.type === 'street_network'">
          <v-btn icon ripple>
            <v-icon>directions_walk</v-icon>
          </v-btn>
        </v-list-tile-content>
        <v-list-tile-content v-if="section.type === 'crow_fly'">
          <v-btn icon ripple>
            <v-icon>directions_walk</v-icon>
          </v-btn>
        </v-list-tile-content>
        <v-list-tile-content v-if="section.type === 'transfer'">
          <v-btn icon ripple>
            <v-icon>directions_walk</v-icon>
          </v-btn>
        </v-list-tile-content>
        <v-list-tile-content>
            from {{section.from.name}} to {{section.to.name}} during {{convertTime(section.duration)}}
        </v-list-tile-content>
      </template>
      <template v-else>
        <v-btn icon ripple>
          <v-icon>timer</v-icon>
        </v-btn>
        <v-list-tile-content>
          waiting during {{convertTime(section.duration)}}
        </v-list-tile-content>
      </template>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ['sections'],
  methods: {
    convertTime: function (second) {
      let date = new Date(null)
      date.setSeconds(second)
      return date.toISOString().substr(11, 8)
    }
  }
}
</script>
