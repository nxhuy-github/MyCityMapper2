<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Lyon Transit</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-tile v-for="item in lines" :key="item.id" avatar >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.code }}, {{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.id }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.text_color === 'FFFFFF'">
              <v-btn icon ripple @click="getTimeLine(item.id)">
                <v-icon color="grey lighten-1">cloud_download</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action v-else>
              <v-btn icon ripple>
                <v-icon color="green darken-1">cloud_download</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      lines: []
    }
  },
  mounted (e) {
    let mesEntetes = new Headers()
    mesEntetes.append('Authorization', '457fd3bc-c66d-4d87-b822-913ea8a8f610')
    let monInit = {
      method: 'GET',
      headers: mesEntetes
    }
    let maRequete = 'https://api.navitia.io/v1/coverage/fr-se/networks/network:tcl/lines?'
    let that = this
    fetch(maRequete, monInit).then(function (reponse) {
      return reponse.json()
    }).then(function (reponse) {
      that.lines = reponse.lines
      let tmp = that.$store.getters.lines
      if (tmp.length !== 0) {
        that.lines.forEach(element => {
          for (let i = 0; i < tmp.length; i++) {
            if (element.id === tmp[i].id) {
              element.text_color = '#00ff1d'
              break
            }
          }
        })
      }
    })
  },
  methods: {
    getTimeLine: function (id) {
      let mesEntetes = new Headers()
      mesEntetes.append('Authorization', '457fd3bc-c66d-4d87-b822-913ea8a8f610')
      let monInit = {
        method: 'GET',
        headers: mesEntetes
      }
      let maRequete = `https://api.navitia.io/v1/coverage/fr-se/lines/${id}/route_schedules?from_datetime=20180722T120000&items_per_schedule=25`
      let that = this
      fetch(maRequete, monInit).then(function (reponse) {
        return reponse.json()
      }).then(function (reponse) {
        let rows = reponse.route_schedules[0].table.rows
        that.$store.dispatch('addLine', {
          id: id,
          stops: rows
        })
        for (let i = 0; i < that.lines.length; i++) {
          if (that.lines[i].id === id) {
            that.lines[i].text_color = '#00ff1d'
            break
          }
        }
      })
    }
  }
}
</script>
