<template>
  <div id="myaddresses">
    <v-container fluid>
      <h1>Mes adresses</h1>
      <address-list></address-list>
    </v-container>
    <v-container fluid>
      <add-address></add-address>
    </v-container>
  </div>
</template>

<script>
import AddressList from './AddressList'
import AddAddress from './AddAddress'

export default {
  name: 'MyAddresses',
  components: {
    // Reference to the AddressList component
    AddressList,
    AddAddress
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
