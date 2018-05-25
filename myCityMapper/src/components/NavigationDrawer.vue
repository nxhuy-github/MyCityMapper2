<template>
  <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" stateless hide-overlay>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="../assets/only-lyon.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Lyon Transit</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" @click="navigateTo({name: item.route})">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: `Page d'accueil`, icon: 'home', route: 'Root' },
        { title: 'Autour de moi', icon: 'place', route: 'AroundMe' },
        { title: 'Ajouter pointer', icon: 'note_add', route: 'MyAddresses' },
        { title: 'Maison', icon: 'face', route: '' },
        { title: 'Travail', icon: 'work', route: '' },
        { title: 'Lignes', icon: 'directions', route: 'Lines' }
      ],
      mini: true,
      right: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
