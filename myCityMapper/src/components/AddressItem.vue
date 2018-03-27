<template>
  <div class="text-xs-center">
    <p class='content'>
      <em class='label'>
          {{ address.name }}
      </em>
      <span class='desc'>
          {{ address.address }}
      </span>
      <!-- <button v-on:click="deleteAddress">Supprimer</button> -->
      <v-btn fab dark small color="primary" v-on:click="deleteAddress">
        <v-icon dark>remove</v-icon>
      </v-btn>
    </p>
  </div>
</template>

<script>
export default {
  props: ['address'],
  data: function () {
    return {
      id: this.address.id
    }
  },
  methods: {
    deleteAddress: function () {
      const id = this.id
      this.$store.dispatch('deleteAddress', {
        id: id
      })
    }
  }
}
</script>
