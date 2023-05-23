<template>
  <span>住所：{{ address }}</span>
</template>

<script setup>
defineProps({
  address: {
    type: String,
    require: true,
  },
})
</script>

<style scoped>
</style>
