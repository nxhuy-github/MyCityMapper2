<template>
  <v-layout row wrap>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="blue-grey darken-2">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="navigateTo({name: item.route})">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="blue-grey darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" aria-hidden="true"></v-toolbar-side-icon>
        <v-toolbar-title>Lyon Transit</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon aria-hidden="true">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
  </v-layout>
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
        { title: 'Maison (Coming soon)', icon: 'face', route: '' },
        { title: 'Travail (Coming soon)', icon: 'work', route: '' },
        { title: 'Lignes', icon: 'directions', route: 'Lines' },
        { title: 'Video', icon: 'videocam', route: 'Video' }
      ],
      clipped: false
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
