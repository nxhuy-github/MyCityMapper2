<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div class="hello">
        <iframe
          width=auto
          height=auto
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBRiwkCHOWtJxdxys2GxyzEqxugRV1fP9g
            &q=Nautibus,Lyon" allowfullscreen>
        </iframe>
      </div>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AroundMe'
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
