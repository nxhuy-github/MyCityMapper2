<template>
  <v-list-tile-content>
    <v-list-tile-content>
      <v-list-tile-title>{{ address.name }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-content>
      <v-list-tile-title>{{ address.address }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile-content>
</template>

<script>
export default {
  props: ['address']
}
</script>
