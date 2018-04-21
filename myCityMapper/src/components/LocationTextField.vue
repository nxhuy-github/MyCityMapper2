<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs6>
                <v-select
                    v-bind:label="label"
                    autocomplete
                    v-bind:loading="loading"
                    v-bind:items="items"
                    return-object
                    v-bind:search-input.sync="search"
                    v-bind:filter="noFilter"
                    v-model="select"
                    >
                    <template slot="selection" slot-scope="data">
                      {{data.item.name }}
                    </template>
                    <template slot="item" slot-scope="data">
                      {{data.item.name }}
                    </template>
                </v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script type = "text/javascript" >

export default {
  props: ['label', 'storeProperty'],
  data: function () {
    return {
      search: null,
      items: [],
      loading: false
    }
  },
  watch: {
    search: function (val) {
      // val est la valeur du champ texte
      val && this.querySelections(val)
    }
  },

  computed: {
    select: {
      get () {
         return this.$store.getters[this.storeProperty][name]
         },
         set (v) {
         const name = v.name
         const address = v.name
         const favorite = true
         var ob = {name: name, address: address, favorite: favorite};
         this.$store.dispatch(this.storeProperty, ob)
         }
      }
    },

  methods: {
    querySelections: function (val) {
      this.loading = true
      let mesEntetes = new Headers()
      mesEntetes.append('Authorization', '457fd3bc-c66d-4d87-b822-913ea8a8f610')
      let monInit = {
        method: 'GET',
        headers: mesEntetes
      }
      let maRequete = 'http://api.navitia.io/v1/coverage/fr-se/places?q=lieu'
      let that = this
      fetch(maRequete, monInit).then(function (reponse) {
        return reponse.json()
      }).then(function (reponse) {
        that.items = reponse.places
        that.loading = false
      })
    },
    noFilter: function (item, queryText, itemText) {
      const hasValue = val => val != null ? val : ''
      const text = hasValue(item.name)
      const query = hasValue(queryText)
      return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
    }
  }
}
</script>
