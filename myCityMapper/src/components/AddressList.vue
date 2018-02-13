<template>
  <div>
    <div class='' v-for="address in addresses" :key="address">
        <address-item v-bind:address="address"></address-item>
    </div>
  </div>
</template>

<script type = "text/javascript" >
import AddressItem from './AddressItem'
export default {
  props: ['addresses'],
  components: {
    AddressItem
  }
}
</script>
<style>
</style>
