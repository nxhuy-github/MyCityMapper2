<template>
  <div>
    <div>
      Counter: {{ counter }}
    </div>
    <div class='' v-for="address in addresses" :key="address.id">
        <address-item v-bind:address="address"></address-item>
    </div>
  </div>
</template>

<script type = "text/javascript" >
import AddressItem from './AddressItem'
export default {
  // props: ['addresses'],
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
  }
}
</script>
<style>
</style>
