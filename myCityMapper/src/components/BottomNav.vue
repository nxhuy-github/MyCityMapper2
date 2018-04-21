<template>
  <v-card height="100px" style="overflow: hidden;" absolute="true">
    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
        <v-btn flat color="teal" value="page_accueil" @click="navigateTo({name: 'Root'})">
            <span>Page d'accueil</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="autourdemoi" @click="navigateTo({name: 'AroundMe'})">
          <span>Autour de moi</span>
          <v-icon>place</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="ajouter" @click="navigateTo({name: 'MyAddresses'})">
          <span>Ajouter pointera</span>
          <v-icon>note add</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="maison">
            <span>Maison</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="travail">
            <span>Travail</span>
            <v-icon>work</v-icon>
        </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      e1: 'page_accueil'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
