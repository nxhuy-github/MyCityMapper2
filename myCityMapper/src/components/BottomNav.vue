<template>
  <v-card height="200px" flat>
    <!-- <div class="headline text-xs-center pa-5">Lyon transit</div> -->
    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
      <router-link to="/aroundme">
        <v-btn flat color="teal" value="recent">
          <span>Autour de moi</span>
          <v-icon>place</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/myaddresses">
      <v-btn flat color="teal" value="favorites">
        <span>Ajouter pointera</span>
        <v-icon>note add</v-icon>
      </v-btn>
      </router-link>

      <router-link to="">
        <v-btn flat color="teal" value="nearby">
            <span>Maison</span>
            <v-icon>home</v-icon>
        </v-btn>
      </router-link>

      <router-link to="">
        <v-btn flat color="teal" value="nearby">
            <span>Travail</span>
            <v-icon>work</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      e1: 'recent'
    }
  }
}
</script>
