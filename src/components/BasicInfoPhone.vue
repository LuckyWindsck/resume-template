<template>
  <span>携帯電話：{{ phone }}</span>
</template>

<script setup>
defineProps({
  phone: {
    type: String,
    require: true,
  },
})
</script>

<style scoped>
</style>
