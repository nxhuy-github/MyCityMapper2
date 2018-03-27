<template>
  <v-layout row wrap>
    <v-flex xs6 md4 offset-md4>
      <v-form ref="form" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="[() => name.length > 0 || 'This field is required']"
          :counter="10"
          required
        ></v-text-field>
        <v-text-field
          label="Adresse"
          v-model="address"
          :rules="[() => address.length > 0 || 'This field is required']"
          required
        ></v-text-field>
        <v-checkbox
          label="Do you like it?"
          v-model="favorite"
          required
        ></v-checkbox>
        <v-btn @click="createAddress">submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script type = "text/javascript" >

export default {
  data: function () {
    return {
      name: '',
      address: '',
      favorite: false
    }
  },
  methods: {
    createAddress: function () {
      const name = this.name
      const address = this.address
      const favorite = this.favorite
      // this.$emit('add-address', {
      //   name: name,
      //   address: address,
      //   favorite: true
      // })
      this.$store.dispatch('addAddress', {
        name: name,
        address: address,
        favorite: favorite
      })
      this.name = this.address = ''
      this.favorite = false
    }
  }
}
</script>
<style>
