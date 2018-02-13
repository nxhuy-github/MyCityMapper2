<template>
  <div>
    <div v-for="address in addresses" :key="address">
      <div class='content'>
        <div class='header'>
        </div>
        <div class='meta'>
        </div>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript" >

export default {
  props: ['addresses']
}
</script>
<style>
</style>
