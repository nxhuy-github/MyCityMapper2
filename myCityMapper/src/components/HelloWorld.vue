<template>
  <div class="hello">
    <div>
      <h1>Lyon transit</h1>
    </div>
    <div>
      <form>
        <input id="depart" name="depart" type="text" placeholder="Départ"/><br>
        <input id="arrivee" name="arrivee" type="text" placeholder="Arrivée"/><br>
        <input id="submit" type="submit" value="Rechercher"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
