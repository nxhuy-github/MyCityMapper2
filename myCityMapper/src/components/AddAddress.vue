<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Ajouter une addresse</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              label="Nom"
              class="mt-5"
              v-model="name"
              :rules="[() => first.length > 0 || 'This field is required']"
              required
            ></v-text-field>
            <v-text-field
              label="Adresse"
              hint="This field is not required"
              v-model="address"
              :rules="[() => last.length > 0 || 'This field is required']"
            ></v-text-field>
            <small>*indicates required field</small>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn fab dark small color="indigo" v-on:click="createAddress">
      <v-icon dark>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script type = "text/javascript" >

export default {
  data: function () {
    return {
      name: '',
      address: ''
    }
  },
  methods: {
    createAddress: function () {
      const name = this.name
      const address = this.address
      // this.$emit('add-address', {
      //   name: name,
      //   address: address,
      //   favorite: true
      // })
      this.$store.dispatch('addAddress', {
        name: name,
        address: address,
        favorite: true
      })
    }
  }
}
</script>
<style>
