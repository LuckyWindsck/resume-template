<template>
  <span>住所：{{ address }}</span>
</template>

<script setup>
defineProps({
  address: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
</style>
