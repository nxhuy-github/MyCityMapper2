<template>
  <p class='content'>
    <em class='label'>
        {{ address.name }}
    </em>
    <span class='desc'>
        {{ address.address }}
    </span>
    <button v-on:click="deleteAddress">Supprimer</button>
  </p>
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
