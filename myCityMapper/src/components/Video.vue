<template>
<v-container fluid>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-btn @click="startVideo">Start Video</v-btn>
      <video id="video" width=100% height=auto autoplay></video>
      <template v-if="isCliked">
      <img id="fleche" height=auto src="../assets/up_arrow.png"/>
      </template>
      <!-- <v-btn id="snap" @click="snapPhoto">Snap Photo</v-btn> -->
      <canvas id="canvas" width=auto height=auto></canvas>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      isCliked: false
    }
  },
  methods: {
    startVideo () {
      this.isCliked = true
      let video = document.getElementById('video')
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
          video.src = window.URL.createObjectURL(stream)
          video.play()
        })
      }
      window.addEventListener('deviceorientation', function (event) {
        let alpha = event.alpha
        let beta = event.beta
        document.getElementById('fleche').style.transform = 'rotateX(' + beta + 'deg) ' + 'rotateZ(' + alpha + 'deg)'
      }, true)
    },
    snapPhoto () {
      let video = document.getElementById('video')
      let canvas = document.getElementById('canvas')
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, 640, 480)
    }
  }
}
</script>

<style>
img#fleche {
  top: 50%;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
