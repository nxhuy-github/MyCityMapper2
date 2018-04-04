<template>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="light-blue" dark>
            <v-toolbar-title>Counter: {{ counter }}</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-tile v-for="(address, index) in addresses" :key="address.id">
              <v-list-tile-action>
                <v-icon v-if="address.favorite" color="yellow">star</v-icon>
              </v-list-tile-action>
              <address-item v-bind:address="address" ></address-item>
              <v-list-tile-action>
                <v-btn icon ripple v-on:click="deleteAddress(index)">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script type = "text/javascript" >
import AddressItem from './AddressItem'
export default {
  components: {
    AddressItem
  },
  computed: {
    addresses: function () {
      return this.$store.getters.addresses
    },
    counter: function () {
      return this.$store.getters.counter
    }
  },
  methods: {
    deleteAddress: function (index) {
      this.$store.dispatch('deleteAddress', {
        id: index
      })
    }
  }
}
</script>
<style>
</style>
