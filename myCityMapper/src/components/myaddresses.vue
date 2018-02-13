<template>
  <div id="myaddresses">
    <h1>Mes adresses</h1>
    <address-list v-bind:addresses="addresses"></address-list>
  </div>
</template>

<script>
import AddressList from './AddressList'

export default {
  name: 'MyAddresses',
  components: {
    // Reference to the AddressList component
    AddressList
  },
  data () {
    return {
      addresses: [{
        name: 'Maison',
        address: '34 rue Bolivar, 69005, Lyon',
        favorite: true
      }, {
        name: 'Travail',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: true
      }, {
        name: 'Nautibus',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: false
      }, {
        name: 'AML',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: false
      }]
    }
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
