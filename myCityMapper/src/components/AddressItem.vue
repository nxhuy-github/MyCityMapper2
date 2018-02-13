<template>
  <p class='content'>
    <em class='label'>
        {{ address.name }}
    </em>
    <span class='desc'>
        {{ address.address }}
    </span>
  </p>
</template>

<script>
export default {
  props: ['address']
}
</script>
